<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\MateriResource;
use App\Models\FileMateri;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Inertia\Inertia;

class MateriWebController extends Controller
{
    private function rememberListKey(string $key): void
    {
        $keys = Cache::get('materi_list_keys', []);
        if (!in_array($key, $keys)) {
            $keys[] = $key;
            Cache::put('materi_list_keys', $keys, 3600);
        }
    }

    private function forgetAllListCache(): void
    {
        $keys = Cache::get('materi_list_keys', []);
        foreach ($keys as $key) {
            Cache::forget($key);
        }
        Cache::forget('materi_list_keys');
    }

    /**
     * GET /admin/materi
     */
    public function index(Request $request)
    {
        $cacheKey = 'materi_list_admin_' . md5(json_encode($request->only(['search', 'type', 'page', 'per_page'])));
        $this->rememberListKey($cacheKey);

        $materi = Cache::remember($cacheKey, 60, function () use ($request) {
            return FileMateri::with('creator')
                ->when($request->search, fn($q) =>
                    $q->where('title', 'like', "%{$request->search}%")
                      ->orWhere('description', 'like', "%{$request->search}%")
                )
                ->when($request->type, fn($q) =>
                    $q->where('type', $request->type)
                )
                ->latest()
                ->paginate($request->per_page ?? 10)
                ->withQueryString();
        });

        // ✅ Wrap via MateriResource agar file_url, youtube_embed_url,
        // dan created_by.name ikut terkirim ke React
        $materiResource = MateriResource::collection($materi)->response()->getData(true);

        return Inertia::render('Admin/Materi/Index', [
            'materi'  => $materiResource,
            'filters' => $request->only(['search', 'type']),
        ]);
    }

    /**
     * GET /admin/materi/create
     */
    public function create()
    {
        return Inertia::render('Admin/Materi/Create');
    }

    /**
     * POST /admin/materi
     */
    public function store(Request $request)
    {
        $request->validate([
            'title'       => 'required|string|max:255',
            'description' => 'nullable|string',
            'type'        => 'required|in:pdf,image,youtube',
            'file'        => 'nullable|required_if:type,pdf,image|file|mimes:pdf,jpg,jpeg,png|max:20480',
            'youtube_url' => 'nullable|required_if:type,youtube|url',
        ], [
            'file.required_if'        => 'File wajib diupload untuk tipe PDF atau Image.',
            'youtube_url.required_if' => 'URL YouTube wajib diisi untuk tipe YouTube.',
            'file.mimes'              => 'Format file harus PDF, JPG, JPEG, atau PNG.',
            'file.max'                => 'Ukuran file maksimal 20MB.',
            'youtube_url.url'         => 'Format URL YouTube tidak valid.',
        ]);

        $data = [
            'title'       => $request->title,
            'description' => $request->description,
            'type'        => $request->type,
            'created_by'  => auth()->id(),
        ];

        if ($request->type === 'youtube') {
            $data['youtube_url'] = $request->youtube_url;
            $data['file_path']   = null;
        } else {
            $file     = $request->file('file');
            $folder   = $request->type === 'pdf' ? 'materi/pdf' : 'materi/images';
            $filename = Str::uuid() . '.' . $file->getClientOriginalExtension();
            $data['file_path']   = $file->storeAs($folder, $filename, 'public');
            $data['youtube_url'] = null;
        }

        FileMateri::create($data);
        $this->forgetAllListCache();

        return redirect()->route('admin.materi.index')
            ->with('success', 'Materi berhasil diupload!');
    }

    /**
     * GET /admin/materi/{id}/edit
     */
    public function edit($id)
    {
        $materi = FileMateri::with('creator')->findOrFail($id);

        return Inertia::render('Admin/Materi/Edit', [
            // ✅ FIX: Pakai MateriResource agar accessor file_url & youtube_embed_url
            // ikut di-serialize. Sebelumnya raw model → file_url null di frontend.
            'materi' => new MateriResource($materi),
        ]);
    }

    /**
     * POST /admin/materi/{id}
     */
    public function update(Request $request, $id)
    {
        $materi = FileMateri::findOrFail($id);

        $request->validate([
            'title'       => 'required|string|max:255',
            'description' => 'nullable|string',
            'type'        => 'required|in:pdf,image,youtube',
            'file'        => 'nullable|file|mimes:pdf,jpg,jpeg,png|max:20480',
            'youtube_url' => 'nullable|url',
        ], [
            'file.mimes'      => 'Format file harus PDF, JPG, JPEG, atau PNG.',
            'file.max'        => 'Ukuran file maksimal 20MB.',
            'youtube_url.url' => 'Format URL YouTube tidak valid.',
        ]);

        if ($request->hasFile('file')) {
            if ($materi->file_path) {
                Storage::disk('public')->delete($materi->file_path);
            }
            $file     = $request->file('file');
            $folder   = $request->type === 'pdf' ? 'materi/pdf' : 'materi/images';
            $filename = Str::uuid() . '.' . $file->getClientOriginalExtension();
            $materi->file_path = $file->storeAs($folder, $filename, 'public');
        }

        if ($request->type === 'youtube') {
            if ($materi->file_path) {
                Storage::disk('public')->delete($materi->file_path);
            }
            $materi->file_path = null;
        } else {
            $materi->youtube_url = null;
        }

        $materi->fill($request->only(['title', 'description', 'type', 'youtube_url']));
        $materi->save();

        Cache::forget("materi_{$id}");
        Cache::forget("materi_siswa_{$id}");
        $this->forgetAllListCache();

        return redirect()->route('admin.materi.index')
            ->with('success', 'Materi berhasil diperbarui!');
    }

    /**
     * DELETE /admin/materi/{id}
     */
    public function destroy($id)
    {
        $materi = FileMateri::findOrFail($id);

        if ($materi->file_path) {
            Storage::disk('public')->delete($materi->file_path);
        }

        $materi->delete();

        Cache::forget("materi_{$id}");
        Cache::forget("materi_siswa_{$id}");
        $this->forgetAllListCache();

        return redirect()->route('admin.materi.index')
            ->with('success', 'Materi berhasil dihapus!');
    }

    /**
     * GET /admin/materi/{id}/download
     */
    public function download($id)
    {
        $materi = FileMateri::findOrFail($id);

        if ($materi->type === 'youtube') {
            return back()->with('error', 'Tipe YouTube tidak bisa didownload.');
        }

        if (!$materi->file_path || !Storage::disk('public')->exists($materi->file_path)) {
            return back()->with('error', 'File tidak ditemukan.');
        }

        $filePath = Storage::disk('public')->path($materi->file_path);
        $fileName = Str::slug($materi->title) . '.' . pathinfo($materi->file_path, PATHINFO_EXTENSION);

        return response()->download($filePath, $fileName);
    }
}
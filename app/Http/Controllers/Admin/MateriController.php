<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\MateriResource;
use App\Models\FileMateri;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class MateriController extends Controller
{
    /**
     * Simpan cache key list ke registry, supaya bisa di-invalidate tanpa Cache::flush()
     */
    private function rememberListKey(string $key): void
    {
        $keys = Cache::get('materi_list_keys', []);
        if (!in_array($key, $keys)) {
            $keys[] = $key;
            Cache::put('materi_list_keys', $keys, 3600);
        }
    }

    /**
     * Hapus semua cache list materi (tanpa menyentuh cache lain)
     */
    private function forgetAllListCache(): void
    {
        $keys = Cache::get('materi_list_keys', []);
        foreach ($keys as $key) {
            Cache::forget($key);
        }
        Cache::forget('materi_list_keys');
    }

    /**
     * GET api/list-materi (Admin)
     */
    public function index(Request $request)
    {
        $cacheKey = 'materi_list_admin_' . md5(json_encode($request->all()));

        // Daftarkan key ini ke registry
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
                ->paginate($request->per_page ?? 10);
        });

        return MateriResource::collection($materi)
            ->additional(['message' => 'Berhasil mengambil daftar materi']);
    }

    /**
     * GET api/show-materi/{id} (Admin)
     */
    public function show($id)
    {
        $materi = Cache::remember("materi_{$id}", 120, function () use ($id) {
            return FileMateri::with('creator')->findOrFail($id);
        });

        return (new MateriResource($materi))
            ->additional(['message' => 'Berhasil mengambil detail materi']);
    }

    /**
     * POST api/upload-materi (Admin)
     */
    public function store(Request $request)
    {
        $request->validate([
            'title'       => 'required|string|max:255',
            'description' => 'nullable|string',
            'type'        => 'required|in:pdf,image,youtube',
            'file'        => 'required_if:type,pdf,image|file|mimes:pdf,jpg,jpeg,png|max:20480',
            'youtube_url' => 'required_if:type,youtube|nullable|url',
        ], [
            'file.required_if'        => 'File wajib diupload untuk tipe PDF atau Image.',
            'youtube_url.required_if' => 'URL YouTube wajib diisi untuk tipe YouTube.',
            'file.mimes'              => 'Format file harus PDF, JPG, JPEG, atau PNG.',
            'file.max'                => 'Ukuran file maksimal 20MB.',
        ]);

        $data = [
            'title'       => $request->title,
            'description' => $request->description,
            'type'        => $request->type,
            'created_by'  => auth()->id(),
        ];

        if ($request->type === 'youtube') {
            $data['youtube_url'] = $request->youtube_url;
        } else {
            $file     = $request->file('file');
            $folder   = $request->type === 'pdf' ? 'materi/pdf' : 'materi/images';
            $filename = Str::uuid() . '.' . $file->getClientOriginalExtension();
            $data['file_path'] = $file->storeAs($folder, $filename, 'public');
        }

        $materi = FileMateri::create($data);

        // FIX: hanya invalidate cache list materi, bukan semua cache
        $this->forgetAllListCache();

        return (new MateriResource($materi->load('creator')))
            ->additional(['message' => 'Materi berhasil diupload'])
            ->response()
            ->setStatusCode(201);
    }

    /**
     * PUT api/update-materi/{id} (Admin)
     */
    public function update(Request $request, $id)
    {
        $materi = FileMateri::findOrFail($id);

        $request->validate([
            'title'       => 'sometimes|required|string|max:255',
            'description' => 'nullable|string',
            'type'        => 'sometimes|required|in:pdf,image,youtube',
            'file'        => 'nullable|file|mimes:pdf,jpg,jpeg,png|max:20480',
            'youtube_url' => 'nullable|url',
        ]);

        if ($request->hasFile('file')) {
            if ($materi->file_path) {
                Storage::disk('public')->delete($materi->file_path);
            }
            $file     = $request->file('file');
            $folder   = ($request->type ?? $materi->type) === 'pdf' ? 'materi/pdf' : 'materi/images';
            $filename = Str::uuid() . '.' . $file->getClientOriginalExtension();
            $materi->file_path = $file->storeAs($folder, $filename, 'public');
        }

        $materi->fill($request->only(['title', 'description', 'type', 'youtube_url']));
        $materi->save();

        // FIX: forget cache admin + cache siswa + semua cache list
        Cache::forget("materi_{$id}");
        Cache::forget("materi_siswa_{$id}");
        $this->forgetAllListCache();

        return (new MateriResource($materi->load('creator')))
            ->additional(['message' => 'Materi berhasil diperbarui']);
    }

    /**
     * DELETE api/delete-materi/{id} (Admin)
     */
    public function destroy($id)
    {
        $materi = FileMateri::findOrFail($id);

        if ($materi->file_path) {
            Storage::disk('public')->delete($materi->file_path);
        }

        $materi->delete(); // SoftDelete

        // FIX: forget cache admin + cache siswa + semua cache list
        Cache::forget("materi_{$id}");
        Cache::forget("materi_siswa_{$id}");
        $this->forgetAllListCache();

        return response()->json(['message' => 'Materi berhasil dihapus']);
    }

    /**
     * GET api/materi-download/{id} (Admin)
     */
    public function download($id)
    {
        $materi = FileMateri::findOrFail($id);

        if ($materi->type === 'youtube') {
            return response()->json([
                'message'     => 'Tipe YouTube tidak bisa didownload, gunakan salin link.',
                'youtube_url' => $materi->youtube_url,
            ], 422);
        }

        if (!$materi->file_path || !Storage::disk('public')->exists($materi->file_path)) {
            return response()->json(['message' => 'File tidak ditemukan'], 404);
        }

        $filePath = Storage::disk('public')->path($materi->file_path);
        $fileName = Str::slug($materi->title) . '.' . pathinfo($materi->file_path, PATHINFO_EXTENSION);

        return response()->download($filePath, $fileName);
    }
}
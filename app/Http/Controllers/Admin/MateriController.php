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
     * GET api/list-materi (Admin)
     * Dengan pagination, filter, dan caching
     */
    public function index(Request $request)
    {
        $cacheKey = 'materi_list_admin_' . md5(json_encode($request->all()));

        $materi = Cache::remember($cacheKey, 60, function () use ($request) {
            $query = FileMateri::with('creator')
                ->when($request->search, fn($q) =>
                    $q->where('title', 'like', "%{$request->search}%")
                      ->orWhere('description', 'like', "%{$request->search}%")
                )
                ->when($request->type, fn($q) =>
                    $q->where('type', $request->type)
                )
                ->latest();

            return $query->paginate($request->per_page ?? 10);
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
            $file      = $request->file('file');
            $folder    = $request->type === 'pdf' ? 'materi/pdf' : 'materi/images';
            $filename  = Str::uuid() . '.' . $file->getClientOriginalExtension();
            $path      = $file->storeAs($folder, $filename, 'public');
            $data['file_path'] = $path;
        }

        $materi = FileMateri::create($data);

        // Clear cache list
        Cache::flush();

        return (new MateriResource($materi->load('creator')))
            ->additional(['message' => 'Materi berhasil diupload'])
            ->response()
            ->setStatusCode(201);
    }

    /**
     * PUT api/update-materi/{id} (Admin) — bonus endpoint
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
            // Hapus file lama
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

        Cache::forget("materi_{$id}");
        Cache::flush();

        return (new MateriResource($materi->load('creator')))
            ->additional(['message' => 'Materi berhasil diperbarui']);
    }

    /**
     * DELETE api/delete-materi/{id} (Admin) — bonus endpoint
     */
    public function destroy($id)
    {
        $materi = FileMateri::findOrFail($id);

        // Hapus file fisik kalau ada
        if ($materi->file_path) {
            Storage::disk('public')->delete($materi->file_path);
        }

        $materi->delete(); // SoftDelete

        Cache::forget("materi_{$id}");
        Cache::flush();

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
                'message' => 'Tipe YouTube tidak bisa didownload, gunakan salin link.',
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
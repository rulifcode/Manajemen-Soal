<?php

namespace App\Http\Controllers\Siswa;

use App\Http\Controllers\Controller;
use App\Http\Resources\MateriResource;
use App\Models\FileMateri;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;

class MateriController extends Controller
{
    /**
     * GET api/list-materi (Siswa)
     */
    public function index(Request $request)
    {
        $cacheKey = 'materi_list_siswa_' . md5(json_encode($request->all()));

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
     * GET api/detail-materi/{id} (Siswa)
     */
    public function show($id)
    {
        $materi = Cache::remember("materi_siswa_{$id}", 120, function () use ($id) {
            return FileMateri::with('creator')->findOrFail($id);
        });

        return (new MateriResource($materi))
            ->additional(['message' => 'Berhasil mengambil detail materi']);
    }
}
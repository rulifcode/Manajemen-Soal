<?php

namespace App\Http\Controllers\Siswa;

use App\Http\Controllers\Controller;
use App\Models\FileMateri;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
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

    /**
     * GET /siswa/materi
     */
    public function index(Request $request)
    {
        $cacheKey = 'materi_list_siswa_' . md5(json_encode($request->only(['search', 'type', 'page', 'per_page'])));
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
                ->withQueryString()
                ->through(fn($m) => [
                    'id'          => $m->id,
                    'title'       => $m->title,
                    'description' => $m->description,
                    'type'        => $m->type,
                    'file_url'    => $m->file_url,
                    'youtube_url' => $m->youtube_url,
                    'created_at'  => $m->created_at->format('d M Y'),
                    'created_by'  => $m->creator ? [
                        'id'   => $m->creator->id,
                        'name' => $m->creator->name,
                    ] : null,
                ]);
        });

        return Inertia::render('Siswa/Materi/Index', [
            'materi'  => $materi,
            'filters' => $request->only(['search', 'type']),
        ]);
    }

    /**
     * GET /siswa/materi/{id}
     */
    public function show($id)
    {
        $data = Cache::remember("materi_siswa_{$id}", 120, function () use ($id) {
            $materi = FileMateri::with('creator')->findOrFail($id);

            return [
                'id'                => $materi->id,
                'title'             => $materi->title,
                'description'       => $materi->description,
                'type'              => $materi->type,
                'file_url'          => $materi->file_url,
                'youtube_url'       => $materi->youtube_url,
                'youtube_embed_url' => $materi->youtube_embed_url,
                'created_at'        => $materi->created_at->format('d M Y'),
                'created_by'        => $materi->creator ? [
                    'id'   => $materi->creator->id,
                    'name' => $materi->creator->name,
                ] : null,
            ];
        });

        return Inertia::render('Siswa/Materi/Show', [
            'materi' => $data,
        ]);
    }
}
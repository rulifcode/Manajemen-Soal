<?php

namespace App\Http\Controllers\Siswa;

use App\Http\Controllers\Controller;
use App\Models\FileMateri;
use Illuminate\Support\Facades\Cache;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        $stats = Cache::remember('dashboard_stats_siswa', 60, function () {
            return [
                'totalMateri'  => FileMateri::count(),
                'totalPdf'     => FileMateri::where('type', 'pdf')->count(),
                'totalImage'   => FileMateri::where('type', 'image')->count(),
                'totalYoutube' => FileMateri::where('type', 'youtube')->count(),
                'recentMateri' => FileMateri::with('creator')
                    ->latest()
                    ->take(6)
                    ->get()
                    ->map(fn($m) => [
                        'id'          => $m->id,
                        'title'       => $m->title,
                        'description' => $m->description,
                        'type'        => $m->type,
                        'created_at'  => $m->created_at->format('d M Y'),
                        'created_by'  => $m->creator?->name ?? 'Admin',
                    ]),
            ];
        });

        return Inertia::render('Siswa/Dashboard', $stats);
    }
}
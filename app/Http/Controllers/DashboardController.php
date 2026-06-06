<?php

namespace App\Http\Controllers;

use App\Models\FileMateri;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        $stats = Cache::remember('dashboard_stats', 60, function () {
            $totalMateri   = FileMateri::count();
            $totalSiswa    = User::where('role', 'siswa')->count();
            $totalPdf      = FileMateri::where('type', 'pdf')->count();
            $totalImage    = FileMateri::where('type', 'image')->count();
            $totalYoutube  = FileMateri::where('type', 'youtube')->count();

            // Upload per bulan (6 bulan terakhir)
            $uploadPerBulan = FileMateri::selectRaw('MONTH(created_at) as bulan, YEAR(created_at) as tahun, COUNT(*) as total')
                ->where('created_at', '>=', now()->subMonths(6))
                ->groupBy('tahun', 'bulan')
                ->orderBy('tahun')
                ->orderBy('bulan')
                ->get()
                ->map(fn($item) => [
                    'label' => \Carbon\Carbon::create($item->tahun, $item->bulan)->translatedFormat('M Y'),
                    'total' => $item->total,
                ]);

            // Upload terbaru
            $recentUploads = FileMateri::with('creator')
                ->latest()
                ->take(5)
                ->get()
                ->map(fn($m) => [
                    'id'         => $m->id,
                    'title'      => $m->title,
                    'type'       => $m->type,
                    'created_at' => $m->created_at->format('d M Y'),
                    'created_by' => $m->creator?->name ?? '-',
                ]);

            return compact(
                'totalMateri', 'totalSiswa',
                'totalPdf', 'totalImage', 'totalYoutube',
                'uploadPerBulan', 'recentUploads'
            );
        });

        return Inertia::render('Dashboard', $stats);
    }
}
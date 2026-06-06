<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Admin\MateriWebController;
use App\Http\Controllers\Siswa\MateriWebController as SiswaMateriWebController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin'       => Route::has('login'),
        'canRegister'    => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion'     => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    if (auth()->user()->role === 'admin') {
        return redirect()->route('admin.dashboard');
    }
    return redirect()->route('siswa.dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// ── Admin Routes ──────────────────────────────────────────────
Route::middleware(['auth', 'role:admin'])->prefix('admin')->name('admin.')->group(function () {
    Route::get('/dashboard', [App\Http\Controllers\DashboardController::class, 'index'])->name('dashboard');
    Route::get('/materi',           [MateriWebController::class, 'index'])->name('materi.index');
    Route::get('/materi/create',    [MateriWebController::class, 'create'])->name('materi.create');
    Route::post('/materi',          [MateriWebController::class, 'store'])->name('materi.store');
    Route::get('/materi/{id}/edit', [MateriWebController::class, 'edit'])->name('materi.edit');
    Route::post('/materi/{id}',     [MateriWebController::class, 'update'])->name('materi.update');
    Route::delete('/materi/{id}',   [MateriWebController::class, 'destroy'])->name('materi.destroy');
    Route::get('/materi/{id}/download', [MateriWebController::class, 'download'])->name('materi.download');
});

// ── Siswa Routes ──────────────────────────────────────────────
Route::middleware(['auth', 'role:siswa'])->prefix('siswa')->name('siswa.')->group(function () {
    Route::get('/dashboard', [App\Http\Controllers\Siswa\DashboardController::class, 'index'])->name('dashboard');
    Route::get('/materi',      [SiswaMateriWebController::class, 'index'])->name('materi.index');
    Route::get('/materi/{id}', [SiswaMateriWebController::class, 'show'])->name('materi.show');
});

require __DIR__.'/auth.php';
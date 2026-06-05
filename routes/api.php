<?php

use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\Admin\MateriController as AdminMateriController;
use App\Http\Controllers\Siswa\MateriController as SiswaMateriController;
use Illuminate\Support\Facades\Route;

Route::post('/login', [AuthController::class, 'login']);

Route::middleware('auth:sanctum')->group(function () {

    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/me',      [AuthController::class, 'me']);

    // ── Admin routes ─────────────────────────────────────────
    Route::middleware('role:admin')->group(function () {
        Route::get('/list-materi',           [AdminMateriController::class, 'index']);   // FIX: dipindah ke sini
        Route::get('/show-materi/{id}',      [AdminMateriController::class, 'show']);
        Route::post('/upload-materi',        [AdminMateriController::class, 'store']);
        Route::post('/update-materi/{id}',   [AdminMateriController::class, 'update']);
        Route::delete('/delete-materi/{id}', [AdminMateriController::class, 'destroy']);
        Route::get('/materi-download/{id}',  [AdminMateriController::class, 'download']);
    });

    // ── Siswa routes ──────────────────────────────────────────
    Route::middleware('role:siswa')->group(function () {
        Route::get('/list-materi',         [SiswaMateriController::class, 'index']);    // FIX: dipindah ke sini
        Route::get('/detail-materi/{id}',  [SiswaMateriController::class, 'show']);
    });

});
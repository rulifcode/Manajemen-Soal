<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class FileMateri extends Model
{
    use HasFactory, SoftDeletes;

    protected $table = 'file_materi';

    protected $fillable = [
        'title',
        'description',
        'type',
        'file_path',
        'youtube_url',
        'created_by',
    ];

    protected $appends = [
        'file_url',
        'youtube_embed_url',
    ];

    // ── Relasi ───────────────────────────────────────────────
    public function creator()
    {
        return $this->belongsTo(User::class, 'created_by');
    }

    // ── Accessor: URL publik file ─────────────────────────────
    public function getFileUrlAttribute(): ?string
    {
        if ($this->file_path) {
            return asset('storage/' . $this->file_path);
        }
        return null;
    }

    // ── Accessor: YouTube embed URL ───────────────────────────
    public function getYoutubeEmbedUrlAttribute(): ?string
    {
        if (!$this->youtube_url) return null;

        preg_match(
            '/(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/',
            $this->youtube_url,
            $matches
        );

        $id = $matches[1] ?? null;
        return $id ? "https://www.youtube.com/embed/{$id}" : null;
    }
}
<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class MateriResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id'                => $this->id,
            'title'             => $this->title,
            'description'       => $this->description,
            'type'              => $this->type,
            'file_url'          => $this->file_url,
            'youtube_url'       => $this->youtube_url,
            'youtube_embed_url' => $this->youtube_embed_url,
            'created_by'        => [
                'id'   => $this->creator->id,
                'name' => $this->creator->name,
            ],
            'created_at'        => $this->created_at->format('d M Y'),
            'updated_at'        => $this->updated_at->format('d M Y'),
        ];
    }
}
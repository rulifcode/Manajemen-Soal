import { Head, Link } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

const TYPE_BADGE = {
    pdf:     { label: 'PDF',     bg: 'bg-red-100 text-red-700 ring-red-200' },
    image:   { label: 'Image',   bg: 'bg-blue-100 text-blue-700 ring-blue-200' },
    youtube: { label: 'YouTube', bg: 'bg-green-100 text-green-700 ring-green-200' },
};

const TYPE_ICON = {
    pdf: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm-1 1.5L18.5 9H13V3.5zM8 17h8v1H8v-1zm0-3h8v1H8v-1zm0-3h5v1H8v-1z"/>
        </svg>
    ),
    image: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M21 19V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2zM8.5 13.5l2.5 3 3.5-4.5 4.5 6H5l3.5-4.5z"/>
        </svg>
    ),
    youtube: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23 7s-.3-2-1.2-2.8c-1.1-1.2-2.4-1.2-3-1.3C16.6 2.8 12 2.8 12 2.8s-4.6 0-6.8.1c-.6.1-1.9.1-3 1.3C1.3 5 1 7 1 7S.7 9.1.7 11.3v2c0 2.1.3 4.3.3 4.3s.3 2 1.2 2.8c1.1 1.2 2.6 1.1 3.3 1.2C7.3 21.8 12 21.8 12 21.8s4.6 0 6.8-.2c.6-.1 1.9-.1 3-1.3.9-.8 1.2-2.8 1.2-2.8s.3-2.1.3-4.3v-2C23.3 9.1 23 7 23 7zM9.7 15.5V8.4l8.1 3.6-8.1 3.5z"/>
        </svg>
    ),
};

function PreviewPDF({ url }) {
    return (
        <div className="w-full rounded-2xl overflow-hidden ring-1 ring-gray-200 bg-gray-50">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-200 bg-white">
                <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm-1 1.5L18.5 9H13V3.5z"/>
                </svg>
                <span className="text-sm font-medium text-gray-600">Preview PDF</span>
                <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-auto text-xs text-indigo-600 hover:underline flex items-center gap-1"
                >
                    Buka di tab baru
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                </a>
            </div>
            <iframe
                src={url}
                className="w-full"
                style={{ height: '70vh' }}
                title="Preview PDF"
            />
        </div>
    );
}

function PreviewYoutube({ embedUrl, originalUrl }) {
    return (
        <div className="w-full rounded-2xl overflow-hidden ring-1 ring-gray-200 bg-gray-50">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-200 bg-white">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23 7s-.3-2-1.2-2.8c-1.1-1.2-2.4-1.2-3-1.3C16.6 2.8 12 2.8 12 2.8s-4.6 0-6.8.1c-.6.1-1.9.1-3 1.3C1.3 5 1 7 1 7S.7 9.1.7 11.3v2c0 2.1.3 4.3.3 4.3s.3 2 1.2 2.8c1.1 1.2 2.6 1.1 3.3 1.2C7.3 21.8 12 21.8 12 21.8s4.6 0 6.8-.2c.6-.1 1.9-.1 3-1.3.9-.8 1.2-2.8 1.2-2.8s.3-2.1.3-4.3v-2C23.3 9.1 23 7 23 7zM9.7 15.5V8.4l8.1 3.6-8.1 3.5z"/>
                </svg>
                <span className="text-sm font-medium text-gray-600">Video YouTube</span>
                <a
                    href={originalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-auto text-xs text-indigo-600 hover:underline flex items-center gap-1"
                >
                    Buka di YouTube
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                </a>
            </div>
            <div className="aspect-video">
                <iframe
                    src={embedUrl}
                    className="w-full h-full"
                    allowFullScreen
                    title="Video YouTube"
                />
            </div>
        </div>
    );
}

function PreviewImage({ url, title }) {
    return (
        <div className="w-full rounded-2xl overflow-hidden ring-1 ring-gray-200 bg-gray-50">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-200 bg-white">
                <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M21 19V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2zM8.5 13.5l2.5 3 3.5-4.5 4.5 6H5l3.5-4.5z"/>
                </svg>
                <span className="text-sm font-medium text-gray-600">Preview Gambar</span>
                <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-auto text-xs text-indigo-600 hover:underline flex items-center gap-1"
                >
                    Buka ukuran penuh
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                </a>
            </div>
            <div className="p-4 flex items-center justify-center bg-gray-50 min-h-64">
                <img
                    src={url}
                    alt={title}
                    className="max-w-full max-h-[70vh] object-contain rounded-xl shadow-sm"
                />
            </div>
        </div>
    );
}

export default function Show({ materi }) {
    const badge = TYPE_BADGE[materi.type];

    return (
        <AuthenticatedLayout
            header={
                <div className="flex items-center gap-3">
                    <Link
                        href={route('siswa.materi.index')}
                        className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </Link>
                    <h2 className="text-xl font-semibold text-gray-800 line-clamp-1">{materi.title}</h2>
                </div>
            }
        >
            <Head title={materi.title} />

            <div className="py-8">
                <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-6">

                    {/* Info Card */}
                    <div className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-100 p-6">
                        <div className="flex items-start justify-between gap-4 flex-wrap">
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium ring-1 ${badge.bg}`}>
                                        {TYPE_ICON[materi.type]}
                                        {badge.label}
                                    </span>
                                </div>
                                <h1 className="text-xl font-bold text-gray-900 mb-2">{materi.title}</h1>
                                {materi.description && (
                                    <p className="text-sm text-gray-500 leading-relaxed">{materi.description}</p>
                                )}
                            </div>
                        </div>

                        {/* Meta */}
                        <div className="flex flex-wrap gap-4 mt-4 pt-4 border-t border-gray-100">
                            <div className="flex items-center gap-1.5 text-xs text-gray-400">
                                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                                <span>Diupload oleh <strong className="text-gray-600">{materi.created_by?.name ?? 'Admin'}</strong></span>
                            </div>
                            <div className="flex items-center gap-1.5 text-xs text-gray-400">
                                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <span>{materi.created_at}</span>
                            </div>
                        </div>
                    </div>

                    {/* Preview */}
                    {materi.type === 'pdf' && materi.file_url && (
                        <PreviewPDF url={materi.file_url} />
                    )}

                    {materi.type === 'youtube' && materi.youtube_embed_url && (
                        <PreviewYoutube
                            embedUrl={materi.youtube_embed_url}
                            originalUrl={materi.youtube_url}
                        />
                    )}

                    {materi.type === 'image' && materi.file_url && (
                        <PreviewImage url={materi.file_url} title={materi.title} />
                    )}

                    {/* Fallback kalau file tidak ada */}
                    {!materi.file_url && !materi.youtube_embed_url && (
                        <div className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-100 py-16 text-center">
                            <svg className="w-10 h-10 mx-auto mb-3 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                            <p className="text-sm font-medium text-gray-500">File tidak tersedia</p>
                            <p className="text-xs text-gray-400 mt-1">Hubungi admin untuk informasi lebih lanjut</p>
                        </div>
                    )}

                    {/* Back button */}
                    <div className="flex justify-start">
                        <Link
                            href={route('siswa.materi.index')}
                            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 border border-gray-200 rounded-xl hover:bg-gray-50 transition"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                            Kembali ke Daftar Soal
                        </Link>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
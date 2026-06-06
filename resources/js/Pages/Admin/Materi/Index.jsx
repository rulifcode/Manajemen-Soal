import { useState } from 'react';
import { Head, Link, router, usePage } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

const TYPE_BADGE = {
    pdf:     { label: 'PDF',     bg: 'bg-red-100 text-red-700 ring-red-200' },
    image:   { label: 'Image',   bg: 'bg-blue-100 text-blue-700 ring-blue-200' },
    youtube: { label: 'YouTube', bg: 'bg-green-100 text-green-700 ring-green-200' },
};

const TYPE_ICON = {
    pdf: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm-1 1.5L18.5 9H13V3.5zM8 17h8v1H8v-1zm0-3h8v1H8v-1zm0-3h5v1H8v-1z"/>
        </svg>
    ),
    image: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M21 19V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2zM8.5 13.5l2.5 3 3.5-4.5 4.5 6H5l3.5-4.5z"/>
        </svg>
    ),
    youtube: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23 7s-.3-2-1.2-2.8c-1.1-1.2-2.4-1.2-3-1.3C16.6 2.8 12 2.8 12 2.8s-4.6 0-6.8.1c-.6.1-1.9.1-3 1.3C1.3 5 1 7 1 7S.7 9.1.7 11.3v2c0 2.1.3 4.3.3 4.3s.3 2 1.2 2.8c1.1 1.2 2.6 1.1 3.3 1.2C7.3 21.8 12 21.8 12 21.8s4.6 0 6.8-.2c.6-.1 1.9-.1 3-1.3.9-.8 1.2-2.8 1.2-2.8s.3-2.1.3-4.3v-2C23.3 9.1 23 7 23 7zM9.7 15.5V8.4l8.1 3.6-8.1 3.5z"/>
        </svg>
    ),
};

// ── Preview Modal ─────────────────────────────────────────────────────────────
function PreviewModal({ item, onClose }) {
    if (!item) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal panel */}
            <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] flex flex-col overflow-hidden">
                {/* Header */}
                <div className="flex items-start justify-between p-5 border-b border-gray-100 shrink-0">
                    <div className="flex items-center gap-3 min-w-0">
                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium ring-1 shrink-0 ${TYPE_BADGE[item.type].bg}`}>
                            {TYPE_ICON[item.type]}
                            {TYPE_BADGE[item.type].label}
                        </span>
                        <div className="min-w-0">
                            <h3 className="font-semibold text-gray-900 truncate">{item.title}</h3>
                            {item.description && (
                                <p className="text-xs text-gray-400 mt-0.5 line-clamp-1">{item.description}</p>
                            )}
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="ml-3 shrink-0 p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Body / Preview */}
                <div className="overflow-auto flex-1 p-5">
                    {item.type === 'youtube' && item.youtube_embed_url && (
                        <div className="aspect-video rounded-xl overflow-hidden bg-gray-900">
                            <iframe
                                src={item.youtube_embed_url}
                                className="w-full h-full"
                                allowFullScreen
                                title={item.title}
                            />
                        </div>
                    )}

                    {item.type === 'image' && item.file_url && (
                        <img
                            src={item.file_url}
                            alt={item.title}
                            className="max-h-[60vh] w-full object-contain rounded-xl bg-gray-50"
                        />
                    )}

                    {item.type === 'pdf' && item.file_url && (
                        <iframe
                            src={item.file_url}
                            className="w-full rounded-xl border border-gray-200"
                            style={{ height: '60vh' }}
                            title={item.title}
                        />
                    )}

                    {/* Fallback jika tidak ada file */}
                    {((item.type !== 'youtube' && !item.file_url) ||
                      (item.type === 'youtube' && !item.youtube_embed_url)) && (
                        <div className="flex flex-col items-center justify-center py-16 text-gray-400">
                            <svg className="w-12 h-12 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <p className="text-sm font-medium">File tidak tersedia</p>
                        </div>
                    )}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between px-5 py-3 border-t border-gray-100 bg-gray-50 shrink-0">
                    <p className="text-xs text-gray-400">
                        Diupload {item.created_at}
                        {item.created_by?.name && ` · ${item.created_by.name}`}
                    </p>
                    <div className="flex gap-2">
                        {item.type === 'youtube' && item.youtube_url && (
                            <a
                                href={item.youtube_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-green-700 bg-green-50 hover:bg-green-100 rounded-lg transition"
                            >
                                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M23 7s-.3-2-1.2-2.8c-1.1-1.2-2.4-1.2-3-1.3C16.6 2.8 12 2.8 12 2.8s-4.6 0-6.8.1c-.6.1-1.9.1-3 1.3C1.3 5 1 7 1 7S.7 9.1.7 11.3v2c0 2.1.3 4.3.3 4.3s.3 2 1.2 2.8c1.1 1.2 2.6 1.1 3.3 1.2C7.3 21.8 12 21.8 12 21.8s4.6 0 6.8-.2c.6-.1 1.9-.1 3-1.3.9-.8 1.2-2.8 1.2-2.8s.3-2.1.3-4.3v-2C23.3 9.1 23 7 23 7zM9.7 15.5V8.4l8.1 3.6-8.1 3.5z"/>
                                </svg>
                                Buka di YouTube
                            </a>
                        )}
                        {(item.type === 'pdf' || item.type === 'image') && item.file_url && (
                            <a
                                href={route('admin.materi.download', item.id)}
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-indigo-700 bg-indigo-50 hover:bg-indigo-100 rounded-lg transition"
                            >
                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                </svg>
                                Download
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

// ── Delete Modal ──────────────────────────────────────────────────────────────
function DeleteModal({ materi, onConfirm, onCancel }) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onCancel} />
            <div className="relative bg-white rounded-2xl shadow-2xl p-6 w-full max-w-sm mx-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-100 mx-auto mb-4">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 text-center mb-1">Hapus Materi</h3>
                <p className="text-sm text-gray-500 text-center mb-6">
                    Yakin ingin menghapus <span className="font-medium text-gray-700">"{materi.title}"</span>? Tindakan ini tidak dapat dibatalkan.
                </p>
                <div className="flex gap-3">
                    <button onClick={onCancel} className="flex-1 px-4 py-2 rounded-xl border border-gray-200 text-gray-700 text-sm font-medium hover:bg-gray-50 transition">
                        Batal
                    </button>
                    <button onClick={onConfirm} className="flex-1 px-4 py-2 rounded-xl bg-red-600 text-white text-sm font-medium hover:bg-red-700 transition">
                        Hapus
                    </button>
                </div>
            </div>
        </div>
    );
}

function FlashMessage({ flash }) {
    if (!flash?.success && !flash?.error) return null;
    const isSuccess = !!flash.success;
    return (
        <div className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium mb-6 ${isSuccess ? 'bg-green-50 text-green-700 ring-1 ring-green-200' : 'bg-red-50 text-red-700 ring-1 ring-red-200'}`}>
            {isSuccess
                ? <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                : <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"/></svg>
            }
            {flash.success || flash.error}
        </div>
    );
}

export default function Index({ materi, filters }) {
    const { flash } = usePage().props;
    const [search, setSearch]             = useState(filters?.search ?? '');
    const [type, setType]                 = useState(filters?.type ?? '');
    const [deleteTarget, setDeleteTarget] = useState(null);
    const [previewItem, setPreviewItem]   = useState(null);

    // ✅ MateriResource membungkus data dalam { data: [...], meta: {...}, links: {...} }
    // Inertia menerima ini sebagai-is, jadi struktur di frontend ikut berubah.
    const items      = materi?.data ?? [];
    const pagination = materi?.meta ?? {};
    const links      = materi?.meta?.links ?? [];

    const handleSearch = (e) => {
        e.preventDefault();
        router.get(route('admin.materi.index'), { search, type }, { preserveState: true, replace: true });
    };

    const handleFilter = (val) => {
        setType(val);
        router.get(route('admin.materi.index'), { search, type: val }, { preserveState: true, replace: true });
    };

    const handleDelete = () => {
        if (!deleteTarget) return;
        router.delete(route('admin.materi.destroy', deleteTarget.id), {
            onFinish: () => setDeleteTarget(null),
        });
    };

    const handleCopyLink = (url) => {
        navigator.clipboard.writeText(url);
    };

    return (
        <AuthenticatedLayout
            header={
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold text-gray-800">Manajemen Soal</h2>
                    <Link
                        href={route('admin.materi.create')}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-xl hover:bg-indigo-700 transition shadow-sm"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                        Upload Soal
                    </Link>
                </div>
            }
        >
            <Head title="Manajemen Soal" />

            {/* Preview Modal */}
            {previewItem && (
                <PreviewModal item={previewItem} onClose={() => setPreviewItem(null)} />
            )}

            {/* Delete Modal */}
            {deleteTarget && (
                <DeleteModal
                    materi={deleteTarget}
                    onConfirm={handleDelete}
                    onCancel={() => setDeleteTarget(null)}
                />
            )}

            <div className="py-8">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <FlashMessage flash={flash} />

                    {/* Search & Filter */}
                    <div className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-100 p-4 mb-6">
                        <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3">
                            <div className="relative flex-1">
                                <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                                <input
                                    type="text"
                                    placeholder="Cari judul atau deskripsi..."
                                    value={search}
                                    onChange={e => setSearch(e.target.value)}
                                    className="w-full pl-10 pr-4 py-2 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                />
                            </div>
                            <div className="flex gap-2">
                                {['', 'pdf', 'image', 'youtube'].map(t => (
                                    <button
                                        key={t}
                                        type="button"
                                        onClick={() => handleFilter(t)}
                                        className={`px-3 py-2 text-sm rounded-xl font-medium transition ${
                                            type === t
                                                ? 'bg-indigo-600 text-white'
                                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                        }`}
                                    >
                                        {t === '' ? 'Semua' : t.toUpperCase()}
                                    </button>
                                ))}
                            </div>
                            <button type="submit" className="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-xl hover:bg-indigo-700 transition">
                                Cari
                            </button>
                        </form>
                    </div>

                    {/* Table */}
                    <div className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-100 overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="border-b border-gray-100 bg-gray-50">
                                        <th className="text-left px-6 py-4 font-semibold text-gray-600">#</th>
                                        <th className="text-left px-6 py-4 font-semibold text-gray-600">Judul</th>
                                        <th className="text-left px-6 py-4 font-semibold text-gray-600">Tipe</th>
                                        <th className="text-left px-6 py-4 font-semibold text-gray-600">Tanggal Upload</th>
                                        <th className="text-left px-6 py-4 font-semibold text-gray-600">Diupload Oleh</th>
                                        <th className="text-right px-6 py-4 font-semibold text-gray-600">Aksi</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-50">
                                    {items.length === 0 ? (
                                        <tr>
                                            <td colSpan={6} className="px-6 py-16 text-center text-gray-400">
                                                <svg className="w-10 h-10 mx-auto mb-3 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                </svg>
                                                <p className="font-medium">Belum ada materi</p>
                                                <p className="text-xs mt-1">Upload soal pertama Anda</p>
                                            </td>
                                        </tr>
                                    ) : items.map((item, i) => {
                                        const badge = TYPE_BADGE[item.type];
                                        const num   = (pagination.current_page - 1) * pagination.per_page + i + 1;
                                        return (
                                            <tr key={item.id} className="hover:bg-gray-50 transition">
                                                <td className="px-6 py-4 text-gray-400 font-mono text-xs">{num}</td>
                                                <td className="px-6 py-4">
                                                    <p className="font-medium text-gray-900 line-clamp-1">{item.title}</p>
                                                    {item.description && (
                                                        <p className="text-xs text-gray-400 mt-0.5 line-clamp-1">{item.description}</p>
                                                    )}
                                                </td>
                                                <td className="px-6 py-4">
                                                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium ring-1 ${badge.bg}`}>
                                                        {TYPE_ICON[item.type]}
                                                        {badge.label}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 text-gray-500">{item.created_at}</td>
                                                <td className="px-6 py-4 text-gray-500">{item.created_by?.name ?? '-'}</td>
                                                <td className="px-6 py-4">
                                                    <div className="flex items-center justify-end gap-1">
                                                        {/* ✅ Preview button → buka modal */}
                                                        <button
                                                            onClick={() => setPreviewItem(item)}
                                                            title="Preview"
                                                            className="p-2 text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition"
                                                        >
                                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                            </svg>
                                                        </button>

                                                        {/* Download / Copy Link */}
                                                        {item.type === 'youtube' ? (
                                                            <button
                                                                onClick={() => handleCopyLink(item.youtube_url)}
                                                                title="Salin Link"
                                                                className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition"
                                                            >
                                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                                                </svg>
                                                            </button>
                                                        ) : (
                                                            <a
                                                                href={route('admin.materi.download', item.id)}
                                                                title="Download"
                                                                className="p-2 text-indigo-600 hover:bg-indigo-50 rounded-lg transition"
                                                            >
                                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                                                </svg>
                                                            </a>
                                                        )}

                                                        {/* Edit */}
                                                        <Link
                                                            href={route('admin.materi.edit', item.id)}
                                                            title="Edit"
                                                            className="p-2 text-amber-600 hover:bg-amber-50 rounded-lg transition"
                                                        >
                                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                            </svg>
                                                        </Link>

                                                        {/* Delete */}
                                                        <button
                                                            onClick={() => setDeleteTarget(item)}
                                                            title="Hapus"
                                                            className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition"
                                                        >
                                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>

                        {/* Pagination */}
                        {pagination.last_page > 1 && (
                            <div className="flex items-center justify-between px-6 py-4 border-t border-gray-100">
                                <p className="text-sm text-gray-500">
                                    Menampilkan {pagination.from}–{pagination.to} dari {pagination.total} materi
                                </p>
                                <div className="flex gap-1">
                                    {links.map((link, i) => (
                                        <button
                                            key={i}
                                            disabled={!link.url}
                                            onClick={() => link.url && router.get(link.url, {}, { preserveState: true })}
                                            dangerouslySetInnerHTML={{ __html: link.label }}
                                            className={`px-3 py-1.5 text-sm rounded-lg transition ${
                                                link.active
                                                    ? 'bg-indigo-600 text-white font-medium'
                                                    : link.url
                                                    ? 'text-gray-600 hover:bg-gray-100'
                                                    : 'text-gray-300 cursor-not-allowed'
                                            }`}
                                        />
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
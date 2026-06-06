import { useState } from 'react';
import { Head, Link, router } from '@inertiajs/react';
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

const TYPE_COLOR = {
    pdf:     'text-red-500 bg-red-50',
    image:   'text-blue-500 bg-blue-50',
    youtube: 'text-green-500 bg-green-50',
};

export default function Index({ materi, filters }) {
    console.log('materi:', materi);        // ← tambah di sini
    console.log('first item:', materi?.data?.[0]); // ← tambah di sini
    const [search, setSearch] = useState(filters?.search ?? '');
    const [type, setType]     = useState(filters?.type ?? '');

    const handleSearch = (e) => {
        e.preventDefault();
        router.get(route('siswa.materi.index'), { search, type }, { preserveState: true, replace: true });
    };

    const handleFilter = (val) => {
        setType(val);
        router.get(route('siswa.materi.index'), { search, type: val }, { preserveState: true, replace: true });
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold text-gray-800">Daftar Soal</h2>
            }
        >
            <Head title="Daftar Soal" />

            <div className="py-8">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

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

                    {/* Empty state */}
                    {materi.data.length === 0 ? (
                        <div className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-100 py-20 text-center">
                            <svg className="w-12 h-12 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <p className="font-medium text-gray-500">Belum ada soal tersedia</p>
                            <p className="text-sm text-gray-400 mt-1">Coba ubah filter pencarian</p>
                        </div>
                    ) : (
                        <>
                            {/* Card Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                                {materi.data.map(item => (
                                    <a
                                        key={item.id}
                                        href={route('siswa.materi.show', item.id)}
                                        className="group bg-white rounded-2xl shadow-sm ring-1 ring-gray-100 p-5 hover:shadow-md hover:ring-indigo-100 transition-all duration-200"
                                    >
                                        {/* Type Icon */}
                                        <div className="flex items-start justify-between mb-4">
                                            <div className={`p-2.5 rounded-xl ${TYPE_COLOR[item.type]}`}>
                                                {TYPE_ICON[item.type]}
                                            </div>
                                            <span className={`inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-medium ring-1 ${TYPE_BADGE[item.type].bg}`}>
                                                {TYPE_BADGE[item.type].label}
                                            </span>
                                        </div>

                                        {/* Title & Desc */}
                                        <h3 className="font-semibold text-gray-900 line-clamp-2 group-hover:text-indigo-600 transition-colors mb-1">
                                            {item.title}
                                        </h3>
                                        {item.description && (
                                            <p className="text-sm text-gray-400 line-clamp-2 mb-4">
                                                {item.description}
                                            </p>
                                        )}

                                        {/* Footer */}
                                        <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-50">
                                            <div className="flex items-center gap-1.5 text-xs text-gray-400">
                                                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                </svg>
                                                {item.created_at}
                                            </div>
                                            <span className="text-xs text-indigo-500 font-medium group-hover:underline">
                                                Lihat Detail →
                                            </span>
                                        </div>
                                    </a>
                                ))}
                            </div>

                            {/* Pagination */}
                            {materi.last_page > 1 && (
                                <div className="flex items-center justify-between bg-white rounded-2xl shadow-sm ring-1 ring-gray-100 px-6 py-4">
                                    <p className="text-sm text-gray-500">
                                        Menampilkan {materi.from}–{materi.to} dari {materi.total} soal
                                    </p>
                                    <div className="flex gap-1">
                                        {materi.links.map((link, i) => (
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
                        </>
                    )}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
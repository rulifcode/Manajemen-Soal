import { useState, useRef, useEffect } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

const TYPE_OPTIONS = [
    {
        value: 'pdf',
        label: 'PDF',
        desc: 'Upload file PDF',
        icon: (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm-1 1.5L18.5 9H13V3.5zM8 17h8v1H8v-1zm0-3h8v1H8v-1zm0-3h5v1H8v-1z"/>
            </svg>
        ),
        color: 'text-red-600 bg-red-50 ring-red-200',
        activeColor: 'ring-2 ring-red-500 bg-red-50',
    },
    {
        value: 'image',
        label: 'Image',
        desc: 'Upload JPG / PNG',
        icon: (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21 19V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2zM8.5 13.5l2.5 3 3.5-4.5 4.5 6H5l3.5-4.5z"/>
            </svg>
        ),
        color: 'text-blue-600 bg-blue-50 ring-blue-200',
        activeColor: 'ring-2 ring-blue-500 bg-blue-50',
    },
    {
        value: 'youtube',
        label: 'YouTube',
        desc: 'Tempel link video',
        icon: (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 7s-.3-2-1.2-2.8c-1.1-1.2-2.4-1.2-3-1.3C16.6 2.8 12 2.8 12 2.8s-4.6 0-6.8.1c-.6.1-1.9.1-3 1.3C1.3 5 1 7 1 7S.7 9.1.7 11.3v2c0 2.1.3 4.3.3 4.3s.3 2 1.2 2.8c1.1 1.2 2.6 1.1 3.3 1.2C7.3 21.8 12 21.8 12 21.8s4.6 0 6.8-.2c.6-.1 1.9-.1 3-1.3.9-.8 1.2-2.8 1.2-2.8s.3-2.1.3-4.3v-2C23.3 9.1 23 7 23 7zM9.7 15.5V8.4l8.1 3.6-8.1 3.5z"/>
            </svg>
        ),
        color: 'text-green-600 bg-green-50 ring-green-200',
        activeColor: 'ring-2 ring-green-500 bg-green-50',
    },
];

function InputLabel({ children, required }) {
    return (
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
            {children}
            {required && <span className="text-red-500 ml-1">*</span>}
        </label>
    );
}

function InputError({ message }) {
    if (!message) return null;
    return (
        <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
            <svg className="w-3 h-3 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
            </svg>
            {message}
        </p>
    );
}

function FileDropzone({ onChange, accept, preview, error }) {
    const inputRef = useRef();
    const [dragging, setDragging] = useState(false);

    const handleDrop = (e) => {
        e.preventDefault();
        setDragging(false);
        const file = e.dataTransfer.files[0];
        if (file) onChange(file);
    };

    return (
        <div
            onDragOver={e => { e.preventDefault(); setDragging(true); }}
            onDragLeave={() => setDragging(false)}
            onDrop={handleDrop}
            onClick={() => inputRef.current.click()}
            className={`relative cursor-pointer border-2 border-dashed rounded-xl p-8 text-center transition ${
                dragging
                    ? 'border-indigo-400 bg-indigo-50'
                    : error
                    ? 'border-red-300 bg-red-50'
                    : 'border-gray-200 hover:border-indigo-300 hover:bg-gray-50'
            }`}
        >
            <input
                ref={inputRef}
                type="file"
                accept={accept}
                className="hidden"
                onChange={e => onChange(e.target.files[0])}
            />
            {preview ? (
                <div className="flex flex-col items-center gap-2">
                    {preview.type === 'image' ? (
                        <img src={preview.url} alt="preview" className="max-h-40 rounded-lg object-contain" />
                    ) : (
                        <div className="flex items-center gap-3 p-3 bg-white rounded-lg ring-1 ring-gray-200 w-full max-w-xs mx-auto">
                            <svg className="w-8 h-8 text-red-500 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm-1 1.5L18.5 9H13V3.5z"/>
                            </svg>
                            <div className="text-left min-w-0">
                                <p className="text-sm font-medium text-gray-900 truncate">{preview.name}</p>
                                <p className="text-xs text-gray-400">{preview.size}</p>
                            </div>
                        </div>
                    )}
                    <p className="text-xs text-gray-400">Klik untuk ganti file</p>
                </div>
            ) : (
                <>
                    <svg className="w-10 h-10 text-gray-300 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    <p className="text-sm font-medium text-gray-600">Drag & drop atau klik untuk ganti file</p>
                    <p className="text-xs text-gray-400 mt-1">{accept}</p>
                </>
            )}
        </div>
    );
}

function extractYoutubeId(url) {
    if (!url) return '';
    const match = url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
    return match?.[1] ?? '';
}

function Toast({ message, type = 'success', onClose }) {
    useEffect(() => {
        const timer = setTimeout(onClose, 3000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`fixed top-5 right-5 z-50 flex items-center gap-3 px-4 py-3 rounded-xl shadow-lg text-white text-sm font-medium transition-all ${
            type === 'success' ? 'bg-green-500' : 'bg-red-500'
        }`}>
            {type === 'success' ? (
                <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
            ) : (
                <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
                </svg>
            )}
            {message}
            <button onClick={onClose} className="ml-2 opacity-70 hover:opacity-100">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
    );
}

export default function Edit({ materi }) {
    const materiData = materi.data; // <- ambil data
    const [toast, setToast] = useState(null); //bagian toast

    const { data, setData, post, processing, errors, transform } = useForm({
        title:       materiData.title ?? '',
        description: materiData.description ?? '',
        type:        materiData.type ?? 'pdf',
        file:        null,
        youtube_url: materiData.youtube_url ?? '',
    });

    const [filePreview, setFilePreview] = useState(null);

    // ✅ FIX: Buang field yang tidak relevan sebelum submit
    transform((formData) => {
        if (formData.type === 'youtube') {
            const { file, ...rest } = formData;
            return rest;
        }
        const { youtube_url, ...rest } = formData;
        return rest;
    });

    const handleTypeChange = (val) => {
        setData(prev => ({ ...prev, type: val, file: null, youtube_url: '' }));
        setFilePreview(null);
    };

    const handleFileChange = (file) => {
        if (!file) return;
        setData('file', file);
        const isImage = file.type.startsWith('image/');
        setFilePreview({
            type: isImage ? 'image' : 'pdf',
            url:  isImage ? URL.createObjectURL(file) : null,
            name: file.name,
            size: (file.size / 1024 / 1024).toFixed(2) + ' MB',
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('admin.materi.update', materiData.id), {
            forceFormData: true,
            onSuccess: () => {
                setToast({ message: 'Soal berhasil diperbarui!', type: 'success' });
            },
            onError: () => {
                setToast({ message: 'Gagal menyimpan. Periksa kembali form.', type: 'error' });
            },
        });
    }
   
    const youtubeId = extractYoutubeId(data.youtube_url);

    // FIX: file_url sekarang tersedia karena controller pakai MateriResource
    const existingFileUrl = materiData.file_url ?? null;

    return (
        <>
        {toast && (
            <Toast
                message={toast.message}
                type={toast.type}
                onClose={() => setToast(null)}
            />
        )}
        <AuthenticatedLayout
            header={
                <div className="flex items-center gap-3">
                    <Link
                        href={route('admin.materi.index')}
                        className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </Link>
                    <div>
                        <h2 className="text-xl font-semibold text-gray-800">Edit Soal</h2>
                        <p className="text-xs text-gray-400 mt-0.5 line-clamp-1">{materiData.title}</p>
                    </div>
                </div>
            }
        >
            <Head title="Edit Soal" />

            <div className="py-8">
                <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
                    <form onSubmit={handleSubmit} className="space-y-6">

                        {/* Informasi Soal */}
                        <div className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-100 p-6">
                            <h3 className="text-sm font-semibold text-gray-900 mb-4">Informasi Soal</h3>
                            <div className="space-y-4">
                                <div>
                                    <InputLabel required>Judul Soal</InputLabel>
                                    <input
                                        type="text"
                                        value={data.title}
                                        onChange={e => setData('title', e.target.value)}
                                        placeholder="Judul soal"
                                        className={`w-full px-4 py-2.5 text-sm border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition ${errors.title ? 'border-red-300' : 'border-gray-200'}`}
                                    />
                                    <InputError message={errors.title} />
                                </div>
                                <div>
                                    <InputLabel>Deskripsi</InputLabel>
                                    <textarea
                                        value={data.description}
                                        onChange={e => setData('description', e.target.value)}
                                        placeholder="Deskripsi singkat (opsional)"
                                        rows={3}
                                        className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition resize-none"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Tipe & File */}
                        <div className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-100 p-6">
                            <h3 className="text-sm font-semibold text-gray-900 mb-4">Tipe Soal <span className="text-red-500">*</span></h3>
                            <div className="grid grid-cols-3 gap-3 mb-6">
                                {TYPE_OPTIONS.map(opt => (
                                    <button
                                        key={opt.value}
                                        type="button"
                                        onClick={() => handleTypeChange(opt.value)}
                                        className={`flex flex-col items-center gap-2 p-4 rounded-xl border transition ${
                                            data.type === opt.value
                                                ? `${opt.activeColor} border-transparent`
                                                : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                                        }`}
                                    >
                                        <span className={`p-2 rounded-lg ring-1 ${opt.color}`}>
                                            {opt.icon}
                                        </span>
                                        <span className="text-sm font-medium text-gray-800">{opt.label}</span>
                                        <span className="text-xs text-gray-400">{opt.desc}</span>
                                    </button>
                                ))}
                            </div>

                            {/* ✅ FIX: Preview file saat ini — tampil selama belum ganti file baru */}
                            {(data.type === 'pdf' || data.type === 'image') && existingFileUrl && !filePreview && (
                                <div className="mb-4 p-4 bg-gray-50 rounded-xl ring-1 ring-gray-200">
                                    <p className="text-xs text-gray-500 mb-2 font-medium uppercase tracking-wide">File saat ini</p>
                                    {data.type === 'image' ? (
                                        <img
                                            src={existingFileUrl}
                                            alt={materiData.title}
                                            className="max-h-48 rounded-lg object-contain mx-auto block"
                                            onError={(e) => { e.target.style.display = 'none'; }}
                                        />
                                    ) : (
                                        <a
                                            href={existingFileUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-sm text-indigo-600 hover:underline"
                                        >
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm-1 1.5L18.5 9H13V3.5z"/>
                                            </svg>
                                            Lihat file PDF saat ini
                                        </a>
                                    )}
                                </div>
                            )}

                            {/* File Upload */}
                            {(data.type === 'pdf' || data.type === 'image') && (
                                <div>
                                    <InputLabel>
                                        {data.type === 'pdf' ? 'Ganti File PDF' : 'Ganti File Gambar'}
                                        <span className="text-gray-400 font-normal ml-1">(opsional)</span>
                                    </InputLabel>
                                    <FileDropzone
                                        accept={data.type === 'pdf' ? '.pdf' : '.jpg,.jpeg,.png'}
                                        onChange={handleFileChange}
                                        preview={filePreview}
                                        error={errors.file}
                                    />
                                    <InputError message={errors.file} />
                                    <p className="text-xs text-gray-400 mt-2">
                                        Kosongkan jika tidak ingin mengganti file.
                                    </p>
                                </div>
                            )}

                            {/* YouTube URL */}
                            {data.type === 'youtube' && (
                                <div>
                                    <InputLabel required>Link YouTube</InputLabel>
                                    <div className="relative">
                                        <div className="absolute left-3 top-1/2 -translate-y-1/2">
                                            <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M23 7s-.3-2-1.2-2.8c-1.1-1.2-2.4-1.2-3-1.3C16.6 2.8 12 2.8 12 2.8s-4.6 0-6.8.1c-.6.1-1.9.1-3 1.3C1.3 5 1 7 1 7S.7 9.1.7 11.3v2c0 2.1.3 4.3.3 4.3s.3 2 1.2 2.8c1.1 1.2 2.6 1.1 3.3 1.2C7.3 21.8 12 21.8 12 21.8s4.6 0 6.8-.2c.6-.1 1.9-.1 3-1.3.9-.8 1.2-2.8 1.2-2.8s.3-2.1.3-4.3v-2C23.3 9.1 23 7 23 7zM9.7 15.5V8.4l8.1 3.6-8.1 3.5z"/>
                                            </svg>
                                        </div>
                                        <input
                                            type="text"
                                            value={data.youtube_url}
                                            onChange={e => setData('youtube_url', e.target.value)}
                                            placeholder="https://www.youtube.com/watch?v=... atau https://youtu.be/..."
                                            className={`w-full pl-10 pr-4 py-2.5 text-sm border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition ${errors.youtube_url ? 'border-red-300' : 'border-gray-200'}`}
                                        />
                                    </div>
                                    <InputError message={errors.youtube_url} />
                                    <p className="text-xs text-gray-400 mt-1.5">
                                        Mendukung: youtube.com/watch?v=, youtu.be/, youtube.com/shorts/
                                    </p>

                                    {youtubeId && (
                                        <div className="mt-3 aspect-video rounded-xl overflow-hidden bg-gray-100">
                                            <iframe
                                                src={`https://www.youtube.com/embed/${youtubeId}`}
                                                className="w-full h-full"
                                                allowFullScreen
                                                title="YouTube Preview"
                                            />
                                        </div>
                                    )}

                                    {data.youtube_url && !youtubeId && (
                                        <p className="mt-2 text-xs text-amber-600 flex items-center gap-1">
                                            <svg className="w-3 h-3 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
                                            </svg>
                                            Format URL tidak dikenali, preview tidak tersedia
                                        </p>
                                    )}
                                </div>
                            )}
                        </div>

                        {/* Actions */}
                        <div className="flex items-center justify-end gap-3">
                            <Link
                                href={route('admin.materi.index')}
                                className="px-5 py-2.5 text-sm font-medium text-gray-700 border border-gray-200 rounded-xl hover:bg-gray-50 transition"
                            >
                                Batal
                            </Link>
                            <button
                                type="submit"
                                disabled={processing}
                                className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-600 text-white text-sm font-medium rounded-xl hover:bg-indigo-700 disabled:opacity-60 disabled:cursor-not-allowed transition shadow-sm"
                            >
                                {processing ? (
                                    <>
                                        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                                        </svg>
                                        Menyimpan...
                                    </>
                                ) : (
                                    <>
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        Simpan Perubahan
                                    </>
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
        </>
    );
}
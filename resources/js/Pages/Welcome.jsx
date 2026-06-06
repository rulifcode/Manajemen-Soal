import { useState, useEffect } from 'react';
import { Head, Link } from '@inertiajs/react';

const IconArrowRight = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
);

const IconCheck = ({ className = "w-3 h-3" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
    </svg>
);

const IconLogin = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
    </svg>
);

const IconUpload = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
    </svg>
);

const IconEye = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
);

const IconShield = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
);

const IconSearch = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
);

const IconBolt = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
);

const IconDownload = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
);

const IconFilePdf = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 13h6M9 17h3" />
    </svg>
);

const IconPhoto = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
);

const IconPlay = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const IconTarget = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
);

const IconRocket = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
);

const IconLightbulb = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
);

const IconHandshake = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

const IconAdmin = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
);

const IconStudent = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
    </svg>
);

const IconStar = () => (
    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
);

const features = [
    { icon: <IconUpload />, bg: 'bg-blue-50', text: 'text-blue-600', title: 'Upload soal', desc: 'Unggah PDF, gambar, atau link YouTube dengan mudah dan cepat.' },
    { icon: <IconEye />, bg: 'bg-teal-50', text: 'text-teal-600', title: 'Preview langsung', desc: 'Siswa bisa lihat soal tanpa perlu mengunduh file terlebih dahulu.' },
    { icon: <IconShield />, bg: 'bg-purple-50', text: 'text-purple-600', title: 'Kontrol akses', desc: 'Admin dan siswa punya hak akses berbeda secara otomatis.' },
    { icon: <IconSearch />, bg: 'bg-amber-50', text: 'text-amber-600', title: 'Cari & filter', desc: 'Temukan soal berdasarkan judul atau format dengan cepat.' },
    { icon: <IconBolt />, bg: 'bg-orange-50', text: 'text-orange-500', title: 'Caching pintar', desc: 'Data dimuat cepat dengan sistem cache selektif yang efisien.' },
    { icon: <IconDownload />, bg: 'bg-green-50', text: 'text-green-600', title: 'Download & salin', desc: 'Unduh soal PDF/gambar atau salin link YouTube dalam satu klik.' },
];

const aboutCards = [
    { icon: <IconTarget />, color: 'text-blue-600', bg: 'bg-blue-50', title: 'Visi', desc: 'Menjadi platform bimbingan belajar digital terpercaya di Indonesia.' },
    { icon: <IconRocket />, color: 'text-orange-500', bg: 'bg-orange-50', title: 'Misi', desc: 'Menyediakan akses soal latihan berkualitas untuk setiap siswa.' },
    { icon: <IconLightbulb />, color: 'text-amber-500', bg: 'bg-amber-50', title: 'Inovasi', desc: 'Terus berinovasi dalam menyajikan konten belajar yang menarik.' },
    { icon: <IconHandshake />, color: 'text-teal-600', bg: 'bg-teal-50', title: 'Komitmen', desc: 'Berkomitmen menjadi sahabat terbaik dalam perjalanan belajar siswa.' },
];

const formats = [
    { icon: <IconFilePdf />, bg: 'bg-blue-50', text: 'text-blue-600', name: 'PDF', desc: 'Dokumen soal dengan embedded viewer langsung di halaman' },
    { icon: <IconPhoto />, bg: 'bg-teal-50', text: 'text-teal-600', name: 'Gambar', desc: 'JPG, JPEG, PNG tampil langsung tanpa perlu diunduh' },
    { icon: <IconPlay />, bg: 'bg-red-50', text: 'text-red-500', name: 'YouTube', desc: 'Video embedded langsung dari link YouTube' },
];

export default function Welcome({ canLogin, canRegister }) {
    const [splash, setSplash] = useState('visible'); // 'visible' | 'fading' | 'gone'

    useEffect(() => {
        const t1 = setTimeout(() => setSplash('fading'), 1500);
        const t2 = setTimeout(() => setSplash('gone'), 2200);
        return () => { clearTimeout(t1); clearTimeout(t2); };
    }, []);

    return (
        <>
            <Head title="Kreasi Bintang Edukasi — Sahabat Berjuang" />

            {/* Splash Screen */}
            {splash !== 'gone' && (
                <div
                    className="fixed inset-0 z-[9999] bg-white flex items-center justify-center"
                    style={{
                        transition: 'opacity 0.7s ease',
                        opacity: splash === 'fading' ? 0 : 1,
                        pointerEvents: splash === 'fading' ? 'none' : 'auto',
                    }}
                >
                    <img
                        src="/images/kreasiedukasi.webp"
                        alt="Kreasi Bintang Edukasi"
                        className="w-48 h-auto"
                        style={{
                            transition: 'transform 0.7s ease, opacity 0.7s ease',
                            transform: splash === 'fading' ? 'scale(1.1)' : 'scale(1)',
                            opacity: splash === 'fading' ? 0 : 1,
                        }}
                    />
                </div>
            )}

            <div className="min-h-screen bg-white font-sans">

                {/* Navbar */}
                <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100">
                    <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
                        <img src="/images/kreasiedukasi.webp" alt="Kreasi Bintang Edukasi" className="h-10 w-auto" />
                        <div className="flex items-center gap-2">
                            {canLogin && (
                                <Link href={route('login')} className="text-sm text-gray-600 hover:text-gray-900 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                                    Masuk
                                </Link>
                            )}
                            {canRegister && (
                                <Link href={route('register')} className="text-sm text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors font-medium shadow-sm">
                                    Daftar Sekarang
                                </Link>
                            )}
                        </div>
                    </div>
                </nav>

                {/* Hero */}
                <section className="relative pt-20 pb-20 px-6 overflow-hidden">
                    <div className="absolute inset-0 pointer-events-none overflow-hidden">
                        <div className="absolute -top-20 -right-20 w-96 h-96 bg-orange-50 rounded-full opacity-60" />
                        <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-blue-50 rounded-full opacity-60" />
                    </div>
                    <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="inline-flex items-center gap-1.5 bg-orange-50 text-orange-600 text-xs font-semibold px-4 py-1.5 rounded-full border border-orange-100 mb-6">
                                <IconStar /> Sahabat Berjuang
                            </span>
                            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-5">
                                Platform Soal<br />
                                <span className="text-blue-600">Kreasi Bintang</span><br />
                                <span className="text-orange-500">Edukasi</span>
                            </h1>
                            <p className="text-gray-500 text-base leading-relaxed mb-8 max-w-md">
                                Satu platform digital untuk admin mengelola soal latihan dan siswa mengaksesnya kapan saja — PDF, gambar, hingga video YouTube.
                            </p>
                            <div className="flex items-center gap-3 flex-wrap">
                                {canLogin && (
                                    <Link href={route('login')} className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-6 py-3 rounded-xl transition-colors shadow-sm shadow-blue-200">
                                        Masuk ke Platform <IconArrowRight />
                                    </Link>
                                )}
                                <a href="#fitur" className="inline-flex items-center gap-2 text-gray-600 text-sm font-medium px-6 py-3 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors">
                                    Lihat Fitur
                                </a>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <img src="/images/image1.webp" alt="Kreasi Bintang Edukasi" className="w-96 h-auto drop-shadow-xl" />
                        </div>
                    </div>
                </section>

                {/* Stats bar */}
                <div className="bg-gray-50 border-y border-gray-100">
                    <div className="max-w-6xl mx-auto px-6 py-6 grid grid-cols-3 divide-x divide-gray-200">
                        {[
                            { num: '3', label: 'Format Soal Didukung', sub: 'PDF · Gambar · YouTube' },
                            { num: '2', label: 'Role Pengguna', sub: 'Admin & Siswa' },
                            { num: '∞', label: 'Soal Tersimpan', sub: 'Tanpa batas' },
                        ].map((s, i) => (
                            <div key={i} className="text-center px-4">
                                <p className="text-3xl font-bold text-gray-900">{s.num}</p>
                                <p className="text-xs font-semibold text-gray-700 mt-1">{s.label}</p>
                                <p className="text-xs text-gray-400">{s.sub}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Tentang */}
                <section className="py-16 px-6">
                    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <p className="text-xs font-semibold text-orange-500 uppercase tracking-widest mb-2">Tentang Kami</p>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">PT Kreasi Bintang Edukasi</h2>
                            <p className="text-gray-500 text-sm leading-relaxed mb-4">
                                Kreasi Bintang Edukasi adalah platform bimbingan belajar digital yang hadir sebagai <strong className="text-gray-700">Sahabat Berjuang</strong> bagi setiap siswa Indonesia dalam menghadapi ujian dan meraih prestasi terbaik.
                            </p>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                Kami menyediakan akses soal latihan berkualitas dalam berbagai format — PDF, gambar, dan video — yang bisa diakses kapan saja dan di mana saja secara online.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            {aboutCards.map((v, i) => (
                                <div key={i} className="bg-white border border-gray-100 rounded-2xl p-4 hover:shadow-sm transition-shadow">
                                    <div className={`w-10 h-10 ${v.bg} ${v.color} rounded-xl flex items-center justify-center mb-3`}>{v.icon}</div>
                                    <p className="font-semibold text-gray-900 text-sm mb-1">{v.title}</p>
                                    <p className="text-xs text-gray-400 leading-relaxed">{v.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <div className="max-w-6xl mx-auto px-6"><div className="border-t border-gray-100" /></div>

                {/* Fitur */}
                <section id="fitur" className="py-16 px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-10">
                            <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-2">Fitur Unggulan</p>
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">Semua yang kamu butuhkan</h2>
                            <p className="text-gray-500 text-sm max-w-md mx-auto">Dirancang untuk kemudahan admin dalam mengelola dan siswa dalam belajar.</p>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                            {features.map((f, i) => (
                                <div key={i} className="bg-white border border-gray-100 rounded-2xl p-5 hover:border-gray-200 hover:shadow-sm transition-all">
                                    <div className={`w-10 h-10 ${f.bg} ${f.text} rounded-xl flex items-center justify-center mb-4`}>{f.icon}</div>
                                    <p className={`text-sm font-semibold ${f.text} mb-1`}>{f.title}</p>
                                    <p className="text-xs text-gray-400 leading-relaxed">{f.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <div className="max-w-6xl mx-auto px-6"><div className="border-t border-gray-100" /></div>

                {/* Role */}
                <section className="py-16 px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-10">
                            <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-2">Role Pengguna</p>
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">Dua role, satu platform</h2>
                            <p className="text-gray-500 text-sm">Setiap pengguna mendapat tampilan dan akses sesuai perannya.</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            {[
                                {
                                    icon: <IconAdmin />, accent: 'bg-blue-600', iconBg: 'bg-blue-50', iconText: 'text-blue-600',
                                    name: 'Admin', sub: 'Pengelola konten soal',
                                    items: ['Upload soal baru (PDF/Gambar/YouTube)', 'Edit & hapus soal yang ada', 'Download file soal PDF & gambar', 'Salin link YouTube soal'],
                                },
                                {
                                    icon: <IconStudent />, accent: 'bg-orange-500', iconBg: 'bg-orange-50', iconText: 'text-orange-500',
                                    name: 'Siswa', sub: 'Pengguna belajar',
                                    items: ['Lihat daftar soal yang tersedia', 'Preview PDF & video YouTube langsung', 'Lihat gambar soal secara langsung', 'Cari & filter soal berdasarkan tipe'],
                                },
                            ].map((role, i) => (
                                <div key={i} className="border border-gray-100 rounded-2xl overflow-hidden hover:shadow-sm transition-shadow">
                                    <div className={`h-1 ${role.accent}`} />
                                    <div className="p-6">
                                        <div className="flex items-center gap-3 mb-5">
                                            <div className={`w-10 h-10 rounded-full ${role.iconBg} ${role.iconText} flex items-center justify-center`}>{role.icon}</div>
                                            <div>
                                                <p className="font-semibold text-gray-900 text-sm">{role.name}</p>
                                                <p className="text-xs text-gray-400">{role.sub}</p>
                                            </div>
                                        </div>
                                        <ul className="space-y-3">
                                            {role.items.map((item, j) => (
                                                <li key={j} className="flex items-center gap-3 text-sm text-gray-600 pb-3 border-b border-gray-50 last:border-0 last:pb-0">
                                                    <span className={`w-5 h-5 rounded-full ${role.accent} flex items-center justify-center flex-shrink-0`}>
                                                        <IconCheck className="w-3 h-3 text-white" />
                                                    </span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <div className="max-w-6xl mx-auto px-6"><div className="border-t border-gray-100" /></div>

                {/* Format soal */}
                <section className="py-16 px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-10">
                            <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-2">Format Soal</p>
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">3 format yang didukung</h2>
                            <p className="text-gray-500 text-sm">Fleksibel sesuai kebutuhan pengajar.</p>
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                            {formats.map((f, i) => (
                                <div key={i} className="bg-gray-50 border border-gray-100 rounded-2xl p-6 text-center hover:shadow-sm transition-shadow">
                                    <div className={`w-14 h-14 ${f.bg} ${f.text} rounded-2xl flex items-center justify-center mx-auto mb-4`}>{f.icon}</div>
                                    <p className={`font-semibold text-sm ${f.text} mb-1`}>{f.name}</p>
                                    <p className="text-xs text-gray-400 leading-relaxed">{f.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="px-6 pb-16">
                    <div className="max-w-6xl mx-auto">
                        <div className="relative bg-blue-600 rounded-3xl p-10 text-center overflow-hidden">
                            <div className="absolute -top-10 -right-10 w-48 h-48 bg-blue-500 rounded-full opacity-40" />
                            <div className="absolute -bottom-10 -left-10 w-36 h-36 bg-orange-400 rounded-full opacity-20" />
                            <div className="relative">
                                <h2 className="text-2xl font-bold text-white mb-2">Siap mulai belajar bersama kami?</h2>
                                <p className="text-blue-200 text-sm mb-6">Bergabunglah dan akses semua soal latihan yang tersedia kapan saja.</p>
                                {canLogin && (
                                    <Link href={route('login')} className="inline-flex items-center gap-2 bg-white text-blue-600 font-semibold text-sm px-7 py-3 rounded-xl hover:bg-blue-50 transition-colors shadow-sm">
                                        <IconLogin /> Masuk ke Platform
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="border-t border-gray-100 px-6 py-8 bg-gray-50">
                    <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                            <img src="/images/kreasiedukasi.webp" alt="Kreasi Bintang Edukasi" className="h-8 w-auto" />
                            <div>
                                <p className="text-sm font-semibold text-gray-900">PT Kreasi Bintang Edukasi</p>
                                <p className="text-xs text-gray-400 italic">Sahabat Berjuang</p>
                            </div>
                        </div>
                        <p className="text-xs text-gray-400">© 2025 Kreasi Bintang Edukasi · All rights reserved</p>
                    </div>
                </footer>

            </div>
        </>
    );
}
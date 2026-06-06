import { Head, Link } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {
    BookOpen,
    FileText,
    Image,
    Video,
    ArrowRight,
} from 'lucide-react';

const TYPE_BADGE = {
    pdf:     { label: 'PDF',     className: 'bg-red-50 text-red-700 ring-red-200',      Icon: FileText },
    image:   { label: 'Image',   className: 'bg-blue-50 text-blue-700 ring-blue-200',   Icon: Image },
    youtube: { label: 'YouTube', className: 'bg-green-50 text-green-700 ring-green-200', Icon: Video },
};

function StatCard({ label, value, bgColor, iconColor, Icon }) {
    return (
        <div className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-100 p-5 flex items-center gap-4">
            <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${bgColor}`}>
                <Icon size={20} className={iconColor} strokeWidth={1.75} />
            </div>
            <div>
                <p className="text-xs text-gray-500 mb-0.5">{label}</p>
                <p className="text-2xl font-bold text-gray-900 leading-none">{value}</p>
            </div>
        </div>
    );
}

export default function Dashboard({ totalMateri, totalPdf, totalImage, totalYoutube, recentMateri }) {
    return (
        <AuthenticatedLayout
            header={<h2 className="text-xl font-semibold text-gray-800">Dashboard Siswa</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-8">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-6">

                    {/* Stat Cards */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        <StatCard
                            label="Total Soal"
                            value={totalMateri}
                            bgColor="bg-indigo-50"
                            iconColor="text-indigo-600"
                            Icon={BookOpen}
                        />
                        <StatCard
                            label="PDF"
                            value={totalPdf}
                            bgColor="bg-red-50"
                            iconColor="text-red-600"
                            Icon={FileText}
                        />
                        <StatCard
                            label="Gambar"
                            value={totalImage}
                            bgColor="bg-blue-50"
                            iconColor="text-blue-600"
                            Icon={Image}
                        />
                        <StatCard
                            label="Video YouTube"
                            value={totalYoutube}
                            bgColor="bg-green-50"
                            iconColor="text-green-600"
                            Icon={Video}
                        />
                    </div>

                    {/* Recent Materi */}
                    <div className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-100 overflow-hidden">
                        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
                            <h3 className="text-sm font-semibold text-gray-900">Soal Terbaru</h3>
                            <Link
                                href={route('siswa.materi.index')}
                                className="flex items-center gap-1 text-xs text-indigo-600 hover:underline"
                            >
                                Lihat semua
                                <ArrowRight size={12} strokeWidth={2} />
                            </Link>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
                            {recentMateri?.length > 0 ? recentMateri.map(item => {
                                const badge = TYPE_BADGE[item.type];
                                return (
                                    <Link
                                        key={item.id}
                                        href={route('siswa.materi.show', item.id)}
                                        className="group flex flex-col gap-2 p-4 rounded-xl ring-1 ring-gray-100 hover:ring-indigo-200 hover:shadow-sm transition-all"
                                    >
                                        <div className="flex items-center justify-between">
                                            <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium ring-1 ${badge.className}`}>
                                                <badge.Icon size={12} strokeWidth={2} />
                                                {badge.label}
                                            </span>
                                            <span className="text-xs text-gray-400">{item.created_at}</span>
                                        </div>
                                        <p className="text-sm font-semibold text-gray-900 line-clamp-2 group-hover:text-indigo-600 transition-colors">
                                            {item.title}
                                        </p>
                                        {item.description && (
                                            <p className="text-xs text-gray-400 line-clamp-2">{item.description}</p>
                                        )}
                                        <p className="text-xs text-gray-400 mt-auto">oleh {item.created_by}</p>
                                    </Link>
                                );
                            }) : (
                                <div className="col-span-3 py-10 text-center text-gray-400 text-sm">
                                    Belum ada soal tersedia
                                </div>
                            )}
                        </div>
                    </div>

                </div>
            </div>
        </AuthenticatedLayout>
    );
}
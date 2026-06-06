import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const TYPE_COLORS = {
    pdf:     '#ef4444',
    image:   '#3b82f6',
    youtube: '#22c55e',
};

const TYPE_BADGE = {
    pdf:     'bg-red-100 text-red-700',
    image:   'bg-blue-100 text-blue-700',
    youtube: 'bg-green-100 text-green-700',
};

function StatCard({ label, value, icon, color }) {
    return (
        <div className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-100 p-6 flex items-center gap-4">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${color}`}>
                {icon}
            </div>
            <div>
                <p className="text-sm text-gray-500">{label}</p>
                <p className="text-2xl font-bold text-gray-900">{value}</p>
            </div>
        </div>
    );
}

export default function Dashboard({
    totalMateri, totalSiswa,
    totalPdf, totalImage, totalYoutube,
    uploadPerBulan, recentUploads,
}) {
    const pieData = [
        { name: 'PDF',     value: totalPdf,     color: TYPE_COLORS.pdf },
        { name: 'Image',   value: totalImage,   color: TYPE_COLORS.image },
        { name: 'YouTube', value: totalYoutube, color: TYPE_COLORS.youtube },
    ].filter(d => d.value > 0);

    return (
        <AuthenticatedLayout
            header={<h2 className="text-xl font-semibold text-gray-800">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-8">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-6">

                    {/* Stat Cards */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        <StatCard
                            label="Total Materi"
                            value={totalMateri}
                            color="bg-indigo-100 text-indigo-600"
                            icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>}
                        />
                        <StatCard
                            label="Total Siswa"
                            value={totalSiswa}
                            color="bg-purple-100 text-purple-600"
                            icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/></svg>}
                        />
                        <StatCard
                            label="Total PDF"
                            value={totalPdf}
                            color="bg-red-100 text-red-600"
                            icon={<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm-1 1.5L18.5 9H13V3.5z"/></svg>}
                        />
                        <StatCard
                            label="Total YouTube"
                            value={totalYoutube}
                            color="bg-green-100 text-green-600"
                            icon={<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23 7s-.3-2-1.2-2.8c-1.1-1.2-2.4-1.2-3-1.3C16.6 2.8 12 2.8 12 2.8s-4.6 0-6.8.1c-.6.1-1.9.1-3 1.3C1.3 5 1 7 1 7S.7 9.1.7 11.3v2c0 2.1.3 4.3.3 4.3s.3 2 1.2 2.8c1.1 1.2 2.6 1.1 3.3 1.2C7.3 21.8 12 21.8 12 21.8s4.6 0 6.8-.2c.6-.1 1.9-.1 3-1.3.9-.8 1.2-2.8 1.2-2.8s.3-2.1.3-4.3v-2C23.3 9.1 23 7 23 7zM9.7 15.5V8.4l8.1 3.6-8.1 3.5z"/></svg>}
                        />
                    </div>

                    {/* Charts */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                        {/* Pie Chart */}
                        <div className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-100 p-6">
                            <h3 className="text-sm font-semibold text-gray-900 mb-4">Distribusi Tipe Materi</h3>
                            {pieData.length > 0 ? (
                                <ResponsiveContainer width="100%" height={240}>
                                    <PieChart>
                                        <Pie
                                            data={pieData}
                                            cx="50%"
                                            cy="50%"
                                            innerRadius={60}
                                            outerRadius={90}
                                            paddingAngle={4}
                                            dataKey="value"
                                            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                                        >
                                            {pieData.map((entry, i) => (
                                                <Cell key={i} fill={entry.color} />
                                            ))}
                                        </Pie>
                                        <Tooltip />
                                        <Legend />
                                    </PieChart>
                                </ResponsiveContainer>
                            ) : (
                                <div className="flex items-center justify-center h-60 text-gray-400 text-sm">Belum ada data</div>
                            )}
                        </div>

                        {/* Bar Chart */}
                        <div className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-100 p-6">
                            <h3 className="text-sm font-semibold text-gray-900 mb-4">Upload per Bulan (6 Bulan Terakhir)</h3>
                            {uploadPerBulan?.length > 0 ? (
                                <ResponsiveContainer width="100%" height={240}>
                                    <BarChart data={uploadPerBulan} barSize={32}>
                                        <XAxis dataKey="label" tick={{ fontSize: 12 }} />
                                        <YAxis allowDecimals={false} tick={{ fontSize: 12 }} />
                                        <Tooltip />
                                        <Bar dataKey="total" name="Upload" fill="#6366f1" radius={[6, 6, 0, 0]} />
                                    </BarChart>
                                </ResponsiveContainer>
                            ) : (
                                <div className="flex items-center justify-center h-60 text-gray-400 text-sm">Belum ada data</div>
                            )}
                        </div>
                    </div>

                    {/* Recent Uploads */}
                    <div className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-100 overflow-hidden">
                        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
                            <h3 className="text-sm font-semibold text-gray-900">Upload Terbaru</h3>
                            <Link href={route('admin.materi.index')} className="text-xs text-indigo-600 hover:underline">
                                Lihat semua →
                            </Link>
                        </div>
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="bg-gray-50 border-b border-gray-100">
                                    <th className="text-left px-6 py-3 font-semibold text-gray-600">Judul</th>
                                    <th className="text-left px-6 py-3 font-semibold text-gray-600">Tipe</th>
                                    <th className="text-left px-6 py-3 font-semibold text-gray-600">Diupload Oleh</th>
                                    <th className="text-left px-6 py-3 font-semibold text-gray-600">Tanggal</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50">
                                {recentUploads?.length > 0 ? recentUploads.map(item => (
                                    <tr key={item.id} className="hover:bg-gray-50 transition">
                                        <td className="px-6 py-3 font-medium text-gray-900 line-clamp-1">{item.title}</td>
                                        <td className="px-6 py-3">
                                            <span className={`px-2.5 py-1 rounded-lg text-xs font-medium ${TYPE_BADGE[item.type]}`}>
                                                {item.type.toUpperCase()}
                                            </span>
                                        </td>
                                        <td className="px-6 py-3 text-gray-500">{item.created_by}</td>
                                        <td className="px-6 py-3 text-gray-500">{item.created_at}</td>
                                    </tr>
                                )) : (
                                    <tr>
                                        <td colSpan={4} className="px-6 py-10 text-center text-gray-400 text-sm">Belum ada upload</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </AuthenticatedLayout>
    );
}
import InputError from '@/Components/InputError';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <>
            <Head title="Daftar — Kreasi Bintang Edukasi" />

            <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">

                {/* Logo */}
                <div className="mb-8 text-center">
                    <img src="/images/kreasiedukasi.webp" alt="Kreasi Bintang Edukasi" className="h-12 w-auto mx-auto mb-2" />
                    <p className="text-xs text-gray-400 italic">Sahabat Berjuang</p>
                </div>

                {/* Card */}
                <div className="w-full max-w-sm bg-white rounded-2xl shadow-sm border border-gray-100 p-8">

                    <h1 className="text-xl font-bold text-gray-900 mb-1">Buat Akun Baru</h1>
                    <p className="text-sm text-gray-500 mb-6">Bergabung dan mulai belajar bersama kami.</p>

                    <form onSubmit={submit} className="space-y-4">

                        {/* Nama */}
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
                                Nama Lengkap
                            </label>
                            <input
                                id="name"
                                type="text"
                                value={data.name}
                                placeholder="Nama kamu"
                                autoComplete="name"
                                autoFocus
                                onChange={(e) => setData('name', e.target.value)}
                                required
                                className="w-full px-3.5 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                            />
                            <InputError message={errors.name} className="mt-1.5" />
                        </div>

                        {/* Email */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                                Alamat Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                value={data.email}
                                placeholder="contoh@email.com"
                                autoComplete="username"
                                onChange={(e) => setData('email', e.target.value)}
                                required
                                className="w-full px-3.5 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                            />
                            <InputError message={errors.email} className="mt-1.5" />
                        </div>

                        {/* Password */}
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1.5">
                                Kata Sandi
                            </label>
                            <input
                                id="password"
                                type="password"
                                value={data.password}
                                placeholder="••••••••"
                                autoComplete="new-password"
                                onChange={(e) => setData('password', e.target.value)}
                                required
                                className="w-full px-3.5 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                            />
                            <InputError message={errors.password} className="mt-1.5" />
                        </div>

                        {/* Konfirmasi Password */}
                        <div>
                            <label htmlFor="password_confirmation" className="block text-sm font-medium text-gray-700 mb-1.5">
                                Konfirmasi Kata Sandi
                            </label>
                            <input
                                id="password_confirmation"
                                type="password"
                                value={data.password_confirmation}
                                placeholder="••••••••"
                                autoComplete="new-password"
                                onChange={(e) => setData('password_confirmation', e.target.value)}
                                required
                                className="w-full px-3.5 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                            />
                            <InputError message={errors.password_confirmation} className="mt-1.5" />
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            disabled={processing}
                            className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white text-sm font-semibold py-2.5 rounded-xl transition shadow-sm shadow-blue-200"
                        >
                            {processing ? 'Memproses...' : 'Daftar Sekarang'}
                        </button>
                    </form>
                </div>

                {/* Login link */}
                <p className="mt-6 text-sm text-gray-500">
                    Sudah punya akun?{' '}
                    <Link href={route('login')} className="text-orange-500 font-semibold hover:text-orange-600">
                        Masuk di sini
                    </Link>
                </p>

                <p className="mt-6 text-xs text-gray-300">© 2025 PT Kreasi Bintang Edukasi</p>
            </div>
        </>
    );
}
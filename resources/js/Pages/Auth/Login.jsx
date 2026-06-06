import { useEffect } from 'react';
import InputError from '@/Components/InputError';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => reset('password');
    }, []);

    const submit = (e) => {
        e.preventDefault();
        post(route('login'));
    };

    return (
        <>
            <Head title="Masuk — Kreasi Bintang Edukasi" />

            <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">

                {/* Logo */}
                <div className="mb-8 text-center">
                    <img src="/images/kreasiedukasi.webp" alt="Kreasi Bintang Edukasi" className="h-12 w-auto mx-auto mb-2" />
                    <p className="text-xs text-gray-400 italic">Sahabat Berjuang</p>
                </div>

                {/* Card */}
                <div className="w-full max-w-sm bg-white rounded-2xl shadow-sm border border-gray-100 p-8">

                    <h1 className="text-xl font-bold text-gray-900 mb-1">Masuk ke Platform</h1>
                    <p className="text-sm text-gray-500 mb-6">Selamat datang kembali!</p>

                    {status && (
                        <div className="mb-4 text-sm text-green-700 bg-green-50 border border-green-100 rounded-lg px-4 py-3">
                            {status}
                        </div>
                    )}

                    <form onSubmit={submit} className="space-y-4">
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
                                autoFocus
                                onChange={(e) => setData('email', e.target.value)}
                                className="w-full px-3.5 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                            />
                            <InputError message={errors.email} className="mt-1.5" />
                        </div>

                        {/* Password */}
                        <div>
                            <div className="flex items-center justify-between mb-1.5">
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                    Kata Sandi
                                </label>
                                {canResetPassword && (
                                    <Link href={route('password.request')} className="text-xs font-semibold text-blue-600 hover:text-blue-700">
                                        Lupa kata sandi?
                                    </Link>
                                )}
                            </div>
                            <input
                                id="password"
                                type="password"
                                value={data.password}
                                placeholder="••••••••"
                                autoComplete="current-password"
                                onChange={(e) => setData('password', e.target.value)}
                                className="w-full px-3.5 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                            />
                            <InputError message={errors.password} className="mt-1.5" />
                        </div>

                        {/* Remember me */}
                        <label className="flex items-center gap-2 cursor-pointer select-none">
                            <input
                                type="checkbox"
                                checked={data.remember}
                                onChange={(e) => setData('remember', e.target.checked)}
                                className="w-4 h-4 rounded accent-blue-600 cursor-pointer"
                            />
                            <span className="text-sm text-gray-600">Ingat saya</span>
                        </label>

                        {/* Submit */}
                        <button
                            type="submit"
                            disabled={processing}
                            className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white text-sm font-semibold py-2.5 rounded-xl transition shadow-sm shadow-blue-200"
                        >
                            {processing ? 'Memproses...' : 'Masuk'}
                        </button>
                    </form>
                </div>

                {/* Register link */}
                <p className="mt-6 text-sm text-gray-500">
                    Belum punya akun?{' '}
                    <Link href={route('register')} className="text-orange-500 font-semibold hover:text-orange-600">
                        Daftar Sekarang
                    </Link>
                </p>

                <p className="mt-6 text-xs text-gray-300">© 2025 PT Kreasi Bintang Edukasi</p>
            </div>
        </>
    );
}
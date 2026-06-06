# Soal Management Platform

Platform bimbingan belajar untuk manajemen soal berbasis **Laravel 11 + Inertia.js + React + Tailwind CSS**.

---

## Tech Stack

| Layer      | Teknologi                          |
|------------|------------------------------------|
| Backend    | Laravel 11                         |
| Frontend   | React 18 + Inertia.js              |
| Styling    | Tailwind CSS v3                    |
| Icons      | Lucide React                       |
| Database   | MySQL                              |
| Auth       | Laravel Sanctum                    |
| Caching    | Laravel Cache (Database driver)    |
| Build Tool | Vite                               |

---

## Requirements

Pastikan semua tools berikut sudah terinstall di komputer:

| Tool       | Versi Minimum | Cek Versi              |
|------------|---------------|------------------------|
| PHP        | >= 8.2        | `php -v`               |
| Composer   | >= 2.x        | `composer --version`   |
| Node.js    | >= 18.x       | `node -v`              |
| NPM        | >= 9.x        | `npm -v`               |
| MySQL      | >= 8.0        | `mysql --version`      |

---

## Instalasi Lengkap

### 1. Clone Repository

```bash
git clone https://github.com/username/soal-management.git
cd soal-management
```

---

### 2. Install PHP Dependencies

```bash
composer install
```

> Jika ada error `composer: command not found`, download Composer di https://getcomposer.org/download/

---

### 3. Install Node Dependencies

```bash
npm install
```

Perintah ini akan menginstall semua package frontend sekaligus, termasuk:

- **React & Inertia.js** — framework frontend
- **Tailwind CSS** — utility-first CSS framework
- **Vite** — build tool & dev server
- **Lucide React** — icon library

> Jika `lucide-react` tidak terinstall otomatis, jalankan manual:
> ```bash
> npm install lucide-react
> ```

---

### 4. Konfigurasi Environment

Salin file `.env.example` menjadi `.env`:

```bash
cp .env.example .env
```

Generate application key:

```bash
php artisan key:generate
```

Edit file `.env`, sesuaikan konfigurasi database:

```env
APP_NAME="Soal Management"
APP_URL=http://localhost:8000

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=soal_management
DB_USERNAME=root
DB_PASSWORD=
```

> Jika menggunakan XAMPP, pastikan MySQL sudah berjalan dan `DB_USERNAME=root`, `DB_PASSWORD=` (kosong).

---

### 5. Buat Database

Buka phpMyAdmin atau MySQL client, buat database baru:

```sql
CREATE DATABASE soal_management;
```

Kemudian jalankan migrasi:

```bash
php artisan migrate
```

---

### 6. Buat Storage Link

Agar file yang diupload bisa diakses publik:

```bash
php artisan storage:link
```

---

### 7. Seed Data (Opsional)

Untuk mengisi data awal (akun admin & siswa):

```bash
php artisan db:seed
```

---

## Menjalankan Aplikasi

> ⚠️ **Penting:** Aplikasi membutuhkan **2 terminal yang berjalan bersamaan**. Jangan tutup salah satunya.

### Terminal 1 — Laravel Backend Server

```bash
php artisan serve
```

Aplikasi akan berjalan di: `http://localhost:8000`

### Terminal 2 — Vite Dev Server (React + Tailwind CSS)

Buka terminal baru (jangan tutup Terminal 1), lalu jalankan:

```bash
npm run dev
```

> Vite akan mengkompilasi React dan Tailwind CSS secara realtime. Jika terminal ini ditutup, tampilan aplikasi akan hilang/tidak muncul.

---

## Akun Default

Setelah menjalankan seeder:

| Role  | Email             | Password |
|-------|-------------------|----------|
| Admin | admin@example.com | password |
| Siswa | siswa@example.com | password |

---

## Troubleshooting

### Halaman putih / blank setelah buka browser

Pastikan **Terminal 2 (Vite)** sudah berjalan. Halaman putih biasanya terjadi karena Vite dev server tidak aktif.

```bash
npm run dev
```

### Error: `Failed to resolve import "lucide-react"`

Install lucide-react secara manual:

```bash
npm install lucide-react
```

Lalu restart Vite:

```bash
npm run dev
```

### Error: `Cannot find module` atau dependency lainnya

Hapus cache dan install ulang:

```bash
rm -rf node_modules
npm install
npm run dev
```

### Error: `php artisan migrate` gagal

Pastikan:
1. MySQL sudah berjalan (cek XAMPP Control Panel)
2. Database `soal_management` sudah dibuat
3. Konfigurasi `.env` sudah benar

### Error: `Class not found` di PHP

Jalankan autoload ulang:

```bash
composer dump-autoload
```

### File upload tidak muncul

Pastikan storage link sudah dibuat:

```bash
php artisan storage:link
```

---

## Build untuk Production

Jika ingin deploy ke server production:

```bash
npm run build
```

Kemudian jalankan hanya Laravel server (Vite tidak dibutuhkan lagi):

```bash
php artisan serve
```

---

## Struktur Folder Penting

```
app/
├── Http/
│   ├── Controllers/
│   │   ├── Admin/
│   │   │   └── MateriWebController.php   # CRUD soal (web)
│   │   ├── Siswa/
│   │   │   ├── DashboardController.php
│   │   │   └── MateriWebController.php   # Lihat soal (web)
│   │   └── DashboardController.php       # Dashboard admin
│   ├── Middleware/
│   │   └── RoleMiddleware.php
│   └── Resources/
│       └── MateriResource.php
├── Models/
│   ├── FileMateri.php
│   └── User.php
resources/
└── js/
    └── Pages/
        ├── Admin/
        │   └── Materi/
        │       ├── Index.jsx    # Daftar soal admin
        │       ├── Create.jsx   # Upload soal
        │       └── Edit.jsx     # Edit soal
        ├── Siswa/
        │   ├── Dashboard.jsx
        │   └── Materi/
        │       ├── Index.jsx    # Daftar soal siswa
        │       └── Show.jsx     # Detail soal siswa
        └── Dashboard.jsx        # Redirect by role
routes/
├── web.php
└── api.php
```

---

## API Endpoints

Base URL: `http://localhost:8000`

Authentication menggunakan **Laravel Sanctum** (Bearer Token).

### Auth

| Method | Endpoint      | Deskripsi |
|--------|---------------|-----------|
| POST   | `/api/login`  | Login     |
| POST   | `/api/logout` | Logout    |

### Admin

| Method | Endpoint                    | Deskripsi           |
|--------|-----------------------------|---------------------|
| GET    | `/api/list-materi`          | Daftar semua soal   |
| GET    | `/api/show-materi/{id}`     | Detail soal         |
| POST   | `/api/upload-materi`        | Upload soal baru    |
| GET    | `/api/materi-download/{id}` | Download file soal  |

### Siswa

| Method | Endpoint                   | Deskripsi   |
|--------|----------------------------|-------------|
| GET    | `/api/list-materi`         | Daftar soal |
| GET    | `/api/detail-materi/{id}`  | Detail soal |

### Contoh Request Upload Soal (PDF/Image)

```http
POST /api/upload-materi
Authorization: Bearer {token}
Content-Type: multipart/form-data

title        = "Soal Matematika Bab 1"
description  = "Persamaan Linear"
type         = "pdf"
file         = [file.pdf]
```

### Contoh Request Upload YouTube

```http
POST /api/upload-materi
Authorization: Bearer {token}
Content-Type: multipart/form-data

title        = "Video Pembahasan"
type         = "youtube"
youtube_url  = "https://www.youtube.com/watch?v=xxxxx"
```

### Contoh Response

```json
{
  "status": true,
  "message": "Materi berhasil diupload",
  "data": {
    "id": 1,
    "title": "Soal Matematika Bab 1",
    "type": "pdf",
    "file_url": "http://localhost:8000/storage/materi/pdf/file.pdf",
    "created_at": "06 Jun 2026"
  }
}
```

---

## Database Design

### Tabel `users`

| Column     | Type      | Keterangan        |
|------------|-----------|-------------------|
| id         | bigint    | Primary key       |
| name       | varchar   |                   |
| email      | varchar   | Unique            |
| password   | varchar   | Hashed (bcrypt)   |
| role       | enum      | `admin` / `siswa` |
| created_at | timestamp |                   |
| updated_at | timestamp |                   |

### Tabel `file_materi`

| Column      | Type                        | Keterangan             |
|-------------|-----------------------------|------------------------|
| id          | bigint                      | Primary key            |
| title       | varchar                     | Judul soal             |
| description | text                        | Deskripsi (nullable)   |
| type        | enum(`pdf`,`image`,`youtube`) | Tipe soal            |
| file_path   | varchar                     | Path file (nullable)   |
| youtube_url | varchar                     | URL YouTube (nullable) |
| created_by  | bigint                      | Foreign key → users.id |
| deleted_at  | timestamp                   | Soft delete            |
| created_at  | timestamp                   |                        |
| updated_at  | timestamp                   |                        |

---

## Role & Akses

| Fitur                      | Admin | Siswa |
|----------------------------|:-----:|:-----:|
| Dashboard statistik        | ✅    | ✅    |
| Upload soal                | ✅    | ❌    |
| Edit soal                  | ✅    | ❌    |
| Hapus soal                 | ✅    | ❌    |
| Download soal (PDF/Image)  | ✅    | ❌    |
| Salin link YouTube         | ✅    | ❌    |
| Lihat daftar soal          | ✅    | ✅    |
| Preview / detail soal      | ✅    | ✅    |

---

## Fitur Unggulan

- **Drag & Drop Upload** — upload file dengan drag & drop atau klik
- **Preview Langsung** — preview PDF, gambar, dan YouTube embed sebelum submit
- **Caching** — list soal di-cache untuk performa optimal
- **Soft Delete** — data tidak benar-benar terhapus dari database
- **Responsive UI** — tampilan optimal di desktop maupun mobile
- **Role-based Access** — akses dibatasi berdasarkan role user
- **Flash Notification** — notifikasi toast setelah aksi berhasil/gagal

---

## Lisensi

MIT License
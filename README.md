# 📚 Soal Management Platform

Platform bimbingan belajar berbasis web untuk manajemen soal dengan 2 role: **Admin** dan **Siswa**.

---

## 🚀 Tech Stack

| Layer     | Teknologi                        |
|-----------|----------------------------------|
| Backend   | Laravel 12 + Sanctum             |
| Frontend  | React + Inertia.js               |
| Styling   | Tailwind CSS                     |
| Database  | MySQL (via XAMPP)                |
| Auth      | Laravel Sanctum (Token-based)    |
| Caching   | Laravel Cache (database driver)  |

---

## ✅ Fitur yang Diimplementasikan

### 👤 Role Admin
- Upload soal dalam format **PDF**, **Image (JPG/JPEG/PNG)**, dan **Link YouTube**
- Lihat daftar soal (Judul, Tipe, Tanggal Upload, Aksi)
- Edit & hapus soal (beserta file fisik di storage)
- Download soal (PDF & Image)
- Salin link YouTube

### 🎓 Role Siswa
- Lihat daftar soal
- Lihat detail soal dengan **preview**:
  - PDF → embedded PDF viewer
  - YouTube → embedded iframe player
  - Image → tampil langsung

### ⚙️ Fitur Tambahan (Bonus)
- Pagination pada list materi
- Search & filter materi berdasarkan judul dan tipe
- Caching pada endpoint list & detail materi
- Cache otomatis di-clear saat data diubah (selective, tidak flush semua)
- Relasi tabel `file_materi` → `users` via `created_by`
- Middleware role-based access control (RBAC)
- SoftDeletes pada tabel `file_materi`

---

## 🗄️ Database Design

### Tabel `users`
| Field              | Tipe         | Keterangan              |
|--------------------|--------------|-------------------------|
| id                 | bigint (PK)  | Auto increment          |
| name               | varchar      |                         |
| email              | varchar      | Unique                  |
| password           | varchar      | Bcrypt hashed           |
| role               | enum         | `admin` / `siswa`       |
| email_verified_at  | timestamp    | Nullable                |
| remember_token     | varchar      | Nullable                |
| created_at         | timestamp    |                         |
| updated_at         | timestamp    |                         |

### Tabel `file_materi`
| Field       | Tipe         | Keterangan                          |
|-------------|--------------|-------------------------------------|
| id          | bigint (PK)  | Auto increment                      |
| title       | varchar      | Judul soal                          |
| description | text         | Nullable                            |
| type        | enum         | `pdf` / `image` / `youtube`         |
| file_path   | varchar      | Path file di storage, nullable      |
| youtube_url | varchar      | URL YouTube, nullable               |
| created_by  | bigint (FK)  | Foreign key → `users.id`            |
| deleted_at  | timestamp    | SoftDeletes, nullable               |
| created_at  | timestamp    |                                     |
| updated_at  | timestamp    |                                     |

**Relasi:** `file_materi.created_by` → `users.id` (Many-to-One, CASCADE on delete)

---

## 📡 API Endpoints

### Auth
| Method | Endpoint      | Deskripsi        | Auth |
|--------|---------------|------------------|------|
| POST   | /api/login    | Login user       | ❌   |
| POST   | /api/logout   | Logout user      | ✅   |
| GET    | /api/me       | Info user aktif  | ✅   |

### Admin
| Method | Endpoint                    | Deskripsi              | Auth  |
|--------|-----------------------------|------------------------|-------|
| GET    | /api/list-materi            | List semua materi      | Admin |
| GET    | /api/show-materi/{id}       | Detail materi          | Admin |
| POST   | /api/upload-materi          | Upload soal baru       | Admin |
| POST   | /api/update-materi/{id}     | Edit soal              | Admin |
| DELETE | /api/delete-materi/{id}     | Hapus soal             | Admin |
| GET    | /api/materi-download/{id}   | Download file          | Admin |

### Siswa
| Method | Endpoint                | Deskripsi         | Auth  |
|--------|-------------------------|-------------------|-------|
| GET    | /api/list-materi        | List semua materi | Siswa |
| GET    | /api/detail-materi/{id} | Detail materi     | Siswa |

---

## ⚙️ Cara Instalasi & Menjalankan

### Prasyarat
- PHP >= 8.2
- Composer
- Node.js & NPM
- XAMPP (Apache + MySQL)
- Git

### Langkah Instalasi

**1. Clone repository**
```bash
git clone https://github.com/username/soal-management.git
cd soal-management
```

**2. Install dependencies**
```bash
composer install
npm install
```

**3. Setup environment**
```bash
cp .env.example .env
php artisan key:generate
```

**4. Konfigurasi database di `.env`**
```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=soal_management
DB_USERNAME=root
DB_PASSWORD=
```

**5. Jalankan XAMPP** — pastikan Apache & MySQL sudah Running

**6. Buat database**

Buka `http://localhost/phpmyadmin` → buat database baru bernama `soal_management`

**7. Jalankan migration & seeder**
```bash
php artisan migrate
php artisan db:seed --class=UserSeeder
php artisan storage:link
```

**8. Install Sanctum API**
```bash
php artisan install:api
```

**9. Build frontend**
```bash
npm run dev
```

**10. Akses aplikasi**

Buka browser: `http://localhost/soal-management/public`

---

## 👥 Akun Default (Seeder)

| Role  | Email               | Password |
|-------|---------------------|----------|
| Admin | admin@example.com   | password |
| Siswa | siswa@example.com   | password |

---

## 🧪 Cara Test API (Postman / Thunder Client)

### Login
```
POST http://localhost/soal-management/public/api/login
Headers: Accept: application/json
Body (JSON):
{
    "email": "admin@example.com",
    "password": "password"
}
```

### Gunakan Token
Salin token dari response login, lalu tambahkan di header setiap request:
```
Authorization: Bearer {token}
Accept: application/json
```

### Upload Soal (Admin)
```
POST http://localhost/soal-management/public/api/upload-materi
Headers: Authorization: Bearer {token}
Body (form-data):
  title        = Soal Matematika Bab 1
  type         = pdf
  file         = [pilih file PDF]
  description  = Soal latihan persamaan linear
```

---

## 📁 Struktur Folder Penting

```
soal-management/
├── app/
│   ├── Http/
│   │   ├── Controllers/
│   │   │   ├── Admin/MateriController.php
│   │   │   ├── Auth/AuthController.php
│   │   │   └── Siswa/MateriController.php
│   │   ├── Middleware/
│   │   │   └── RoleMiddleware.php
│   │   └── Resources/
│   │       └── MateriResource.php
│   └── Models/
│       ├── FileMateri.php
│       └── User.php
├── database/
│   ├── migrations/
│   └── seeders/
│       └── UserSeeder.php
├── resources/js/
│   └── Pages/
│       ├── Auth/
│       ├── Admin/
│       │   └── Materi/         ← halaman admin (WIP)
│       └── Siswa/
│           └── Materi/         ← halaman siswa (WIP)
├── routes/
│   └── api.php
└── storage/app/public/         ← file upload tersimpan di sini
```

---

## 🔐 Implementasi Caching

Caching diterapkan pada endpoint list dan detail materi menggunakan `Cache::remember()`.
Saat data berubah (upload/edit/delete), cache di-invalidate secara selektif menggunakan
key registry — tanpa `Cache::flush()` yang bisa menghapus cache lain.

```php
// Menyimpan cache
Cache::remember($cacheKey, 60, fn() => FileMateri::paginate(10));

// Invalidate selektif saat data berubah
Cache::forget("materi_{$id}");
Cache::forget("materi_siswa_{$id}");
$this->forgetAllListCache(); // loop registry key, forget satu per satu
```

---

## 🔧 Fix & Improvement yang Diterapkan

| # | Issue | Status |
|---|-------|--------|
| 1 | Migration `add_role_to_users_table` kosong — kolom `role` sudah ada di migration utama | ✅ Verified aman |
| 2 | `Cache::flush()` diganti selective `Cache::forget()` via key registry | ✅ Fixed |
| 3 | `MateriResource` crash jika `creator` null | ✅ Fixed |
| 4 | Cache siswa tidak di-invalidate saat admin update/delete | ✅ Fixed |
| 5 | Route `/list-materi` closure diganti ke masing-masing role group | ✅ Fixed |
| 6 | Halaman React Admin (Index, Create, Edit) | 🚧 WIP |
| 7 | Halaman React Siswa (Index, Show/Detail) | 🚧 WIP |
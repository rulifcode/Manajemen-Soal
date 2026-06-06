-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 06, 2026 at 09:58 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `soal_management`
--

-- --------------------------------------------------------

--
-- Table structure for table `cache`
--

CREATE TABLE `cache` (
  `key` varchar(255) NOT NULL,
  `value` mediumtext NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `cache`
--

INSERT INTO `cache` (`key`, `value`, `expiration`) VALUES
('laravel-cache-dashboard_stats', 'a:7:{s:11:\"totalMateri\";i:6;s:10:\"totalSiswa\";i:4;s:8:\"totalPdf\";i:3;s:10:\"totalImage\";i:2;s:12:\"totalYoutube\";i:1;s:14:\"uploadPerBulan\";O:29:\"Illuminate\\Support\\Collection\":2:{s:8:\"\0*\0items\";a:1:{i:0;a:2:{s:5:\"label\";s:8:\"Jun 2026\";s:5:\"total\";i:6;}}s:28:\"\0*\0escapeWhenCastingToString\";b:0;}s:13:\"recentUploads\";O:29:\"Illuminate\\Support\\Collection\":2:{s:8:\"\0*\0items\";a:5:{i:0;a:5:{s:2:\"id\";i:7;s:5:\"title\";s:19:\"Magni unde voluptas\";s:4:\"type\";s:3:\"pdf\";s:10:\"created_at\";s:11:\"06 Jun 2026\";s:10:\"created_by\";s:5:\"Admin\";}i:1;a:5:{s:2:\"id\";i:6;s:5:\"title\";s:19:\"Cumque nostrud quam\";s:4:\"type\";s:5:\"image\";s:10:\"created_at\";s:11:\"06 Jun 2026\";s:10:\"created_by\";s:5:\"Admin\";}i:2;a:5:{s:2:\"id\";i:5;s:5:\"title\";s:20:\"Eligendi lorem reici\";s:4:\"type\";s:3:\"pdf\";s:10:\"created_at\";s:11:\"06 Jun 2026\";s:10:\"created_by\";s:5:\"Admin\";}i:3;a:5:{s:2:\"id\";i:4;s:5:\"title\";s:31:\"Pendidikan Agama Islam - Tauhid\";s:4:\"type\";s:5:\"image\";s:10:\"created_at\";s:11:\"06 Jun 2026\";s:10:\"created_by\";s:5:\"Admin\";}i:4;a:5:{s:2:\"id\";i:3;s:5:\"title\";s:20:\"hafalan Quran bareng\";s:4:\"type\";s:7:\"youtube\";s:10:\"created_at\";s:11:\"06 Jun 2026\";s:10:\"created_by\";s:5:\"Admin\";}}s:28:\"\0*\0escapeWhenCastingToString\";b:0;}}', 1780732622),
('laravel-cache-dashboard_stats_siswa', 'a:5:{s:11:\"totalMateri\";i:6;s:8:\"totalPdf\";i:3;s:10:\"totalImage\";i:2;s:12:\"totalYoutube\";i:1;s:12:\"recentMateri\";O:29:\"Illuminate\\Support\\Collection\":2:{s:8:\"\0*\0items\";a:6:{i:0;a:6:{s:2:\"id\";i:7;s:5:\"title\";s:19:\"Magni unde voluptas\";s:11:\"description\";s:20:\"Officia lorem non sa\";s:4:\"type\";s:3:\"pdf\";s:10:\"created_at\";s:11:\"06 Jun 2026\";s:10:\"created_by\";s:5:\"Admin\";}i:1;a:6:{s:2:\"id\";i:6;s:5:\"title\";s:19:\"Cumque nostrud quam\";s:11:\"description\";s:20:\"Obcaecati in laborio\";s:4:\"type\";s:5:\"image\";s:10:\"created_at\";s:11:\"06 Jun 2026\";s:10:\"created_by\";s:5:\"Admin\";}i:2;a:6:{s:2:\"id\";i:5;s:5:\"title\";s:20:\"Eligendi lorem reici\";s:11:\"description\";s:19:\"Consectetur ipsam c\";s:4:\"type\";s:3:\"pdf\";s:10:\"created_at\";s:11:\"06 Jun 2026\";s:10:\"created_by\";s:5:\"Admin\";}i:3;a:6:{s:2:\"id\";i:4;s:5:\"title\";s:31:\"Pendidikan Agama Islam - Tauhid\";s:11:\"description\";s:18:\"Yuk belajar Tauhid\";s:4:\"type\";s:5:\"image\";s:10:\"created_at\";s:11:\"06 Jun 2026\";s:10:\"created_by\";s:5:\"Admin\";}i:4;a:6:{s:2:\"id\";i:3;s:5:\"title\";s:20:\"hafalan Quran bareng\";s:11:\"description\";s:14:\"Yuk ikuti kami\";s:4:\"type\";s:7:\"youtube\";s:10:\"created_at\";s:11:\"06 Jun 2026\";s:10:\"created_by\";s:5:\"Admin\";}i:5;a:6:{s:2:\"id\";i:1;s:5:\"title\";s:34:\"Soal Matematika 1 - Aljabar Linear\";s:11:\"description\";s:20:\"belajar Aljabar Yukk\";s:4:\"type\";s:3:\"pdf\";s:10:\"created_at\";s:11:\"06 Jun 2026\";s:10:\"created_by\";s:5:\"Admin\";}}s:28:\"\0*\0escapeWhenCastingToString\";b:0;}}', 1780732592),
('laravel-cache-materi_list_admin_d751713988987e9331980363e24189ce', 'O:42:\"Illuminate\\Pagination\\LengthAwarePaginator\":12:{s:8:\"\0*\0items\";O:39:\"Illuminate\\Database\\Eloquent\\Collection\":2:{s:8:\"\0*\0items\";a:6:{i:0;O:21:\"App\\Models\\FileMateri\":34:{s:13:\"\0*\0connection\";s:5:\"mysql\";s:8:\"\0*\0table\";s:11:\"file_materi\";s:13:\"\0*\0primaryKey\";s:2:\"id\";s:10:\"\0*\0keyType\";s:3:\"int\";s:12:\"incrementing\";b:1;s:7:\"\0*\0with\";a:0:{}s:12:\"\0*\0withCount\";a:0:{}s:19:\"preventsLazyLoading\";b:0;s:10:\"\0*\0perPage\";i:15;s:6:\"exists\";b:1;s:18:\"wasRecentlyCreated\";b:0;s:28:\"\0*\0escapeWhenCastingToString\";b:0;s:13:\"\0*\0attributes\";a:10:{s:2:\"id\";i:7;s:5:\"title\";s:19:\"Magni unde voluptas\";s:11:\"description\";s:20:\"Officia lorem non sa\";s:4:\"type\";s:3:\"pdf\";s:9:\"file_path\";s:51:\"materi/pdf/fc408d5a-e30a-4f5b-8464-922ca064dbf0.pdf\";s:11:\"youtube_url\";N;s:10:\"created_by\";i:2;s:10:\"deleted_at\";N;s:10:\"created_at\";s:19:\"2026-06-06 06:41:42\";s:10:\"updated_at\";s:19:\"2026-06-06 06:41:42\";}s:11:\"\0*\0original\";a:10:{s:2:\"id\";i:7;s:5:\"title\";s:19:\"Magni unde voluptas\";s:11:\"description\";s:20:\"Officia lorem non sa\";s:4:\"type\";s:3:\"pdf\";s:9:\"file_path\";s:51:\"materi/pdf/fc408d5a-e30a-4f5b-8464-922ca064dbf0.pdf\";s:11:\"youtube_url\";N;s:10:\"created_by\";i:2;s:10:\"deleted_at\";N;s:10:\"created_at\";s:19:\"2026-06-06 06:41:42\";s:10:\"updated_at\";s:19:\"2026-06-06 06:41:42\";}s:10:\"\0*\0changes\";a:0:{}s:11:\"\0*\0previous\";a:0:{}s:8:\"\0*\0casts\";a:1:{s:10:\"deleted_at\";s:8:\"datetime\";}s:17:\"\0*\0classCastCache\";a:0:{}s:21:\"\0*\0attributeCastCache\";a:0:{}s:13:\"\0*\0dateFormat\";N;s:10:\"\0*\0appends\";a:2:{i:0;s:8:\"file_url\";i:1;s:17:\"youtube_embed_url\";}s:19:\"\0*\0dispatchesEvents\";a:0:{}s:14:\"\0*\0observables\";a:0:{}s:12:\"\0*\0relations\";a:1:{s:7:\"creator\";O:15:\"App\\Models\\User\":36:{s:13:\"\0*\0connection\";s:5:\"mysql\";s:8:\"\0*\0table\";s:5:\"users\";s:13:\"\0*\0primaryKey\";s:2:\"id\";s:10:\"\0*\0keyType\";s:3:\"int\";s:12:\"incrementing\";b:1;s:7:\"\0*\0with\";a:0:{}s:12:\"\0*\0withCount\";a:0:{}s:19:\"preventsLazyLoading\";b:0;s:10:\"\0*\0perPage\";i:15;s:6:\"exists\";b:1;s:18:\"wasRecentlyCreated\";b:0;s:28:\"\0*\0escapeWhenCastingToString\";b:0;s:13:\"\0*\0attributes\";a:9:{s:2:\"id\";i:2;s:4:\"name\";s:5:\"Admin\";s:5:\"email\";s:17:\"admin@example.com\";s:4:\"role\";s:5:\"admin\";s:17:\"email_verified_at\";N;s:8:\"password\";s:60:\"$2y$12$SdJpRNHMtK.URtnKbUwekukz/OH0se6CnNWoiko3gfd4LjHEy.Y2K\";s:14:\"remember_token\";N;s:10:\"created_at\";s:19:\"2026-06-05 16:37:24\";s:10:\"updated_at\";s:19:\"2026-06-05 16:37:24\";}s:11:\"\0*\0original\";a:9:{s:2:\"id\";i:2;s:4:\"name\";s:5:\"Admin\";s:5:\"email\";s:17:\"admin@example.com\";s:4:\"role\";s:5:\"admin\";s:17:\"email_verified_at\";N;s:8:\"password\";s:60:\"$2y$12$SdJpRNHMtK.URtnKbUwekukz/OH0se6CnNWoiko3gfd4LjHEy.Y2K\";s:14:\"remember_token\";N;s:10:\"created_at\";s:19:\"2026-06-05 16:37:24\";s:10:\"updated_at\";s:19:\"2026-06-05 16:37:24\";}s:10:\"\0*\0changes\";a:0:{}s:11:\"\0*\0previous\";a:0:{}s:8:\"\0*\0casts\";a:2:{s:17:\"email_verified_at\";s:8:\"datetime\";s:8:\"password\";s:6:\"hashed\";}s:17:\"\0*\0classCastCache\";a:0:{}s:21:\"\0*\0attributeCastCache\";a:0:{}s:13:\"\0*\0dateFormat\";N;s:10:\"\0*\0appends\";a:0:{}s:19:\"\0*\0dispatchesEvents\";a:0:{}s:14:\"\0*\0observables\";a:0:{}s:12:\"\0*\0relations\";a:0:{}s:10:\"\0*\0touches\";a:0:{}s:27:\"\0*\0relationAutoloadCallback\";N;s:26:\"\0*\0relationAutoloadContext\";N;s:10:\"timestamps\";b:1;s:13:\"usesUniqueIds\";b:0;s:9:\"\0*\0hidden\";a:2:{i:0;s:8:\"password\";i:1;s:14:\"remember_token\";}s:10:\"\0*\0visible\";a:0:{}s:11:\"\0*\0fillable\";a:4:{i:0;s:4:\"name\";i:1;s:5:\"email\";i:2;s:8:\"password\";i:3;s:4:\"role\";}s:10:\"\0*\0guarded\";a:1:{i:0;s:1:\"*\";}s:19:\"\0*\0authPasswordName\";s:8:\"password\";s:20:\"\0*\0rememberTokenName\";s:14:\"remember_token\";s:14:\"\0*\0accessToken\";N;}}s:10:\"\0*\0touches\";a:0:{}s:27:\"\0*\0relationAutoloadCallback\";N;s:26:\"\0*\0relationAutoloadContext\";N;s:10:\"timestamps\";b:1;s:13:\"usesUniqueIds\";b:0;s:9:\"\0*\0hidden\";a:0:{}s:10:\"\0*\0visible\";a:0:{}s:11:\"\0*\0fillable\";a:6:{i:0;s:5:\"title\";i:1;s:11:\"description\";i:2;s:4:\"type\";i:3;s:9:\"file_path\";i:4;s:11:\"youtube_url\";i:5;s:10:\"created_by\";}s:10:\"\0*\0guarded\";a:1:{i:0;s:1:\"*\";}s:16:\"\0*\0forceDeleting\";b:0;}i:1;O:21:\"App\\Models\\FileMateri\":34:{s:13:\"\0*\0connection\";s:5:\"mysql\";s:8:\"\0*\0table\";s:11:\"file_materi\";s:13:\"\0*\0primaryKey\";s:2:\"id\";s:10:\"\0*\0keyType\";s:3:\"int\";s:12:\"incrementing\";b:1;s:7:\"\0*\0with\";a:0:{}s:12:\"\0*\0withCount\";a:0:{}s:19:\"preventsLazyLoading\";b:0;s:10:\"\0*\0perPage\";i:15;s:6:\"exists\";b:1;s:18:\"wasRecentlyCreated\";b:0;s:28:\"\0*\0escapeWhenCastingToString\";b:0;s:13:\"\0*\0attributes\";a:10:{s:2:\"id\";i:6;s:5:\"title\";s:19:\"Cumque nostrud quam\";s:11:\"description\";s:20:\"Obcaecati in laborio\";s:4:\"type\";s:5:\"image\";s:9:\"file_path\";s:54:\"materi/images/3c9f19ae-c778-4ba1-bf33-7252eed18c4a.png\";s:11:\"youtube_url\";N;s:10:\"created_by\";i:2;s:10:\"deleted_at\";N;s:10:\"created_at\";s:19:\"2026-06-06 06:41:00\";s:10:\"updated_at\";s:19:\"2026-06-06 06:41:00\";}s:11:\"\0*\0original\";a:10:{s:2:\"id\";i:6;s:5:\"title\";s:19:\"Cumque nostrud quam\";s:11:\"description\";s:20:\"Obcaecati in laborio\";s:4:\"type\";s:5:\"image\";s:9:\"file_path\";s:54:\"materi/images/3c9f19ae-c778-4ba1-bf33-7252eed18c4a.png\";s:11:\"youtube_url\";N;s:10:\"created_by\";i:2;s:10:\"deleted_at\";N;s:10:\"created_at\";s:19:\"2026-06-06 06:41:00\";s:10:\"updated_at\";s:19:\"2026-06-06 06:41:00\";}s:10:\"\0*\0changes\";a:0:{}s:11:\"\0*\0previous\";a:0:{}s:8:\"\0*\0casts\";a:1:{s:10:\"deleted_at\";s:8:\"datetime\";}s:17:\"\0*\0classCastCache\";a:0:{}s:21:\"\0*\0attributeCastCache\";a:0:{}s:13:\"\0*\0dateFormat\";N;s:10:\"\0*\0appends\";a:2:{i:0;s:8:\"file_url\";i:1;s:17:\"youtube_embed_url\";}s:19:\"\0*\0dispatchesEvents\";a:0:{}s:14:\"\0*\0observables\";a:0:{}s:12:\"\0*\0relations\";a:1:{s:7:\"creator\";r:52;}s:10:\"\0*\0touches\";a:0:{}s:27:\"\0*\0relationAutoloadCallback\";N;s:26:\"\0*\0relationAutoloadContext\";N;s:10:\"timestamps\";b:1;s:13:\"usesUniqueIds\";b:0;s:9:\"\0*\0hidden\";a:0:{}s:10:\"\0*\0visible\";a:0:{}s:11:\"\0*\0fillable\";a:6:{i:0;s:5:\"title\";i:1;s:11:\"description\";i:2;s:4:\"type\";i:3;s:9:\"file_path\";i:4;s:11:\"youtube_url\";i:5;s:10:\"created_by\";}s:10:\"\0*\0guarded\";a:1:{i:0;s:1:\"*\";}s:16:\"\0*\0forceDeleting\";b:0;}i:2;O:21:\"App\\Models\\FileMateri\":34:{s:13:\"\0*\0connection\";s:5:\"mysql\";s:8:\"\0*\0table\";s:11:\"file_materi\";s:13:\"\0*\0primaryKey\";s:2:\"id\";s:10:\"\0*\0keyType\";s:3:\"int\";s:12:\"incrementing\";b:1;s:7:\"\0*\0with\";a:0:{}s:12:\"\0*\0withCount\";a:0:{}s:19:\"preventsLazyLoading\";b:0;s:10:\"\0*\0perPage\";i:15;s:6:\"exists\";b:1;s:18:\"wasRecentlyCreated\";b:0;s:28:\"\0*\0escapeWhenCastingToString\";b:0;s:13:\"\0*\0attributes\";a:10:{s:2:\"id\";i:5;s:5:\"title\";s:20:\"Eligendi lorem reici\";s:11:\"description\";s:19:\"Consectetur ipsam c\";s:4:\"type\";s:3:\"pdf\";s:9:\"file_path\";s:51:\"materi/pdf/08603278-cb86-42a0-81f4-5c8a1ec17e2d.pdf\";s:11:\"youtube_url\";N;s:10:\"created_by\";i:2;s:10:\"deleted_at\";N;s:10:\"created_at\";s:19:\"2026-06-06 06:35:39\";s:10:\"updated_at\";s:19:\"2026-06-06 06:36:10\";}s:11:\"\0*\0original\";a:10:{s:2:\"id\";i:5;s:5:\"title\";s:20:\"Eligendi lorem reici\";s:11:\"description\";s:19:\"Consectetur ipsam c\";s:4:\"type\";s:3:\"pdf\";s:9:\"file_path\";s:51:\"materi/pdf/08603278-cb86-42a0-81f4-5c8a1ec17e2d.pdf\";s:11:\"youtube_url\";N;s:10:\"created_by\";i:2;s:10:\"deleted_at\";N;s:10:\"created_at\";s:19:\"2026-06-06 06:35:39\";s:10:\"updated_at\";s:19:\"2026-06-06 06:36:10\";}s:10:\"\0*\0changes\";a:0:{}s:11:\"\0*\0previous\";a:0:{}s:8:\"\0*\0casts\";a:1:{s:10:\"deleted_at\";s:8:\"datetime\";}s:17:\"\0*\0classCastCache\";a:0:{}s:21:\"\0*\0attributeCastCache\";a:0:{}s:13:\"\0*\0dateFormat\";N;s:10:\"\0*\0appends\";a:2:{i:0;s:8:\"file_url\";i:1;s:17:\"youtube_embed_url\";}s:19:\"\0*\0dispatchesEvents\";a:0:{}s:14:\"\0*\0observables\";a:0:{}s:12:\"\0*\0relations\";a:1:{s:7:\"creator\";r:52;}s:10:\"\0*\0touches\";a:0:{}s:27:\"\0*\0relationAutoloadCallback\";N;s:26:\"\0*\0relationAutoloadContext\";N;s:10:\"timestamps\";b:1;s:13:\"usesUniqueIds\";b:0;s:9:\"\0*\0hidden\";a:0:{}s:10:\"\0*\0visible\";a:0:{}s:11:\"\0*\0fillable\";a:6:{i:0;s:5:\"title\";i:1;s:11:\"description\";i:2;s:4:\"type\";i:3;s:9:\"file_path\";i:4;s:11:\"youtube_url\";i:5;s:10:\"created_by\";}s:10:\"\0*\0guarded\";a:1:{i:0;s:1:\"*\";}s:16:\"\0*\0forceDeleting\";b:0;}i:3;O:21:\"App\\Models\\FileMateri\":34:{s:13:\"\0*\0connection\";s:5:\"mysql\";s:8:\"\0*\0table\";s:11:\"file_materi\";s:13:\"\0*\0primaryKey\";s:2:\"id\";s:10:\"\0*\0keyType\";s:3:\"int\";s:12:\"incrementing\";b:1;s:7:\"\0*\0with\";a:0:{}s:12:\"\0*\0withCount\";a:0:{}s:19:\"preventsLazyLoading\";b:0;s:10:\"\0*\0perPage\";i:15;s:6:\"exists\";b:1;s:18:\"wasRecentlyCreated\";b:0;s:28:\"\0*\0escapeWhenCastingToString\";b:0;s:13:\"\0*\0attributes\";a:10:{s:2:\"id\";i:4;s:5:\"title\";s:31:\"Pendidikan Agama Islam - Tauhid\";s:11:\"description\";s:18:\"Yuk belajar Tauhid\";s:4:\"type\";s:5:\"image\";s:9:\"file_path\";s:54:\"materi/images/b5b8d6e0-f04f-40d5-92f1-8dd7e34ed6c4.jpg\";s:11:\"youtube_url\";N;s:10:\"created_by\";i:2;s:10:\"deleted_at\";N;s:10:\"created_at\";s:19:\"2026-06-06 06:13:16\";s:10:\"updated_at\";s:19:\"2026-06-06 06:13:16\";}s:11:\"\0*\0original\";a:10:{s:2:\"id\";i:4;s:5:\"title\";s:31:\"Pendidikan Agama Islam - Tauhid\";s:11:\"description\";s:18:\"Yuk belajar Tauhid\";s:4:\"type\";s:5:\"image\";s:9:\"file_path\";s:54:\"materi/images/b5b8d6e0-f04f-40d5-92f1-8dd7e34ed6c4.jpg\";s:11:\"youtube_url\";N;s:10:\"created_by\";i:2;s:10:\"deleted_at\";N;s:10:\"created_at\";s:19:\"2026-06-06 06:13:16\";s:10:\"updated_at\";s:19:\"2026-06-06 06:13:16\";}s:10:\"\0*\0changes\";a:0:{}s:11:\"\0*\0previous\";a:0:{}s:8:\"\0*\0casts\";a:1:{s:10:\"deleted_at\";s:8:\"datetime\";}s:17:\"\0*\0classCastCache\";a:0:{}s:21:\"\0*\0attributeCastCache\";a:0:{}s:13:\"\0*\0dateFormat\";N;s:10:\"\0*\0appends\";a:2:{i:0;s:8:\"file_url\";i:1;s:17:\"youtube_embed_url\";}s:19:\"\0*\0dispatchesEvents\";a:0:{}s:14:\"\0*\0observables\";a:0:{}s:12:\"\0*\0relations\";a:1:{s:7:\"creator\";r:52;}s:10:\"\0*\0touches\";a:0:{}s:27:\"\0*\0relationAutoloadCallback\";N;s:26:\"\0*\0relationAutoloadContext\";N;s:10:\"timestamps\";b:1;s:13:\"usesUniqueIds\";b:0;s:9:\"\0*\0hidden\";a:0:{}s:10:\"\0*\0visible\";a:0:{}s:11:\"\0*\0fillable\";a:6:{i:0;s:5:\"title\";i:1;s:11:\"description\";i:2;s:4:\"type\";i:3;s:9:\"file_path\";i:4;s:11:\"youtube_url\";i:5;s:10:\"created_by\";}s:10:\"\0*\0guarded\";a:1:{i:0;s:1:\"*\";}s:16:\"\0*\0forceDeleting\";b:0;}i:4;O:21:\"App\\Models\\FileMateri\":34:{s:13:\"\0*\0connection\";s:5:\"mysql\";s:8:\"\0*\0table\";s:11:\"file_materi\";s:13:\"\0*\0primaryKey\";s:2:\"id\";s:10:\"\0*\0keyType\";s:3:\"int\";s:12:\"incrementing\";b:1;s:7:\"\0*\0with\";a:0:{}s:12:\"\0*\0withCount\";a:0:{}s:19:\"preventsLazyLoading\";b:0;s:10:\"\0*\0perPage\";i:15;s:6:\"exists\";b:1;s:18:\"wasRecentlyCreated\";b:0;s:28:\"\0*\0escapeWhenCastingToString\";b:0;s:13:\"\0*\0attributes\";a:10:{s:2:\"id\";i:3;s:5:\"title\";s:20:\"hafalan Quran bareng\";s:11:\"description\";s:14:\"Yuk ikuti kami\";s:4:\"type\";s:7:\"youtube\";s:9:\"file_path\";N;s:11:\"youtube_url\";s:71:\"https://www.youtube.com/watch?v=xwg9Lf5ruUE&list=RDa3okPqC0Egc&index=10\";s:10:\"created_by\";i:2;s:10:\"deleted_at\";N;s:10:\"created_at\";s:19:\"2026-06-06 05:59:05\";s:10:\"updated_at\";s:19:\"2026-06-06 05:59:05\";}s:11:\"\0*\0original\";a:10:{s:2:\"id\";i:3;s:5:\"title\";s:20:\"hafalan Quran bareng\";s:11:\"description\";s:14:\"Yuk ikuti kami\";s:4:\"type\";s:7:\"youtube\";s:9:\"file_path\";N;s:11:\"youtube_url\";s:71:\"https://www.youtube.com/watch?v=xwg9Lf5ruUE&list=RDa3okPqC0Egc&index=10\";s:10:\"created_by\";i:2;s:10:\"deleted_at\";N;s:10:\"created_at\";s:19:\"2026-06-06 05:59:05\";s:10:\"updated_at\";s:19:\"2026-06-06 05:59:05\";}s:10:\"\0*\0changes\";a:0:{}s:11:\"\0*\0previous\";a:0:{}s:8:\"\0*\0casts\";a:1:{s:10:\"deleted_at\";s:8:\"datetime\";}s:17:\"\0*\0classCastCache\";a:0:{}s:21:\"\0*\0attributeCastCache\";a:0:{}s:13:\"\0*\0dateFormat\";N;s:10:\"\0*\0appends\";a:2:{i:0;s:8:\"file_url\";i:1;s:17:\"youtube_embed_url\";}s:19:\"\0*\0dispatchesEvents\";a:0:{}s:14:\"\0*\0observables\";a:0:{}s:12:\"\0*\0relations\";a:1:{s:7:\"creator\";r:52;}s:10:\"\0*\0touches\";a:0:{}s:27:\"\0*\0relationAutoloadCallback\";N;s:26:\"\0*\0relationAutoloadContext\";N;s:10:\"timestamps\";b:1;s:13:\"usesUniqueIds\";b:0;s:9:\"\0*\0hidden\";a:0:{}s:10:\"\0*\0visible\";a:0:{}s:11:\"\0*\0fillable\";a:6:{i:0;s:5:\"title\";i:1;s:11:\"description\";i:2;s:4:\"type\";i:3;s:9:\"file_path\";i:4;s:11:\"youtube_url\";i:5;s:10:\"created_by\";}s:10:\"\0*\0guarded\";a:1:{i:0;s:1:\"*\";}s:16:\"\0*\0forceDeleting\";b:0;}i:5;O:21:\"App\\Models\\FileMateri\":34:{s:13:\"\0*\0connection\";s:5:\"mysql\";s:8:\"\0*\0table\";s:11:\"file_materi\";s:13:\"\0*\0primaryKey\";s:2:\"id\";s:10:\"\0*\0keyType\";s:3:\"int\";s:12:\"incrementing\";b:1;s:7:\"\0*\0with\";a:0:{}s:12:\"\0*\0withCount\";a:0:{}s:19:\"preventsLazyLoading\";b:0;s:10:\"\0*\0perPage\";i:15;s:6:\"exists\";b:1;s:18:\"wasRecentlyCreated\";b:0;s:28:\"\0*\0escapeWhenCastingToString\";b:0;s:13:\"\0*\0attributes\";a:10:{s:2:\"id\";i:1;s:5:\"title\";s:34:\"Soal Matematika 1 - Aljabar Linear\";s:11:\"description\";s:20:\"belajar Aljabar Yukk\";s:4:\"type\";s:3:\"pdf\";s:9:\"file_path\";s:51:\"materi/pdf/f1963c72-e086-460b-a7e0-751495cbd8a3.pdf\";s:11:\"youtube_url\";N;s:10:\"created_by\";i:2;s:10:\"deleted_at\";N;s:10:\"created_at\";s:19:\"2026-06-06 05:17:48\";s:10:\"updated_at\";s:19:\"2026-06-06 05:17:48\";}s:11:\"\0*\0original\";a:10:{s:2:\"id\";i:1;s:5:\"title\";s:34:\"Soal Matematika 1 - Aljabar Linear\";s:11:\"description\";s:20:\"belajar Aljabar Yukk\";s:4:\"type\";s:3:\"pdf\";s:9:\"file_path\";s:51:\"materi/pdf/f1963c72-e086-460b-a7e0-751495cbd8a3.pdf\";s:11:\"youtube_url\";N;s:10:\"created_by\";i:2;s:10:\"deleted_at\";N;s:10:\"created_at\";s:19:\"2026-06-06 05:17:48\";s:10:\"updated_at\";s:19:\"2026-06-06 05:17:48\";}s:10:\"\0*\0changes\";a:0:{}s:11:\"\0*\0previous\";a:0:{}s:8:\"\0*\0casts\";a:1:{s:10:\"deleted_at\";s:8:\"datetime\";}s:17:\"\0*\0classCastCache\";a:0:{}s:21:\"\0*\0attributeCastCache\";a:0:{}s:13:\"\0*\0dateFormat\";N;s:10:\"\0*\0appends\";a:2:{i:0;s:8:\"file_url\";i:1;s:17:\"youtube_embed_url\";}s:19:\"\0*\0dispatchesEvents\";a:0:{}s:14:\"\0*\0observables\";a:0:{}s:12:\"\0*\0relations\";a:1:{s:7:\"creator\";r:52;}s:10:\"\0*\0touches\";a:0:{}s:27:\"\0*\0relationAutoloadCallback\";N;s:26:\"\0*\0relationAutoloadContext\";N;s:10:\"timestamps\";b:1;s:13:\"usesUniqueIds\";b:0;s:9:\"\0*\0hidden\";a:0:{}s:10:\"\0*\0visible\";a:0:{}s:11:\"\0*\0fillable\";a:6:{i:0;s:5:\"title\";i:1;s:11:\"description\";i:2;s:4:\"type\";i:3;s:9:\"file_path\";i:4;s:11:\"youtube_url\";i:5;s:10:\"created_by\";}s:10:\"\0*\0guarded\";a:1:{i:0;s:1:\"*\";}s:16:\"\0*\0forceDeleting\";b:0;}}s:28:\"\0*\0escapeWhenCastingToString\";b:0;}s:10:\"\0*\0perPage\";i:10;s:14:\"\0*\0currentPage\";i:1;s:7:\"\0*\0path\";s:34:\"http://localhost:8000/admin/materi\";s:8:\"\0*\0query\";a:0:{}s:11:\"\0*\0fragment\";N;s:11:\"\0*\0pageName\";s:4:\"page\";s:28:\"\0*\0escapeWhenCastingToString\";b:0;s:10:\"onEachSide\";i:3;s:10:\"\0*\0options\";a:2:{s:4:\"path\";s:34:\"http://localhost:8000/admin/materi\";s:8:\"pageName\";s:4:\"page\";}s:8:\"\0*\0total\";i:6;s:11:\"\0*\0lastPage\";i:1;}', 1780732628),
('laravel-cache-materi_list_keys', 'a:3:{i:0;s:50:\"materi_list_admin_d751713988987e9331980363e24189ce\";i:1;s:50:\"materi_list_siswa_d751713988987e9331980363e24189ce\";i:2;s:50:\"materi_list_siswa_5b51e699a225639c11f615dacf179896\";}', 1780735708),
('laravel-cache-materi_list_siswa_5b51e699a225639c11f615dacf179896', 'O:42:\"Illuminate\\Pagination\\LengthAwarePaginator\":12:{s:8:\"\0*\0items\";O:39:\"Illuminate\\Database\\Eloquent\\Collection\":2:{s:8:\"\0*\0items\";a:1:{i:0;a:8:{s:2:\"id\";i:3;s:5:\"title\";s:20:\"hafalan Quran bareng\";s:11:\"description\";s:14:\"Yuk ikuti kami\";s:4:\"type\";s:7:\"youtube\";s:8:\"file_url\";N;s:11:\"youtube_url\";s:71:\"https://www.youtube.com/watch?v=xwg9Lf5ruUE&list=RDa3okPqC0Egc&index=10\";s:10:\"created_at\";s:11:\"06 Jun 2026\";s:10:\"created_by\";a:2:{s:2:\"id\";i:2;s:4:\"name\";s:5:\"Admin\";}}}s:28:\"\0*\0escapeWhenCastingToString\";b:0;}s:10:\"\0*\0perPage\";i:10;s:14:\"\0*\0currentPage\";i:1;s:7:\"\0*\0path\";s:34:\"http://localhost:8000/siswa/materi\";s:8:\"\0*\0query\";a:2:{s:6:\"search\";N;s:4:\"type\";s:7:\"youtube\";}s:11:\"\0*\0fragment\";N;s:11:\"\0*\0pageName\";s:4:\"page\";s:28:\"\0*\0escapeWhenCastingToString\";b:0;s:10:\"onEachSide\";i:3;s:10:\"\0*\0options\";a:2:{s:4:\"path\";s:34:\"http://localhost:8000/siswa/materi\";s:8:\"pageName\";s:4:\"page\";}s:8:\"\0*\0total\";i:1;s:11:\"\0*\0lastPage\";i:1;}', 1780732168),
('laravel-cache-materi_list_siswa_d751713988987e9331980363e24189ce', 'O:42:\"Illuminate\\Pagination\\LengthAwarePaginator\":12:{s:8:\"\0*\0items\";O:39:\"Illuminate\\Database\\Eloquent\\Collection\":2:{s:8:\"\0*\0items\";a:6:{i:0;a:8:{s:2:\"id\";i:7;s:5:\"title\";s:19:\"Magni unde voluptas\";s:11:\"description\";s:20:\"Officia lorem non sa\";s:4:\"type\";s:3:\"pdf\";s:8:\"file_url\";s:81:\"http://localhost:8000/storage/materi/pdf/fc408d5a-e30a-4f5b-8464-922ca064dbf0.pdf\";s:11:\"youtube_url\";N;s:10:\"created_at\";s:11:\"06 Jun 2026\";s:10:\"created_by\";a:2:{s:2:\"id\";i:2;s:4:\"name\";s:5:\"Admin\";}}i:1;a:8:{s:2:\"id\";i:6;s:5:\"title\";s:19:\"Cumque nostrud quam\";s:11:\"description\";s:20:\"Obcaecati in laborio\";s:4:\"type\";s:5:\"image\";s:8:\"file_url\";s:84:\"http://localhost:8000/storage/materi/images/3c9f19ae-c778-4ba1-bf33-7252eed18c4a.png\";s:11:\"youtube_url\";N;s:10:\"created_at\";s:11:\"06 Jun 2026\";s:10:\"created_by\";a:2:{s:2:\"id\";i:2;s:4:\"name\";s:5:\"Admin\";}}i:2;a:8:{s:2:\"id\";i:5;s:5:\"title\";s:20:\"Eligendi lorem reici\";s:11:\"description\";s:19:\"Consectetur ipsam c\";s:4:\"type\";s:3:\"pdf\";s:8:\"file_url\";s:81:\"http://localhost:8000/storage/materi/pdf/08603278-cb86-42a0-81f4-5c8a1ec17e2d.pdf\";s:11:\"youtube_url\";N;s:10:\"created_at\";s:11:\"06 Jun 2026\";s:10:\"created_by\";a:2:{s:2:\"id\";i:2;s:4:\"name\";s:5:\"Admin\";}}i:3;a:8:{s:2:\"id\";i:4;s:5:\"title\";s:31:\"Pendidikan Agama Islam - Tauhid\";s:11:\"description\";s:18:\"Yuk belajar Tauhid\";s:4:\"type\";s:5:\"image\";s:8:\"file_url\";s:84:\"http://localhost:8000/storage/materi/images/b5b8d6e0-f04f-40d5-92f1-8dd7e34ed6c4.jpg\";s:11:\"youtube_url\";N;s:10:\"created_at\";s:11:\"06 Jun 2026\";s:10:\"created_by\";a:2:{s:2:\"id\";i:2;s:4:\"name\";s:5:\"Admin\";}}i:4;a:8:{s:2:\"id\";i:3;s:5:\"title\";s:20:\"hafalan Quran bareng\";s:11:\"description\";s:14:\"Yuk ikuti kami\";s:4:\"type\";s:7:\"youtube\";s:8:\"file_url\";N;s:11:\"youtube_url\";s:71:\"https://www.youtube.com/watch?v=xwg9Lf5ruUE&list=RDa3okPqC0Egc&index=10\";s:10:\"created_at\";s:11:\"06 Jun 2026\";s:10:\"created_by\";a:2:{s:2:\"id\";i:2;s:4:\"name\";s:5:\"Admin\";}}i:5;a:8:{s:2:\"id\";i:1;s:5:\"title\";s:34:\"Soal Matematika 1 - Aljabar Linear\";s:11:\"description\";s:20:\"belajar Aljabar Yukk\";s:4:\"type\";s:3:\"pdf\";s:8:\"file_url\";s:81:\"http://localhost:8000/storage/materi/pdf/f1963c72-e086-460b-a7e0-751495cbd8a3.pdf\";s:11:\"youtube_url\";N;s:10:\"created_at\";s:11:\"06 Jun 2026\";s:10:\"created_by\";a:2:{s:2:\"id\";i:2;s:4:\"name\";s:5:\"Admin\";}}}s:28:\"\0*\0escapeWhenCastingToString\";b:0;}s:10:\"\0*\0perPage\";i:10;s:14:\"\0*\0currentPage\";i:1;s:7:\"\0*\0path\";s:34:\"http://localhost:8000/siswa/materi\";s:8:\"\0*\0query\";a:0:{}s:11:\"\0*\0fragment\";N;s:11:\"\0*\0pageName\";s:4:\"page\";s:28:\"\0*\0escapeWhenCastingToString\";b:0;s:10:\"onEachSide\";i:3;s:10:\"\0*\0options\";a:2:{s:4:\"path\";s:34:\"http://localhost:8000/siswa/materi\";s:8:\"pageName\";s:4:\"page\";}s:8:\"\0*\0total\";i:6;s:11:\"\0*\0lastPage\";i:1;}', 1780732597),
('laravel-cache-materi_siswa_1', 'a:9:{s:2:\"id\";i:1;s:5:\"title\";s:34:\"Soal Matematika 1 - Aljabar Linear\";s:11:\"description\";s:20:\"belajar Aljabar Yukk\";s:4:\"type\";s:3:\"pdf\";s:8:\"file_url\";s:81:\"http://localhost:8000/storage/materi/pdf/f1963c72-e086-460b-a7e0-751495cbd8a3.pdf\";s:11:\"youtube_url\";N;s:17:\"youtube_embed_url\";N;s:10:\"created_at\";s:11:\"06 Jun 2026\";s:10:\"created_by\";a:2:{s:2:\"id\";i:2;s:4:\"name\";s:5:\"Admin\";}}', 1780732221),
('laravel-cache-materi_siswa_3', 'a:9:{s:2:\"id\";i:3;s:5:\"title\";s:20:\"hafalan Quran bareng\";s:11:\"description\";s:14:\"Yuk ikuti kami\";s:4:\"type\";s:7:\"youtube\";s:8:\"file_url\";N;s:11:\"youtube_url\";s:71:\"https://www.youtube.com/watch?v=xwg9Lf5ruUE&list=RDa3okPqC0Egc&index=10\";s:17:\"youtube_embed_url\";s:41:\"https://www.youtube.com/embed/xwg9Lf5ruUE\";s:10:\"created_at\";s:11:\"06 Jun 2026\";s:10:\"created_by\";a:2:{s:2:\"id\";i:2;s:4:\"name\";s:5:\"Admin\";}}', 1780732230),
('laravel-cache-materi_siswa_4', 'a:9:{s:2:\"id\";i:4;s:5:\"title\";s:31:\"Pendidikan Agama Islam - Tauhid\";s:11:\"description\";s:18:\"Yuk belajar Tauhid\";s:4:\"type\";s:5:\"image\";s:8:\"file_url\";s:84:\"http://localhost:8000/storage/materi/images/b5b8d6e0-f04f-40d5-92f1-8dd7e34ed6c4.jpg\";s:11:\"youtube_url\";N;s:17:\"youtube_embed_url\";N;s:10:\"created_at\";s:11:\"06 Jun 2026\";s:10:\"created_by\";a:2:{s:2:\"id\";i:2;s:4:\"name\";s:5:\"Admin\";}}', 1780731253),
('laravel-cache-materi_siswa_5', 'a:9:{s:2:\"id\";i:5;s:5:\"title\";s:20:\"Eligendi lorem reici\";s:11:\"description\";s:19:\"Consectetur ipsam c\";s:4:\"type\";s:3:\"pdf\";s:8:\"file_url\";s:81:\"http://localhost:8000/storage/materi/pdf/08603278-cb86-42a0-81f4-5c8a1ec17e2d.pdf\";s:11:\"youtube_url\";N;s:17:\"youtube_embed_url\";N;s:10:\"created_at\";s:11:\"06 Jun 2026\";s:10:\"created_by\";a:2:{s:2:\"id\";i:2;s:4:\"name\";s:5:\"Admin\";}}', 1780732202),
('laravel-cache-materi_siswa_6', 'a:9:{s:2:\"id\";i:6;s:5:\"title\";s:19:\"Cumque nostrud quam\";s:11:\"description\";s:20:\"Obcaecati in laborio\";s:4:\"type\";s:5:\"image\";s:8:\"file_url\";s:84:\"http://localhost:8000/storage/materi/images/3c9f19ae-c778-4ba1-bf33-7252eed18c4a.png\";s:11:\"youtube_url\";N;s:17:\"youtube_embed_url\";N;s:10:\"created_at\";s:11:\"06 Jun 2026\";s:10:\"created_by\";a:2:{s:2:\"id\";i:2;s:4:\"name\";s:5:\"Admin\";}}', 1780732185),
('laravel-cache-materi_siswa_7', 'O:21:\"App\\Models\\FileMateri\":34:{s:13:\"\0*\0connection\";s:5:\"mysql\";s:8:\"\0*\0table\";s:11:\"file_materi\";s:13:\"\0*\0primaryKey\";s:2:\"id\";s:10:\"\0*\0keyType\";s:3:\"int\";s:12:\"incrementing\";b:1;s:7:\"\0*\0with\";a:0:{}s:12:\"\0*\0withCount\";a:0:{}s:19:\"preventsLazyLoading\";b:0;s:10:\"\0*\0perPage\";i:15;s:6:\"exists\";b:1;s:18:\"wasRecentlyCreated\";b:0;s:28:\"\0*\0escapeWhenCastingToString\";b:0;s:13:\"\0*\0attributes\";a:10:{s:2:\"id\";i:7;s:5:\"title\";s:19:\"Magni unde voluptas\";s:11:\"description\";s:20:\"Officia lorem non sa\";s:4:\"type\";s:3:\"pdf\";s:9:\"file_path\";s:51:\"materi/pdf/fc408d5a-e30a-4f5b-8464-922ca064dbf0.pdf\";s:11:\"youtube_url\";N;s:10:\"created_by\";i:2;s:10:\"deleted_at\";N;s:10:\"created_at\";s:19:\"2026-06-06 06:41:42\";s:10:\"updated_at\";s:19:\"2026-06-06 06:41:42\";}s:11:\"\0*\0original\";a:10:{s:2:\"id\";i:7;s:5:\"title\";s:19:\"Magni unde voluptas\";s:11:\"description\";s:20:\"Officia lorem non sa\";s:4:\"type\";s:3:\"pdf\";s:9:\"file_path\";s:51:\"materi/pdf/fc408d5a-e30a-4f5b-8464-922ca064dbf0.pdf\";s:11:\"youtube_url\";N;s:10:\"created_by\";i:2;s:10:\"deleted_at\";N;s:10:\"created_at\";s:19:\"2026-06-06 06:41:42\";s:10:\"updated_at\";s:19:\"2026-06-06 06:41:42\";}s:10:\"\0*\0changes\";a:0:{}s:11:\"\0*\0previous\";a:0:{}s:8:\"\0*\0casts\";a:1:{s:10:\"deleted_at\";s:8:\"datetime\";}s:17:\"\0*\0classCastCache\";a:0:{}s:21:\"\0*\0attributeCastCache\";a:0:{}s:13:\"\0*\0dateFormat\";N;s:10:\"\0*\0appends\";a:2:{i:0;s:8:\"file_url\";i:1;s:17:\"youtube_embed_url\";}s:19:\"\0*\0dispatchesEvents\";a:0:{}s:14:\"\0*\0observables\";a:0:{}s:12:\"\0*\0relations\";a:1:{s:7:\"creator\";O:15:\"App\\Models\\User\":36:{s:13:\"\0*\0connection\";s:5:\"mysql\";s:8:\"\0*\0table\";s:5:\"users\";s:13:\"\0*\0primaryKey\";s:2:\"id\";s:10:\"\0*\0keyType\";s:3:\"int\";s:12:\"incrementing\";b:1;s:7:\"\0*\0with\";a:0:{}s:12:\"\0*\0withCount\";a:0:{}s:19:\"preventsLazyLoading\";b:0;s:10:\"\0*\0perPage\";i:15;s:6:\"exists\";b:1;s:18:\"wasRecentlyCreated\";b:0;s:28:\"\0*\0escapeWhenCastingToString\";b:0;s:13:\"\0*\0attributes\";a:9:{s:2:\"id\";i:2;s:4:\"name\";s:5:\"Admin\";s:5:\"email\";s:17:\"admin@example.com\";s:4:\"role\";s:5:\"admin\";s:17:\"email_verified_at\";N;s:8:\"password\";s:60:\"$2y$12$SdJpRNHMtK.URtnKbUwekukz/OH0se6CnNWoiko3gfd4LjHEy.Y2K\";s:14:\"remember_token\";N;s:10:\"created_at\";s:19:\"2026-06-05 16:37:24\";s:10:\"updated_at\";s:19:\"2026-06-05 16:37:24\";}s:11:\"\0*\0original\";a:9:{s:2:\"id\";i:2;s:4:\"name\";s:5:\"Admin\";s:5:\"email\";s:17:\"admin@example.com\";s:4:\"role\";s:5:\"admin\";s:17:\"email_verified_at\";N;s:8:\"password\";s:60:\"$2y$12$SdJpRNHMtK.URtnKbUwekukz/OH0se6CnNWoiko3gfd4LjHEy.Y2K\";s:14:\"remember_token\";N;s:10:\"created_at\";s:19:\"2026-06-05 16:37:24\";s:10:\"updated_at\";s:19:\"2026-06-05 16:37:24\";}s:10:\"\0*\0changes\";a:0:{}s:11:\"\0*\0previous\";a:0:{}s:8:\"\0*\0casts\";a:2:{s:17:\"email_verified_at\";s:8:\"datetime\";s:8:\"password\";s:6:\"hashed\";}s:17:\"\0*\0classCastCache\";a:0:{}s:21:\"\0*\0attributeCastCache\";a:0:{}s:13:\"\0*\0dateFormat\";N;s:10:\"\0*\0appends\";a:0:{}s:19:\"\0*\0dispatchesEvents\";a:0:{}s:14:\"\0*\0observables\";a:0:{}s:12:\"\0*\0relations\";a:0:{}s:10:\"\0*\0touches\";a:0:{}s:27:\"\0*\0relationAutoloadCallback\";N;s:26:\"\0*\0relationAutoloadContext\";N;s:10:\"timestamps\";b:1;s:13:\"usesUniqueIds\";b:0;s:9:\"\0*\0hidden\";a:2:{i:0;s:8:\"password\";i:1;s:14:\"remember_token\";}s:10:\"\0*\0visible\";a:0:{}s:11:\"\0*\0fillable\";a:4:{i:0;s:4:\"name\";i:1;s:5:\"email\";i:2;s:8:\"password\";i:3;s:4:\"role\";}s:10:\"\0*\0guarded\";a:1:{i:0;s:1:\"*\";}s:19:\"\0*\0authPasswordName\";s:8:\"password\";s:20:\"\0*\0rememberTokenName\";s:14:\"remember_token\";s:14:\"\0*\0accessToken\";N;}}s:10:\"\0*\0touches\";a:0:{}s:27:\"\0*\0relationAutoloadCallback\";N;s:26:\"\0*\0relationAutoloadContext\";N;s:10:\"timestamps\";b:1;s:13:\"usesUniqueIds\";b:0;s:9:\"\0*\0hidden\";a:0:{}s:10:\"\0*\0visible\";a:0:{}s:11:\"\0*\0fillable\";a:6:{i:0;s:5:\"title\";i:1;s:11:\"description\";i:2;s:4:\"type\";i:3;s:9:\"file_path\";i:4;s:11:\"youtube_url\";i:5;s:10:\"created_by\";}s:10:\"\0*\0guarded\";a:1:{i:0;s:1:\"*\";}s:16:\"\0*\0forceDeleting\";b:0;}', 1780731040);

-- --------------------------------------------------------

--
-- Table structure for table `cache_locks`
--

CREATE TABLE `cache_locks` (
  `key` varchar(255) NOT NULL,
  `owner` varchar(255) NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `file_materi`
--

CREATE TABLE `file_materi` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `type` enum('pdf','image','youtube') NOT NULL,
  `file_path` varchar(255) DEFAULT NULL,
  `youtube_url` varchar(255) DEFAULT NULL,
  `created_by` bigint(20) UNSIGNED NOT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `file_materi`
--

INSERT INTO `file_materi` (`id`, `title`, `description`, `type`, `file_path`, `youtube_url`, `created_by`, `deleted_at`, `created_at`, `updated_at`) VALUES
(1, 'Soal Matematika 1 - Aljabar Linear', 'belajar Aljabar Yukk', 'pdf', 'materi/pdf/f1963c72-e086-460b-a7e0-751495cbd8a3.pdf', NULL, 2, NULL, '2026-06-05 22:17:48', '2026-06-05 22:17:48'),
(2, 'Pendidikan Agama Islam - Tauhid', 'belajar tauhid Yukk', 'image', 'materi/images/f68550b8-be25-458e-a988-6e93851b3306.jpg', NULL, 2, '2026-06-05 23:12:36', '2026-06-05 22:19:04', '2026-06-05 23:12:36'),
(3, 'hafalan Quran bareng', 'Yuk ikuti kami', 'youtube', NULL, 'https://www.youtube.com/watch?v=xwg9Lf5ruUE&list=RDa3okPqC0Egc&index=10', 2, NULL, '2026-06-05 22:59:05', '2026-06-05 22:59:05'),
(4, 'Pendidikan Agama Islam - Tauhid', 'Yuk belajar Tauhid', 'image', 'materi/images/b5b8d6e0-f04f-40d5-92f1-8dd7e34ed6c4.jpg', NULL, 2, NULL, '2026-06-05 23:13:16', '2026-06-05 23:13:16'),
(5, 'Eligendi lorem reici', 'Consectetur ipsam c', 'pdf', 'materi/pdf/08603278-cb86-42a0-81f4-5c8a1ec17e2d.pdf', NULL, 2, NULL, '2026-06-05 23:35:39', '2026-06-05 23:36:10'),
(6, 'Cumque nostrud quam', 'Obcaecati in laborio', 'image', 'materi/images/3c9f19ae-c778-4ba1-bf33-7252eed18c4a.png', NULL, 2, NULL, '2026-06-05 23:41:00', '2026-06-05 23:41:00'),
(7, 'Magni unde voluptas', 'Officia lorem non sa', 'pdf', 'materi/pdf/fc408d5a-e30a-4f5b-8464-922ca064dbf0.pdf', NULL, 2, NULL, '2026-06-05 23:41:42', '2026-06-05 23:41:42'),
(8, 'Culpa ex natus numq - edited', 'Nostrum aliquam mole - edited', 'pdf', 'materi/pdf/e9f34103-ef1f-4179-b35f-6f39278026fb.pdf', NULL, 2, '2026-06-06 00:33:27', '2026-06-05 23:45:12', '2026-06-06 00:33:27'),
(9, 'In cupidatat irure d', 'Modi ullam et facili', 'youtube', NULL, 'https://www.youtube.com/watch?v=WEXiqyjg7Qs&list=RDGMEMCMFH2exzjBeE_zAHHJOdxgVM-FPx22yJDb0&index=21', 2, '2026-06-05 23:45:56', '2026-06-05 23:45:49', '2026-06-05 23:45:56');

-- --------------------------------------------------------

--
-- Table structure for table `jobs`
--

CREATE TABLE `jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `queue` varchar(255) NOT NULL,
  `payload` longtext NOT NULL,
  `attempts` tinyint(3) UNSIGNED NOT NULL,
  `reserved_at` int(10) UNSIGNED DEFAULT NULL,
  `available_at` int(10) UNSIGNED NOT NULL,
  `created_at` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `job_batches`
--

CREATE TABLE `job_batches` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `total_jobs` int(11) NOT NULL,
  `pending_jobs` int(11) NOT NULL,
  `failed_jobs` int(11) NOT NULL,
  `failed_job_ids` longtext NOT NULL,
  `options` mediumtext DEFAULT NULL,
  `cancelled_at` int(11) DEFAULT NULL,
  `created_at` int(11) NOT NULL,
  `finished_at` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '0001_01_01_000000_create_users_table', 1),
(2, '0001_01_01_000001_create_cache_table', 1),
(3, '0001_01_01_000002_create_jobs_table', 1),
(4, '2026_06_05_145529_add_role_to_users_table', 1),
(5, '2026_06_05_145540_create_file_materi_table', 1),
(6, '2026_06_05_154346_create_personal_access_tokens_table', 2);

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `password_reset_tokens`
--

INSERT INTO `password_reset_tokens` (`email`, `token`, `created_at`) VALUES
('admin@example.com', '$2y$12$uuULEJQX.sM50YPfmtKGregN3xcre0c1Ub.eUDoMCyaPfd9vXyYOu', '2026-06-05 22:07:37');

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` text NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `expires_at`, `created_at`, `updated_at`) VALUES
(4, 'App\\Models\\User', 2, 'auth_token', 'c80f27d6a7042006a23487cacee6cb3c2440a18e497a9f3540e30cd7d4dd244b', '[\"*\"]', '2026-06-05 21:39:06', NULL, '2026-06-05 21:37:55', '2026-06-05 21:39:06');

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(255) NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) DEFAULT NULL,
  `user_agent` text DEFAULT NULL,
  `payload` longtext NOT NULL,
  `last_activity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`id`, `user_id`, `ip_address`, `user_agent`, `payload`, `last_activity`) VALUES
('3ncDUQgMTemwDdHsLdartFknJfGNAedoMxoZvw6K', 4, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.0.0 Safari/537.36 Edg/149.0.0.0', 'YTo0OntzOjY6Il90b2tlbiI7czo0MDoiendLd3FmTk5ONUlWS2k5ZDZFWUZkVGJ1eXNGUzkzdldjNllBM1BxRSI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319czo5OiJfcHJldmlvdXMiO2E6Mjp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7czo1OiJyb3V0ZSI7Tjt9czo1MDoibG9naW5fd2ViXzU5YmEzNmFkZGMyYjJmOTQwMTU4MGYwMTRjN2Y1OGVhNGUzMDk4OWQiO2k6NDt9', 1780732008),
('JSLfotYp7HwojQxkQVzFNgJkgST6RpIwOGBFLiBG', 2, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/148.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiNUE1Vnk2NklJWDd6U3dVaWU0Q2t6TVQwZm94MGsza1lHalRCWDhlTSI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319czo1MDoibG9naW5fd2ViXzU5YmEzNmFkZGMyYjJmOTQwMTU4MGYwMTRjN2Y1OGVhNGUzMDk4OWQiO2k6Mjt9', 1780732584);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `role` enum('admin','siswa') NOT NULL DEFAULT 'siswa',
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `role`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Test User', 'test@example.com', 'siswa', '2026-06-05 09:22:25', '$2y$12$UkzwHw6XXGlzVCkyBSQXwezanNdp0r3qzaTxkO/o7f7XTW3AEZL2K', 'ta289Oa2FY', '2026-06-05 09:22:26', '2026-06-05 09:22:26'),
(2, 'Admin', 'admin@example.com', 'admin', NULL, '$2y$12$SdJpRNHMtK.URtnKbUwekukz/OH0se6CnNWoiko3gfd4LjHEy.Y2K', NULL, '2026-06-05 09:37:24', '2026-06-05 09:37:24'),
(3, 'Siswa', 'siswa@example.com', 'siswa', NULL, '$2y$12$nkXnu9jGo2Nfn1L1Q2ikoej4mjwlX75HQhZiUJhTIZeMNQ/CVp6jS', NULL, '2026-06-05 09:37:25', '2026-06-05 09:37:25'),
(4, 'Rulif Fadria Nirwansyah', 'ruliffax@gmail.com', 'siswa', NULL, '$2y$12$sHf0D8lAmmzzfLkw2DsbHO5hBW8DnqtKc/COYzdzrFVt5eJvCJ3eq', NULL, '2026-06-05 22:16:16', '2026-06-05 22:36:05'),
(5, 'test01user', 'testing@gmail.com', 'siswa', NULL, '$2y$12$6z80kSBsY0JIn.QazRCWWendBGxpKb8IIK5bMpOZ2sbIJSzbBGEtq', NULL, '2026-06-05 23:58:08', '2026-06-05 23:58:08');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cache`
--
ALTER TABLE `cache`
  ADD PRIMARY KEY (`key`),
  ADD KEY `cache_expiration_index` (`expiration`);

--
-- Indexes for table `cache_locks`
--
ALTER TABLE `cache_locks`
  ADD PRIMARY KEY (`key`),
  ADD KEY `cache_locks_expiration_index` (`expiration`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `file_materi`
--
ALTER TABLE `file_materi`
  ADD PRIMARY KEY (`id`),
  ADD KEY `file_materi_created_by_foreign` (`created_by`);

--
-- Indexes for table `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `jobs_queue_index` (`queue`);

--
-- Indexes for table `job_batches`
--
ALTER TABLE `job_batches`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`),
  ADD KEY `personal_access_tokens_expires_at_index` (`expires_at`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_index` (`user_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `file_materi`
--
ALTER TABLE `file_materi`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `file_materi`
--
ALTER TABLE `file_materi`
  ADD CONSTRAINT `file_materi_created_by_foreign` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

# 🎂 Happy Birthday Digital Card — Premium Edition

Pilihan terbaik untuk memberikan kejutan ulang tahun yang cantik, romantis, dan interaktif. Proyek ini telah di-upgrade dengan visual premium, efek animasi halus, dan kemudahan kustomisasi.

---

## ✨ Fitur Unggulan

- 🎁 **Premium Gift Box**: Kotak hadiah dengan visual 3D, animasi buka yang fantastis, efek kilauan (sparkles), dan getaran layar (screen shake) saat dibuka.
- ❤️ **Magical Heart Animation**: Animasi hati besar yang terbentuk dari ratusan teks *"I love you"* yang menari-nari.
- 💌 **Interactive Love Letters**: Puluhan kartu pesan yang bisa digeser (swipe di HP atau klik tombol) dengan progress bar di bagian bawah.
- 📅 **Custom Calendar**: Kalender estetik yang menandai hari spesial sang penerima.
- ✨ **Floating Particles**: Efek partikel cahaya yang memberikan kesan romantis dan hidup.
- 📱 **Fully Responsive**: Tampilan sempurna di semua jenis perangkat (iPhone, Android, Tablet, hingga Desktop).

---

## 🚀 Cara Membuka Proyek

Cukup buka file `index.html` menggunakan browser pilihan Anda (Chrome, Edge, Safari, atau Firefox).

> **Penting:** Tidak perlu menginstal aplikasi tambahan apapun. Pastikan Anda memiliki koneksi internet saat pertama kali membuka untuk memuat font dan animasi premium.

---

## ✏️ Panduan Kustomisasi (Sangat Mudah!)

Anda tidak perlu mencari-cari teks di ratusan baris kode. Cukup ubah bagian **CONFIG** di dua file berikut:

### 1. Mengubah Nama & Tanggal Utama
Buka file **`script.js`** dan temukan bagian ini di paling atas:

```javascript
const CONFIG = {
  name: "Nama Lengkap",      // Ganti dengan nama lengkap target
  nickname: "Nama Panggilan", // Ganti dengan nama panggilan (akan muncul di judul)
  date: "January 31",        // Tanggal yang muncul di badge atas
  monthYear: "January 2025",  // Judul bulan yang muncul di atas kalender
  specialDay: 31,            // Angka tanggal yang ingin ditandai (angka saja)
};
```

### 2. Mengubah Nama di Halaman Pesan (Surprise Part)
Buka file **`love.html`** dan temukan bagian ini di dalam tag `<script>` (sekitar baris 517):

```javascript
const CONFIG = {
  name: "Nama Kamu", // Ganti dengan nama si dia agar masuk ke dalam kalimat pesan
};
```

### 3. Mengubah atau Menulis Pesan Sendiri
Di file **`love.html`**, Anda bisa bebas mengubah teks di dalam `const MESSAGES`. Gunakan `<br/>` jika ingin membuat baris baru dalam satu kartu pesan.

---

## 📁 Struktur File

- `index.html` : Halaman utama (Opening, Hadiah, Kalender, & Penutup).
- `love.html` : Halaman kejutan (Animasi Hati & Surat Cinta).
- `style.css` : File pengaturan tampilan, warna, dan animasi.
- `script.js` : File logika utama dan konfigurasi data.
- `README.md` : Panduan penggunaan ini.

---

## 🌐 Cara Membagikan (Online)

Agar bisa dibuka langsung dari HP oleh orang yang Anda sayangi, Anda bisa meng-upload folder ini secara gratis ke:
1. **Netlify Drop** (Tinggal drag & drop folder, langsung dapat link).
2. **GitHub Pages**.
3. **Vercel**.

---

## ❓ FAQ (Pertanyaan Umum)

**Q: Apakah saya bisa mengganti warna temanya?**  
A: Bisa. Anda bisa membuka `style.css` dan mengubah nilai `--pink` di bagian `:root`.

**Q: Animasi hatinya kok belum muncul?**  
A: Tunggu sekitar 8-10 detik setelah masuk ke halaman `love.html`. Hati akan terbentuk secara otomatis setelah hujan jantung selesai.

**Q: Mengapa tidak ada suaranya?**  
A: Fitur musik telah dihapus dalam versi upgrade ini untuk memastikan kompatibilitas penuh di semua browser HP. Jika ingin menambahkan musik, Anda bisa mengintegrasikannya secara manual.

---

## 💬 Butuh Bantuan Lanjutan?

Jika Anda mengalami kesulitan teknis yang tidak dijelaskan di sini, silakan hubungi penjual melalui platform tempat Anda membeli produk ini. Kami siap membantu agar kejutan Anda berjalan lancar!

---

*Dibuat dengan ❤️ untuk momen spesial Anda.*

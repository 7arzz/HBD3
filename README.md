# 🎂 Happy Birthday Digital Card

Ucapan ulang tahun digital yang cantik, romantis, dan interaktif — lengkap dengan animasi hati, hujan ❤️, kartu pesan, dan musik latar.

---

## ✨ Fitur

- 🎁 Kotak hadiah interaktif dengan konfeti
- ❤️ Animasi hati besar dari teks *"I love you"*
- 💌 Kartu pesan yang bisa digeser (swipe/klik)
- 🎵 Musik latar on/off
- 📅 Kalender dengan tanggal ulang tahun yang ditandai
- 📱 Responsif di semua ukuran layar (HP, tablet, laptop)

---

## 🚀 Cara Membuka

Cukup buka file `index.html` di browser (Chrome / Firefox / Safari).

> **Tidak perlu install apapun.** Tidak perlu internet setelah file didownload.

---

## ✏️ Cara Kustomisasi

### 1. Ganti Nama Penerima

Cari teks `[nama]` di kedua file berikut dan ganti dengan nama yang kamu inginkan:

**File: `index.html`**
```html
<!-- Baris 5 -->
<title>Happy Birthday [nama] ✨</title>

<!-- Baris 37 -->
Happy Birthday<br/>[nama] 🌸
```

**File: `love.html`**
```html
<!-- Baris 6 -->
<title>For You, [nama] 💌</title>
```

Juga di dalam pesan kartu (array `MESSAGES` di `love.html`), ada beberapa pesan yang menggunakan `[nama]` — ganti semua dengan nama yang sesuai.

> 💡 **Tip cepat:** Gunakan fitur **Find & Replace** di Notepad / VS Code:
> - Tekan `Ctrl + H`
> - Cari: `[nama]`
> - Ganti dengan: nama penerima (contoh: `Bella`)
> - Klik **Replace All**

---

### 2. Ganti Tanggal Ulang Tahun

**File: `index.html`** — ubah badge tanggal:
```html
<!-- Baris sekitar 33 -->
<span class="badge">🎂 January 31 · Special Day</span>
```
Ganti `January 31` dengan bulan dan tanggal yang sesuai.

**File: `index.html`** — ubah judul kalender:
```html
<div class="calendar-title">January 2025</div>
```

Lalu sesuaikan juga tanggal yang diberi highlight (class `special`):
```html
<span class="special">31 ❤️</span>
```
Ganti angka `31` dengan tanggal ulang tahun yang benar.

> ⚠️ Kalender di-*hardcode* (bukan otomatis), jadi pastikan urutan hari di grid sesuai dengan bulan yang dipilih.

---

### 3. Ganti atau Tambah Pesan Kartu

Buka file `love.html`, cari bagian:

```javascript
const MESSAGES = [
  "Pesan 1...",
  "Pesan 2...",
  // dst.
];
```

- **Edit** pesan yang sudah ada sesuai keinginan
- **Tambah** pesan baru dengan menambahkan baris baru di dalam array
- **Hapus** pesan yang tidak diinginkan
- Gunakan `<br/>` untuk pindah baris di dalam satu kartu

**Contoh:**
```javascript
"Selamat ulang tahun, Bella! 🎂<br/>Semoga selalu bahagia ya 💕",
```

---

### 4. Ganti Pesan di Halaman Utama

**File: `index.html`** — edit teks pembuka:
```html
<p>
  Udah nambah umur aja nihh...<br/>
  Semoga semua doa-doamu terkabul ya 💕
</p>
```

Dan teks penutup:
```html
<p>
  Semoga hidup selalu<br/>
  lembut ke kamu.<br/>...
</p>
```

---

## 📁 Struktur File

```
HBD/
├── index.html   ← Halaman utama (opening, hadiah, kalender, penutup)
├── love.html    ← Halaman animasi hati + kartu pesan
├── style.css    ← Semua tampilan halaman utama
└── script.js    ← Logika halaman utama (navigasi, partikel, musik)
```

---

## 🌐 Cara Share ke Penerima

Kamu bisa share dengan beberapa cara:

| Cara | Keterangan |
|---|---|
| **Kirim folder** | Zip semua file → kirim via WhatsApp / Google Drive |
| **GitHub Pages** | Upload ke GitHub → aktifkan Pages → bagikan link |
| **Netlify / Vercel** | Drag & drop folder → dapat link gratis |

> Jika ingin link yang bisa dibuka langsung dari HP tanpa install, gunakan **GitHub Pages** atau **Netlify** (gratis).

---

## ❓ FAQ

**Q: Apakah bisa dibuka di HP?**  
A: Ya! Sudah responsif untuk semua ukuran layar.

**Q: Apakah butuh internet?**  
A: Butuh internet saat pertama kali dibuka (untuk memuat font & animasi dari CDN). Setelah itu bisa offline.

**Q: Musik tidak keluar?**  
A: Klik tombol 🎵 di pojok kanan atas. Browser memerlukan interaksi pengguna sebelum memainkan audio.

**Q: Animasi hati tidak muncul?**  
A: Tunggu sekitar 10–12 detik, animasi akan muncul secara otomatis.

---

## 💬 Butuh Bantuan?

Hubungi penjual melalui platform tempat kamu membeli produk ini.

---

*Made with ❤️ — Digital Birthday Card*

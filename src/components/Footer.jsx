import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div>
          <a className="footer-brand" href="#beranda">meow<span>pedia</span> 🐾</a>
          <p className="footer-description">Ruang hangat untuk belajar, berbagi, dan merayakan semua hal tentang kucing.</p>
        </div>
        <div>
          <h3>Jelajahi</h3>
          <ul>
            <li><a href="#ras-kucing">Ras kucing</a></li>
            <li><a href="#panduan">Panduan perawatan</a></li>
            <li><a href="#artikel">Artikel terbaru</a></li>
          </ul>
        </div>
        <div>
          <h3>Catatan</h3>
          <p className="footer-description">Konten ini untuk edukasi umum, bukan pengganti konsultasi dokter hewan.</p>
          <p className="footer-copyright">© {new Date().getFullYear()} Meowpedia · Dibuat dengan 🧡</p>
        </div>
      </div>
    </footer>
  );
}

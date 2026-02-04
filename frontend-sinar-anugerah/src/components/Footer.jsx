import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  // Kita tidak perlu lagi fungsi scrollToTop manual di sini 
  // karena sudah ditangani secara global oleh App.jsx

  return (
    <footer className="footer-main">
      <div className="footer-container">
        {/* BARIS ATAS: Logo & Navigasi */}
        <div className="footer-brand-section">
          <div className="footer-logo-box">SAI</div>
          <div className="footer-tagline">
            <h3>SAI</h3>
            <p>MELAYANI DENGAN HATI</p>
          </div>
        </div>

        <div className="footer-menu-section">
          <nav className="footer-nav">
            {/* Navigasi otomatis ke atas berkat useEffect di App.jsx */}
            <Link to="/" className="footer-link">Profil</Link>
            <Link to="/produk" className="footer-link">Produk</Link>
            <Link to="/galeri" className="footer-link">Galeri</Link>
            <Link to="/kontak" className="footer-link">Kontak</Link>
          </nav>
        </div>
      </div>

      {/* BARIS TENGAH: Legalitas & Sertifikat */}
      <div className="footer-legal-section">
        <p className="legal-title-footer">LEGALITAS KAMI:</p>
        <div className="legal-badges-container">
          <img src="/legal1.png" alt="Sertifikasi 1" className="legal-badge-img" />
          <img src="/legal2.png" alt="Sertifikasi 2" className="legal-badge-img" />
          <img src="/legal3.png" alt="Sertifikasi 3" className="legal-badge-img" />
        </div>

        {/* Tambahan Bagian Sertifikat ISO agar sinkron dengan App.jsx */}
        <p className="legal-title-footer" style={{ marginTop: '20px' }}>SERTIFIKAT:</p>
        <p className="iso-text">ISO 9001:2015</p>
        <div className="certificate-container-large">
          <img 
            src="/sertifikat.png" 
            alt="ISO 9001:2015 Certificate" 
            className="certificate-img-large" 
          />
        </div>
      </div>

      {/* BARIS BAWAH: Copyright */}
      <div className="footer-copyright">
        <p>© 2025 PT. Sinar Anugerah Industri — Seluruh hak cipta dilindungi.</p>
      </div>
    </footer>
  );
}

export default Footer;
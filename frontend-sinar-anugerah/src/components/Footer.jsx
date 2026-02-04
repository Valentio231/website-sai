import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
            <Link to="/" className="footer-link" onClick={scrollToTop}>Profil</Link>
            <Link to="/produk" className="footer-link" onClick={scrollToTop}>Produk</Link>
            <Link to="/galeri" className="footer-link" onClick={scrollToTop}>Galeri</Link>
            <Link to="/kontak" className="footer-link" onClick={scrollToTop}>Kontak</Link>
          </nav>
        </div>
      </div>

      {/* BARIS TENGAH: Legalitas (Area yang gambarnya pecah tadi) */}
      <div className="footer-legal-section">
        <p className="legal-title-footer">LEGALITAS KAMI:</p>
        <div className="legal-badges-container">
          <img src="/legal1.png" alt="Sertifikasi 1" className="legal-badge-img" />
          <img src="/legal2.png" alt="Sertifikasi 2" className="legal-badge-img" />
          <img src="/legal3.png" alt="Sertifikasi 3" className="legal-badge-img" />
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
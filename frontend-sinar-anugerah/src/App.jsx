import { Routes, Route, useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react"; 
import Navbar from "./components/Navbar";
import "./App.css";
import Products from "./pages/Products";
import Contact from "./pages/Contact"; 
import Galeri from "./pages/Galeri";

function App() {
  const location = useLocation();
  const [isExpanded, setIsExpanded] = useState(false);

  const fullText = `Selamat Datang di PT. Sinar Anugerah Industri, mitra terpercaya anda dalam solusi termal inovatif. Sebagai produsen termos berkualitas tinggi terkemuka, kami berkomitmen untuk meningkatkan pengalaman sehari-hari anda dengan produk yang menggabungkan fungsionalitas, daya tahan dan gaya. Dengan tim profesional terampil yang bersemangat memberikan produk unggulan dan layanan pelanggan yang luar biasa, kami memastikan bahwa setiap termos memenuhi standar kinerja dan keandalan tertinggi. Terima kasih telah memilih PT. Sinar Anugerah Industri, dimana inovasi bertemu tradisi, dan kualitas adalah janji kami kepada anda.`;

  useEffect(() => {
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
        else entry.target.classList.remove("visible");
      });
    }, observerOptions);

    const elements = document.querySelectorAll(".fade-in");
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [location]);

  return (
    <>
      <Navbar />
      <div className="logo-background"></div>

      <Routes>
        <Route
          path="/"
          element={
            <>
              {/* HERO SECTION */}
              <main className="content profile-hero-container">
                <div className="profile-text fade-in">
                  <span className="hero-tag">SINAR ANUGERAH INDUSTRI</span>
                  <h2>Inovasi Produk <br/><span>Berkualitas Tinggi.</span></h2>
                  <p className="profile-description">
                    {isExpanded ? fullText : fullText.substring(0, 160) + "..."}
                  </p>
                  <button className="read-more-btn" onClick={() => setIsExpanded(!isExpanded)}>
                    {isExpanded ? "Read Less" : "Read more"}
                  </button>
                </div>
                <div className="profile-image-wrapper fade-in">
                  <img src="/profilcap.png" alt="Karakter Termos SAI" className="floating-hero-img" />
                </div>
              </main>

              {/* VISI MISI & MILESTONE (Sama seperti sebelumnya) */}
              <section className="visi-misi-wrapper">
                <div className="visi-misi-container fade-in">
                  <div className="visi-misi-card visi">
                    <h3>VISI</h3>
                    <p>PT. Sinar Anugerah Industri berkomitmen menjadi perusahaan produksi termos yang terdepan di Indonesia.</p>
                  </div>
                  <div className="visi-misi-card misi">
                    <h3>MISI</h3>
                    <ul className="misi-list">
                      <li>Menghasilkan termos berkualitas sesuai kebutuhan konsumen.</li>
                      <li>Desain inovatif dan estetik.</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* PESEBARAN KAMI */}
              <section className="distribution-wrapper">
                <div className="distribution-header fade-in">           
                  <h2 className="distribution-title">Pesebaran Kami</h2>
                </div>
                <div className="map-container fade-in">
                  <img src="/peta.png" alt="Peta Pesebaran PT SAI" className="indonesia-map" />
                  <div className="map-marker jatim"><span></span><label>Jatim</label></div>
                  {/* ... marker lainnya ... */}
                </div>
              </section>
            </>
          }
        />
        <Route path="/produk" element={<main className="content"><Products /></main>} />
        <Route path="/galeri" element={<Galeri />} /> 
        <Route path="/kontak" element={<Contact />} /> 
      </Routes>

      {/* FOOTER DENGAN SERTIFIKAT LEBIH BESAR */}
      <footer className="footer-main">
        <div className="footer-container">
          <div className="footer-brand-section">
            <div className="footer-logo-box"><span className="logo">SAI</span></div>
            <div className="footer-tagline">
              <h3>SAI</h3>
              <p>MELAYANI DENGAN HATI</p>
            </div>
          </div>
          <div className="footer-menu-section">
            <nav className="footer-nav">
              <Link to="/" className="footer-link">Profil</Link>
              <Link to="/produk" className="footer-link">Produk</Link>
              <Link to="/galeri" className="footer-link">Galeri</Link>
              <Link to="/kontak" className="footer-link">Kontak</Link>
            </nav>
          </div>
        </div>

        <div className="footer-legal-section">
          <p className="legal-title-footer">LEGALITAS KAMI:</p>
          <div className="legal-badges-container">
            <img src="/legal1.png" alt="Badge 1" className="legal-badge-img" />
            <img src="/legal2.png" alt="Badge 2" className="legal-badge-img" />
            <img src="/legal3.png" alt="Badge 3" className="legal-badge-img" />
          </div>

          {/* BAGIAN SERTIFIKAT ISO YANG DIPERBESAR */}
          <p className="legal-title-footer" style={{ marginTop: '20px' }}>SERTIFIKAT:</p>
          <p className="iso-text">ISO 9001:2015</p>
          <div className="certificate-container-large">
            <img src="/sertifikat.png" alt="ISO 9001:2015 Certificate" className="certificate-img-large" />
          </div>
        </div>
        
        <div className="footer-copyright">
          <p>© 2025 PT. Sinar Anugerah Industri — Seluruh hak cipta dilindungi.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
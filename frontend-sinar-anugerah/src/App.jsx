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

useEffect(() => {
  window.scrollTo(0, 0);
}, [location.pathname]); 


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
                        <li>Menciptakan desain termos yan inovatif and menarik.</li>
                        <li>Menerapkan praktik bisnis yang sesuai standard yang berlaku untuk proses produksi.</li>
                        <li>Membangun brand termos yang kuat dan terpercaya di Indonesia.</li>
                        <li>Menyediakan layanan pelanggan yang bagus sekali untuk menjaga kepuasan kosumen.</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* 3. PERJALANAN KAMI (MILESTONE)*/}
              <section className="milestone-wrapper">
                <h2 className="milestone-title fade-in">Perjalanan Kami</h2>
                <div className="milestone-container fade-in">
                  {/* Garis Curve untuk Desktop */}
                  <svg className="milestone-svg" viewBox="0 0 1000 400" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path 
    className="milestone-path-bg" 
    d="M0,200 
       L100,200 
       Q150,200 150,250 
       L150,300 
       Q150,350 200,350 
       L350,350 
       Q400,350 400,300 
       L400,100 
       Q400,50 450,50 
       L600,50 
       Q650,50 650,100 
       L650,300 
       Q650,350 700,350 
       L850,350 
       Q900,350 900,300 
       L900,200 
       L1000,200" 
    stroke="#00A9B5" 
    strokeWidth="10" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  />
</svg>

                  <div className="milestone-item m-1">
                    <div className="milestone-card">
                      <span className="year">2010</span>
                      <p>Memulai Perintisan Kecil Termos.</p>
                    </div>
                  </div>

                  <div className="milestone-item m-2">
                    <div className="milestone-card">
                      <span className="year">2022</span>
                      <p>Resmi Memulai PT. Sinar Anugrah Industri.</p>
                    </div>
                  </div>

                  <div className="milestone-item m-3">
                    <div className="milestone-card">
                      <span className="year">2023</span>
                      <p>Resmi memulai produksi termos dengan penggunaan vacum chamber.</p>
                    </div>
                  </div>

                  <div className="milestone-item m-4">
                    <div className="milestone-card">
                      <span className="year">2024</span>
                      <p>Resmi pendistribusian seri termos Elephant Gold (you and me) ke seluruh Indonesia.</p>
                    </div>
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
                    <div className="map-marker aceh"><span></span><label>aceh</label></div>
                    <div className="map-marker medan"><span></span><label>medan</label></div>
                    <div className="map-marker riau"><span></span><label>riau</label></div>
                    <div className="map-marker padang"><span></span><label>padang</label></div>
                    <div className="map-marker lampung"><span></span><label>lampung</label></div>
                    <div className="map-marker banten"><span></span><label>banten</label></div>
                    <div className="map-marker jakarta"><span></span><label>jakarta</label></div>
                    <div className="map-marker bandung"><span></span><label>bandung</label></div>
                    <div className="map-marker jogja"><span></span><label>jogjaJ</label></div>
                    <div className="map-marker jatim"><span></span><label>Jatim</label></div>
                    <div className="map-marker bali"><span></span><label>bali</label></div>
                    <div className="map-marker ntb"><span></span><label>ntb</label></div>
                    <div className="map-marker ntt"><span></span><label>ntt</label></div>
                    <div className="map-marker dili"><span></span><label>dili</label></div>
                    <div className="map-marker jayapura"><span></span><label>jayapura</label></div>
                    <div className="map-marker ambon"><span></span><label>ambon</label></div>
                    <div className="map-marker ternate"><span></span><label>ternate</label></div>
                    <div className="map-marker sulawesi"><span></span><label>sulawesi</label></div>
                    <div className="map-marker kalimantan"><span></span><label>kalimantan</label></div>
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
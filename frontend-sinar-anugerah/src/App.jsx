import { Routes, Route, useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react"; 
import Navbar from "./components/Navbar";
import "./App.css";
import Products from "./pages/Products";
import Contact from "./pages/Contact"; 
import Galeri from "./pages/Galeri";

function App() {
  const location = useLocation();

  // STATE UNTUK FITUR READ MORE
  const [isExpanded, setIsExpanded] = useState(false);

  const fullText = `Selamat Datang di PT. Sinar Anugerah Industri, mitra terpercaya anda dalam solusi termal inovatif. Sebagai produsen termos berkualitas tinggi terkemuka, kami berkomitmen untuk meningkatkan pengalaman sehari-hari anda dengan produk yang menggabungkan fungsionalitas, daya tahan dan gaya. Dengan tim profesional terampil yang bersemangat memberikan produk unggulan dan layanan pelanggan yang luar biasa, kami memastikan bahwa setiap termos memenuhi standar kinerja dan keandalan tertinggi. Terima kasih telah memilih PT. Sinar Anugerah Industri, dimana inovasi bertemu tradisi, dan kualitas adalah janji kami kepada anda.`;

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
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
              {/* HERO PROFIL MODERN DENGAN READ MORE */}
              <main className="content profile-hero-container">
                <div className="profile-text fade-in">
                  <span className="hero-tag">SINAR ANUGERAH INDUSTRI</span>
                  <h2>Inovasi Produk <br/><span>Berkualitas Tinggi.</span></h2>
                  
                  <p className="profile-description">
                    {isExpanded ? fullText : fullText.substring(0, 160) + "..."}
                  </p>
                  
                  <button 
                    className="read-more-btn" 
                    onClick={() => setIsExpanded(!isExpanded)}
                  >
                    {isExpanded ? "Read Less" : "Read more"}
                  </button>
                </div>

                <div className="profile-image-wrapper fade-in">
                  <img
                    src="/profilcap.png"
                    alt="Karakter Termos SAI"
                    className="floating-hero-img"
                  />
                </div>
              </main>

              {/* VISI MISI */}
              <section className="visi-misi-wrapper">
                <div className="visi-misi-container fade-in">
                  <div className="decorative-shape shape-1"></div>
                  <div className="decorative-shape shape-2"></div>

                  <div className="visi-misi-card visi">
                    <h3>VISI</h3>
                    <p>
                      PT. Sinar Anugerah Industri berkomitmen menjadi perusahaan produksi termos yang terdepan di Indonesia
                      dimana mempunyai kualitas produk yang tinggi, desain yang inovatif dan komitmen terhadap perbaikan berkelanjutan.
                    </p>
                  </div>

                  <div className="visi-misi-card misi">
                    <h3>MISI</h3>
                    <ul className="misi-list">
                      <li>Menghasilkan termos yang berkualitas sesuai dengan kebutuhan konsumen.</li>
                      <li>Menciptakan desain termos yang inovatif dan estetik.</li>
                      <li>Menerapkan praktik bisnis sesuai standar global untuk proses produksi.</li>
                      <li>Membangun brand termos yang kuat dan terpercaya di Indonesia.</li>
                      <li>Menyediakan layanan pelanggan prima untuk menjaga kepuasan konsumen.</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* PERJALANAN KAMI */}
              <section className="milestone-wrapper">
                <div className="milestone-header fade-in">
                  <h2 className="milestone-title">Perjalanan Kami</h2>
                </div>

                <div className="milestone-container">
                  <svg
                    className="milestone-svg"
                    viewBox="0 0 1200 600"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M-50,100 C150,100 200,400 400,400 C600,400 650,150 850,150 C1050,150 1100,450 1300,450"
                      className="milestone-path-bg"
                    />
                  </svg>

                  <div className="milestone-item m-1 fade-in">
                    <div className="milestone-card">
                      <span className="year">2010</span>
                      <p>Awal mula bengkel manufaktur kecil di Surabaya.</p>
                    </div>
                  </div>

                  <div className="milestone-item m-2 fade-in">
                    <div className="milestone-card">
                      <span className="year">2022</span>
                      <p>Resmi menjadi PT. Sinar Anugerah Industri.</p>
                    </div>
                  </div>

                  <div className="milestone-item m-3 fade-in">
                    <div className="milestone-card">
                      <span className="year">2023</span>
                      <p>Resmi memulai produksi termos dengan penggunaan vacum chamber.</p>
                    </div>
                  </div>

                  <div className="milestone-item m-4 fade-in">
                    <div className="milestone-card">
                      <span className="year">2024</span>
                      <p>Resmi pendistribusian seri termos elephant gold (YOU and ME) ke seluruh Indonesia.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* PESEBARAN KAMI */}
              <section className="distribution-wrapper">
                <div className="distribution-header fade-in">           
                  <h2 className="distribution-title">Pesebaran Kami</h2>
                  <p className="distribution-description">
                    Produk termos kami telah menjangkau pelosok negeri, mulai dari Sabang hingga Merauke. 
                    Kami berkomitmen untuk terus memperluas jaringan distribusi guna menghadirkan kualitas terbaik di setiap rumah keluarga Indonesia.
                  </p>
                </div>

                <div className="map-container fade-in">
                  <img src="/peta.png" alt="Peta Pesebaran PT SAI" className="indonesia-map" />
                  
                  <div className="map-marker aceh"><span></span><label>Aceh</label></div>
                  <div className="map-marker medan"><span></span><label>Medan</label></div>
                  <div className="map-marker riau"><span></span><label>Riau</label></div>
                  <div className="map-marker padang"><span></span><label>Padang</label></div>
                  <div className="map-marker lampung"><span></span><label>Lampung</label></div>
                  <div className="map-marker banten"><span></span><label>Banten</label></div>
                  <div className="map-marker jakarta"><span></span><label>Jakarta</label></div>
                  <div className="map-marker bandung"><span></span><label>Bandung</label></div>
                  <div className="map-marker jogja"><span></span><label>Jogja</label></div>
                  <div className="map-marker jatim"><span></span><label>Jatim</label></div>
                  <div className="map-marker bali"><span></span><label>Bali</label></div>
                  <div className="map-marker ntb"><span></span><label>NTB</label></div>
                  <div className="map-marker ntt"><span></span><label>NTT</label></div>
                  <div className="map-marker dili"><span></span><label>Dili</label></div>
                  <div className="map-marker jayapura"><span></span><label>Jayapura</label></div> 
                  <div className="map-marker ambon"><span></span><label>Ambon</label></div>
                  <div className="map-marker ternate"><span></span><label>Ternate</label></div>
                  <div className="map-marker sulawesi"><span></span><label>Sulawesi</label></div>
                  <div className="map-marker kalimantan"><span></span><label>Kalimantan</label></div>       
                </div>
              </section>
            </>
          }
        />

        <Route
          path="/produk"
          element={
            <main className="content">
              <Products />
            </main>
          }
        />

        <Route path="/galeri" element={<Galeri />} /> 
        <Route path="/kontak" element={<Contact />} /> 
      </Routes>

      <footer className="footer-main">
        <div className="footer-container">
          <div className="footer-brand-section">
            <div className="footer-logo-box">
              <span className="logo">SAI</span>
            </div>
            <div className="footer-tagline">
              <h3>SAI</h3>
              <p>MELAYANI DENGAN HATI</p>
            </div>
          </div>

          {/* MENU NAVIGASI PENGGANTI IKON SOSMED */}
          <div className="footer-menu-section">
            <nav className="footer-nav">
              <Link to="/" className="footer-link">Profil</Link>
              <Link to="/produk" className="footer-link">Produk</Link>
              <Link to="/galeri" className="footer-link">Galeri</Link>
              <Link to="/kontak" className="footer-link">Kontak</Link>
            </nav>
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
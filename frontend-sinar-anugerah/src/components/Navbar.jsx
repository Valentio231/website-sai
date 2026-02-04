import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const handleClick = (path) => {
    if (location.pathname === path) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      window.scrollTo(0, 0);
    }
    setMenuOpen(false); // Menutup menu setelah klik (penting untuk tampilan HP)
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* BRAND - Sisi Kiri */}
        <Link
          to="/"
          className="navbar-brand"
          onClick={() => handleClick("/")}
        >
<img 
    src="/logo1.png" 
    alt="Logo SAI" 
    className="navbar-logo-img" 
  />
  <span className="brand-name">
    PT. SINAR ANUGERAH INDUSTRI
  </span>
</Link>


        {/* MENU - Akan sembunyi di HP kecuali jika menuOpen bernilai true */}
        <ul className={`navbar-menu ${menuOpen ? "active" : ""}`}>
          <li>
            <Link to="/" onClick={() => handleClick("/")}>Profil</Link>
          </li>
          <li>
            <Link to="/produk" onClick={() => handleClick("/produk")}>Produk</Link>
          </li>
          <li>
            <Link to="/galeri" onClick={() => handleClick("/galeri")}>Galeri</Link>
          </li>
          <li>
            <Link to="/kontak" onClick={() => handleClick("/kontak")}>Kontak</Link>
          </li>
        </ul>

        {/* HAMBURGER - Class diganti ke hamburger-menu agar sesuai dengan CSS penghilang di laptop */}
        <div
          className="hamburger-menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
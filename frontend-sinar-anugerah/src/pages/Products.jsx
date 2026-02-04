import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";

// DATA STATIS - Setiap objek di sini akan menjadi satu kartu di halaman luar
const STATIC_PRODUCTS = [
  {
    id: 1,
    name: "Termos Elephant Gold YOU AND ME - GREEN Series ~ HTC-777 ",
    description: "Green",
    image: "Green Series ~ HTC-777 (hijau).PNG",
    variants: [
      { name: "GREEN", file: "Green Series ~ HTC-777 (hijau).PNG" },
      { name: "BLUE", file: "Green Series ~ HTC-777 (biru).PNG" },
      { name: "RED", file: "Green Series ~ HTC-777 (merah).PNG" }
    ]
  },
  {
    id: 2,
    name: "Termos Elephant Gold YOU AND ME - ROSE Series ~ HPC-88T",
    description: "Red",
    image: "Rose Series ~ HPC-888T (merah).PNG",
    variants: [
      { name: "RED", file: "Rose Series ~ HPC-888T (merah).PNG" },
      { name: "BLUE", file: "Rose Series ~ HPC-888T (biru).PNG" },
      { name: "GREEN", file: "Rose Series ~ HPC-888T (hijau).PNG" }
    ]
  },
  {
    id: 3,
    name: "Termos Elephant Gold YOU AND ME - GOLF Series ~ HPC-777T",
    description: "Pink",
    image: "Golf Series ~ HPC-777T (pink).PNG",
    variants: [
      { name: "PINK", file: "Golf Series ~ HPC-777T (pink).PNG" },
      { name: "BLUE", file: "Golf Series ~ HPC-777T (biru).PNG" },
      { name: "BROWN", file: "Golf Series ~ HPC-777T (coklat).PNG" },
      { name: "GREEN", file: "Golf Series ~ HPC-777T (hijau).PNG" }
    ]
  },
  {
    id: 4,
    name: "Termos Elephant Gold YOU AND ME - DAHLIA Series ~ DPC-888",
    description: "Blue",
    image: "Dahlia Series ~ DPC-888 (biru).PNG",
    variants: [
      { name: "BIRU", file: "Dahlia Series ~ DPC-888 (biru).PNG" },
      { name: "BROWN", file: "Dahlia Series ~ DPC-888 (coklat).PNG" },
      { name: "ORANGE", file: "Dahlia Series ~ DPC-888 (orange).PNG" }
    ]
  },
  {
    id: 5,
    name:"Termos Elephant Gold YOU AND ME - RUBY Series ~ DSC-777",
    description: "Red",
    image: "Ruby Series ~ DSC-777 (merah).PNG",
    variants: [
      { name: "RED", file: "Ruby Series ~ DSC-777 (merah).PNG" },
      { name: "GREEN", file: "Ruby Series ~ DSC-777 (hijau).PNG" },
      { name: "BROWN", file: "Ruby Series ~ DSC-777 (coklat).PNG" },
      { name: "BLUE", file: "Ruby Series ~ DSC-777 (biru).PNG" },
    ]
  },
  {
    id: 6,
    name: "Termos Elephant Gold YOU AND ME - SAKURA Series ~ APC-888",
    description: "Blue",
    image: "Sakura Series ~ APC-888 (biru).PNG",
    variants: [
      { name: "BLUE", file: "Sakura Series ~ APC-888 (biru).PNG" },
      { name: "GREEN", file: "Sakura Series ~ APC-888 (hijau).PNG" },
      { name: "PINK", file: "Sakura Series ~ APC-888 (pink).PNG" }
    ]
  }
];

function Products() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Memberikan efek animasi fade-in saat halaman dimuat
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  // Menampilkan semua data tanpa filter pencarian
  const displayData = STATIC_PRODUCTS;

  return (
    <div className="products-page-container">
      {/* Hero Section */}
      <header className="products-hero-section">
        <div className="hero-content">
          <div className={`hero-text-box fade-in ${isVisible ? "visible" : ""}`}>
            <h1>Koleksi Produk Kami</h1>
            <p>Menampilkan seluruh varian unggulan kami secara eksklusif.</p>
            {/* Fitur Search sudah dihapus dari sini */}
          </div>
          <div className={`hero-image-box fade-in ${isVisible ? "visible" : ""}`}>
            <img src="/produkcp.png" alt="Hero" className="floating-img" />
          </div>
        </div>
      </header>

      {/* Grid Produk */}
      <section className="product-list-section">
        <div className="grid-layout">
          {displayData.map((item) => (
            <div 
              key={item.id} 
              className={`product-card-wrapper fade-in ${isVisible ? "visible" : ""}`}
            >
              <ProductCard product={item} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Products;
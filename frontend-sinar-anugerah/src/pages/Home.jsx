import { useState, useEffect } from "react";
import api from "../api/axios";
import ProductCard from "../components/ProductCard";
import ProductSearch from "../components/ProductSearch";

function Products() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    api.get("/products")
      .then((res) => {
        const rawData = Array.isArray(res.data) ? res.data : [];
        
        // --- PROSES PENGGABUNGAN (GROUPING) DATA ---
        // Ini kunci agar product.variants terisi dan pilihan warna muncul
        const groupedProducts = rawData.reduce((acc, item) => {
          // Cari apakah produk dengan nama yang sama sudah ada di daftar
          const existingProduct = acc.find(p => p.name === item.name);

          const variantData = {
            name: item.material || "Warna", 
            file: item.image                 
          };

          if (existingProduct) {
            // Jika nama produk sama, tambahkan sebagai variasi warna baru
            existingProduct.variants.push(variantData);
          } else {
            // Jika nama produk baru, buat entri baru dengan array variants
            acc.push({
              ...item,
              variants: [variantData]
            });
          }
          return acc;
        }, []);

        setProducts(groupedProducts);
        setLoading(false);
        setTimeout(() => setIsVisible(true), 100);
      })
      .catch((err) => {
        console.error("Gagal koneksi ke API:", err);
        setLoading(false);
      });
  }, []);

  const displayData = products.filter((p) =>
    p.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="products-page-container">
      <header className="products-hero-section">
        <div className="hero-content">
          <div className={`hero-text-box fade-in ${isVisible ? "visible" : ""}`}>
            <h1>Koleksi Produk Unggulan</h1>
            <p>Menghadirkan teknologi vakum mutakhir untuk menjaga suhu minuman Anda lebih lama.</p>
            <div className="search-wrapper-hero">
              <ProductSearch value={searchTerm} onChange={setSearchTerm} />
            </div>
          </div>
          <div className={`hero-image-box fade-in ${isVisible ? "visible" : ""}`}>
            <img src="/produkcp.png" alt="Hero" className="floating-img" />
          </div>
        </div>
      </header>

      <section className="product-list-section">
        <div className="grid-layout">
          {loading ? (
            <p className="loading-text">Memuat produk...</p>
          ) : displayData.length > 0 ? (
            displayData.map((item, index) => (
              <div 
                key={item.id || index} 
                className={`product-card-wrapper fade-in ${isVisible ? "visible" : ""}`}
              >
                <ProductCard product={item} />
              </div>
            ))
          ) : (
            <p className="no-data-text">
              {searchTerm ? "Produk tidak ditemukan." : "Tidak ada data produk di database."}
            </p>
          )}
        </div>
      </section>
    </div>
  );
}

export default Products;
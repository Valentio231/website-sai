import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

function ProductCard({ product }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(product.image);

  // Update selectedImage saat modal dibuka agar sesuai gambar utama
  useEffect(() => {
    if (isOpen) {
      setSelectedImage(product.image);
    }
  }, [isOpen, product.image]);

  const getImagePath = (imgName) => {
    if (!imgName) return "/profilcap.png";
    // EncodeURIComponent menangani spasi dan karakter unik di nama file database kamu
    const cleanPath = imgName.startsWith('/') ? imgName : `/${imgName}`;
    return encodeURI(cleanPath); 
  };

  const renderModal = () => {
    if (!isOpen) return null;

    return createPortal(
      <div className="modal-overlay" onClick={() => setIsOpen(false)}>
        <div className="modal-content-large" onClick={(e) => e.stopPropagation()}>
          <button className="modal-close-icon" onClick={() => setIsOpen(false)}>&times;</button>

          <div className="modal-main-layout">
            <div className="modal-left-column">
              <div className="detail-img-wrapper">
                <img 
                  key={selectedImage} 
                  src={getImagePath(selectedImage)} 
                  alt={product.name} 
                  className="main-detail-img"
                />
              </div>
              
              <div className="product-color-gallery">
                <p className="gallery-label">Tersedia Pilihan Warna:</p>
                <div className="gallery-grid">
                  {/* Mapping dari variants hasil grouping di Products.jsx */}
                  {product.variants && product.variants.map((variant, index) => (
                    <div 
                      key={index}
                      className={`gallery-item ${selectedImage === variant.file ? 'active' : ''}`}
                      onClick={() => setSelectedImage(variant.file)}
                    >
                      {/* Frame kotak kecil untuk gambar variasi */}
                      <div className="gallery-img-box">
                        <img src={getImagePath(variant.file)} alt={variant.name} />
                      </div>
                      <span>{variant.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="modal-right-column">
              <div className="detail-header-info">           
                <h2>{product.name}</h2>
              </div>

              <div className="benefits-container">
                <h3>Keuntungan</h3>
                <ul className="benefits-list">
                  <li>Kapasitas besar 2 liter</li>
                  <li>Tahan panas hingga 48 jam</li>
                  <li>Tabung dengan kualitas terbaik</li>
                  <li>Bahan Food Grade</li>
                  <li>Anti tumpah</li>
                  <li>Mudah dibawah kemana saja</li>
                  <li>Tahan panas & Tahan lama</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>,
      document.body
    );
  };

  return (
    <>
      <div className="product-card-item" onClick={() => setIsOpen(true)}>
        <div className="product-image-frame">
          <img src={getImagePath(product.image)} alt={product.name} />
        </div>
        <div className="card-details">
          <span className="material-text">{product.material}</span>
          <h3>{product.name}</h3>
          <p className="product-desc">{product.series || product.description}</p>
        </div>
      </div>
      {renderModal()}
    </>
  );
}

export default ProductCard;
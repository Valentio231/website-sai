import React from "react";

function Contact() {
  return (
    <div className="contact-page-container">
      {/* Bagian Judul Besar */}
      <header className="contact-hero fade-in">
        <div className="contact-hero-content">
          <h1>Ada yang <br /> <span>bisa dibantu?</span></h1>
          <p className="sub-title">KORPORASI</p>
        </div>
      </header>

      {/* Bagian Detail Alamat & Info */}
      <section className="contact-details fade-in">
        <div className="contact-grid">
          <div className="contact-info-card">
            <h3>Kantor Pusat</h3>
            <p><strong>PT. Sinar Anugerah Industri</strong></p>
            <p>Jl. Palem Watu No.09, Kab. Gresik, 61174</p>
            <p>Jawa Timur, Indonesia</p>
          </div>
          
          <div className="contact-info-card">
            <h3>Hubungi Kami</h3>
            {/* Tautan Email: Otomatis membuka aplikasi email seperti Gmail/Outlook */}
            <p>
              Email: <a href="mailto:sinaranugrahindustri@gmail.com" className="contact-link">
                sinaranugrahindustri@gmail.com
              </a>
            </p>
            
            {/* Tautan WhatsApp: Otomatis masuk ke ruang chat */}
            <p>
              Telepon: <a 
                href="https://wa.me/628133717142" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="contact-link"
              >
                (+62)813-371-7142
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
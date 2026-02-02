import React from "react";
// Import CSS dihapus karena sudah di App.css

function Galeri() {
  return (
    // Gunakan kelas "fade-in" saja, App.jsx yang akan menambah "visible"
    <div className="gallery-page fade-in">
      <header className="gallery-header">
        <h1>Galeri <span>Kegiatan</span></h1>
        <p>Melihat lebih dekat dedikasi dan ketelitian di balik setiap produk berkualitas tinggi kami.</p>
      </header>

 {/*Lokasi*/}
      <section className="scatter-section">
        <div className="scatter-box-large">
          <div className="scatter-text-center">
            <h2>Lokasi Produksi</h2>
            <p>Kompleks operasional kami berdiri di atas lahan yang luas dengan infrastruktur modern 
                yang mendukung seluruh alur produksi hingga distribusi. Area ini bukan sekadar tempat 
                bekerja, melainkan pusat inovasi tempat kami mewujudkan standar kualitas terbaik 
                untuk setiap produk termos kami.
            </p>
          </div>
          <div className="photo-cluster">
            <img src="/lokasi1.jpeg" className="scatter-img p1" alt="Produksi" />
            <img src="/lokasi2.jpeg" className="scatter-img p2" alt="Mesin" />
            <img src="/lokasi3.jpeg" className="scatter-img p4" alt="Hasil" />
          </div>
        </div>
      </section>
      
       {/*Produksi*/}
       <section className="scatter-section">
        <div className="scatter-box-large">
          <div className="scatter-text-center">
            <h2>Inovasi Tanpa Kompromi</h2>
            <p>Proses produksi PT. Sinar Anugerah Industri menitikberatkan pada kendali mutu yang ketat di setiap tahapnya. 
            Mulai dari pemilihan material premium hingga uji ketahanan panas, kami memastikan bahwa hanya produk 
            dengan standar kualitas terbaik yang meninggalkan pabrik kami untuk menemani keseharian Anda.</p>
         </div>
          <div className="photo-cluster">
            <img src="/produk1.jpeg" className="scatter-img p1" alt="Produksi" />
            <img src="/produk2.jpeg" className="scatter-img p2" alt="Mesin" />
            <img src="/produk3.jpeg" className="scatter-img p3" alt="Hasil" />
          </div>
        </div>
      </section>

        {/*Pengiriman*/}
        <section className="scatter-section">
        <div className="scatter-box-large">
          <div className="scatter-text-center">
            <h2>Distribusi & Logistik Nasional</h2>
            <p>Kami memahami pentingnya ketepatan waktu. Dengan dukungan jaringan logistik yang terintegrasi, 
        PT. Sinar Anugerah Industri memastikan setiap pesanan didistribusikan secara efisien ke seluruh 
        wilayah Indonesia. Komitmen kami adalah menghadirkan produk berkualitas di depan pintu rumah Anda 
        dengan jadwal pengiriman yang konsisten dan terukur.</p>
          </div>
          <div className="photo-cluster">
            <img src="/pengiriman1.jpeg" className="scatter-img p1" alt="Produksi" />
            <img src="/pengiriman2.jpeg" className="scatter-img p2" alt="Mesin" />
            <img src="/pengiriman3.jpeg" className="scatter-img p3" alt="Hasil" />
          </div>
        </div>
      </section>

    </div>
  );
}

export default Galeri;
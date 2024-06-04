import NavigationBar from "./NavigationBar";
import Image from "react-bootstrap/Image";
import Faq from "./Faq";
import Footer from "./Footer";

const Program = () => {
  return (
    <>
      <NavigationBar />
      <div className="container-program">
        <h1 className="judul5">Program Strategis</h1>
        <p className="tahun"> 2020 - 2025 </p>

        <div className="bg-paragraph">
          <p className="paragraph-program">
            PMKM Prima Indonesia memiliki 14 Program Strategis untuk membantu
            UMKM melalui berbagai tahapan bisnis, mulai dari pemetaan database
            untuk pengambilan keputusan yang lebih informatif, hingga pelatihan
            untuk meningkatkan kapasitas operasional. Melalui penguatan jaringan
            dan kolaborasi, inisiatif ini memperbaiki akses ke sumber daya,
            permodalan, dan pasar. Fasilitasi dalam penyediaan bahan baku,
            pemasaran, dan distribusi barang mendukung operasional sehari-hari,
            sedangkan perlindungan hukum dan kegiatan penelitian & pengembangan
            mendorong inovasi dan daya saing.
            <br />
            <br />
            Keseluruhannya menciptakan ekosistem yang mendukung pertumbuhan
            berkelanjutan UMKM, berkontribusi pada ekonomi dan masyarakat secara
            luas.
          </p>
        </div>

        <Image src={"/assets/vector/icon16.png"} className="icon16" alt="Icon" />

        <div>
          <Image src={"/assets/vector/icon15.jpg"} className="icon15" alt="Icon" />
          <Image src={"/assets/vector/icon17.png"} className="icon17" alt="Icon" />
          <h1 className="head-map">Mapping Database UMKM</h1>
          <p className="paragraph-map">
            Mapping database UMKM adalah proses pengorganisasian dan
            representasi informasi tentang usaha mikro, kecil, dan menengah
            (UMKM) dalam suatu sistem basis data. Hal ini melibatkan pengumpulan
            data terkait UMKM, seperti profil bisnis, lokasi, sektor industri,
            skala usaha, dan informasi lainnya, yang kemudian disusun dan
            dimodelkan dalam struktur database yang terstruktur.
            <br />
            <br />
            Mapping database UMKM bertujuan untuk memberikan pemahaman yang
            komprehensif tentang distribusi, karakteristik, dan tren UMKM,
            memungkinkan pemangku kepentingan seperti pemerintah, lembaga
            keuangan, dan pelaku bisnis untuk membuat keputusan yang lebih baik,
            mengidentifikasi peluang, dan merancang kebijakan yang sesuai untuk
            mendukung pertumbuhan dan perkembangan sektor UMKM.
          </p>
        </div>

        <Image src={"/assets/image/gambar12.jpeg"} className="gambar12" alt="Gambar" />
        <Image src={"/assets/vector/icon16.png"} className="icon16" alt="Icon" />

        <ul className="fasilitas-list">
          <li className="fasilitas-item">
            <Image src={"/assets/vector/icon1.png"} className="icon21" alt="Icon" />
            <span className="fas1">Pelatihan Kapasitas Pelaku UMKM</span>
          </li>
          <span className="plus-symbol">+</span>
          <Image src={"/assets/vector/icon16.png"} className="icon35" alt="Icon" />

          <li className="fasilitas-item">
            <Image src={"/assets/vector/icon3.png"} className="icon22" alt="Icon" />
            <span className="fas2">Penguatan & Perluasan Pelaku UMKM</span>
          </li>
          <span className="plus-symbol">+</span>
          <Image src={"/assets/vector/icon16.png"} className="icon35" alt="Icon" />

          <li className="fasilitas-item">
            <Image src={"/assets/vector/icon4.png"} className="icon23" alt="Icon" />
            <span className="fas2">Pelatihan Calon Pelaku UMKM</span>
          </li>
          <span className="plus-symbol">+</span>
          <Image src={"/assets/vector/icon16.png"} className="icon35" alt="Icon" />

          <li className="fasilitas-item">
            <Image src={"/assets/vector/icon5.png"} className="icon25" alt="Icon" />
            <span className="fas2">Fasilitasi Pemasaran Online & Offline</span>
          </li>
          <span className="plus-symbol">+</span>
          <Image src={"/assets/vector/icon16.png"} className="icon35" alt="Icon" />

          <li className="fasilitas-item">
            <Image src={"/assets/vector/icon6.png"} className="icon26" alt="Icon" />
            <span className="fas2">Fasilitasi Akses Permodalan</span>
          </li>
          <span className="plus-symbol">+</span>
          <Image src={"/assets/vector/icon16.png"} className="icon35" alt="Icon" />

          <li className="fasilitas-item">
            <Image src={"/assets/vector/icon7.png"} className="icon27" alt="Icon" />
            <span className="fas2">Fasilitasi Penyediaan Bahan Baku</span>
          </li>
          <span className="plus-symbol">+</span>
          <Image src={"/assets/vector/icon16.png"} className="icon35" alt="Icon" />

          <li className="fasilitas-item">
            <Image src={"/assets/vector/icon8.png"} className="icon28" alt="Icon" />
            <span className="fas2">Fasilitasi Akses Buyer</span>
          </li>
          <span className="plus-symbol">+</span>
          <Image src={"/assets/vector/icon16.png"} className="icon35" alt="Icon" />

          <li className="fasilitas-item">
            <Image src={"/assets/vector/icon9.png"} className="icon29" alt="Icon" />
            <span className="fas2">Fasilitasi Design Packaging</span>
          </li>
          <span className="plus-symbol">+</span>
          <Image src={"/assets/vector/icon16.png"} className="icon35" alt="Icon" />

          <li className="fasilitas-item">
            <Image src={"/assets/vector/icon10.png"} className="icon30" alt="Icon" />
            <span className="fas2">Fasilitasi Perlindungan Hukum</span>
          </li>
          <span className="plus-symbol">+</span>
          <Image src={"/assets/vector/icon16.png"} className="icon35" alt="Icon" />

          <li className="fasilitas-item">
            <Image src={"/assets/vector/icon11.png"} className="icon31" alt="Icon" />
            <span className="fas2">Pendampingan Proses Pengurusan Legalitas</span>
          </li>
          <span className="plus-symbol">+</span>
          <Image src={"/assets/vector/icon16.png"} className="icon35" alt="Icon" />

          <li className="fasilitas-item">
            <Image src={"/assets/vector/icon12.png"} className="icon32" alt="Icon" />
            <span className="fas2">Fasilitasi Kerjasama dengan Mitra UMKM</span>
          </li>
          <span className="plus-symbol">+</span>
          <Image src={"/assets/vector/icon16.png"} className="icon35" alt="Icon" />

          <li className="fasilitas-item">
            <Image src={"/assets/vector/icon13.png"} className="icon33" alt="Icon" />
            <span className="fas2">Fasilitasi Jasa Distribusi Barang</span>
          </li>
          <span className="plus-symbol">+</span>
          <Image src={"/assets/vector/icon16.png"} className="icon35" alt="Icon" />
          
          <li className="fasilitas-item">
            <Image src={"/assets/vector/icon14.png"} className="icon34" alt="Icon" />
            <span className="fas2">R & D UMKM</span>
          </li>
          <span className="plus-symbol">+</span>
          <Image src={"/assets/vector/icon16.png"} className="icon35" alt="Icon" />
        </ul>

        <div
        style={{
          marginTop: 100,
          display: "flex",
          gap: 8,
          justifyContent:'center',
          alignItems:'center',
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 8,
            alignItems:'end',
          }}
        >
          <Image src={"/assets/image/gambar7.jpeg"} className="gambar7" alt="Image" />
          <Image src={"/assets/image/gambar9.jpeg"} className="gambar9" alt="Image" />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 8,
          }}
        >
          <Image src={"/assets/image/gambar10.jpeg"} className="gambar10" alt="Image" />
          <Image src={"/assets/image/gambar8.jpeg"} className="gambar8" alt="Image" />
        </div>
      </div>

      <button className="btnjadi" type="submit">
        JADI ANGGOTA PMKM PRIMA INDONESIA
      </button>

      <Faq />

      <Footer />

      </div>
    </>
  );
};

export default Program;

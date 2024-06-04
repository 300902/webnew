import NavigationBar from "./NavigationBar";
import Image from "react-bootstrap/Image";
import Faq from "./Faq";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <NavigationBar />
      <div className="judul">
        <p className="judul1">Data UMKM</p>
        <p className="judul2">
          Kementerian Koperasi dan Usaha Kecil dan Menengah
        </p>
        <p className="judul3">
          https://databoks.katadata.co.id/datapublish/2023/10/13/usaha-mikro-tetap-merajai-umkm-berapa-jumlahnya
        </p>
      </div>
      <div className="datagambar">
        <div className="row">
          <div className="col-md-6">
            <div className="gambar1">
              <Image
                src={"assets/image/gambar2.jpeg"}
                className="img-fluid rounded"
                alt="Image"
              />
              <div className="angka1">64,2 Jt</div>
              <p className="kata1">
                Unit
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="gambar2">
              <Image
                src={"assets/image/gambar3.jpeg"}
                className="img-fluid rounded"
                alt="Image"
              />
              <div className="angka2">97%</div>
              <p className="kata2">
                Penyerapan Tenaga Kerja
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="gambar3">
              <Image
                src={"assets/image/gambar4.jpeg"}
                className="img-fluid rounded"
                alt="Image"
              />
              <div className="angka3">15%</div>
              <p className="kata3">
                Ekspor Nasional
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="gambar4">
              <Image
                src={"assets/image/gambar5.jpg"}
                className="img-fluid rounded"
                alt="Image"
              />
              <div className="angka4">57%</div>
              <p className="kata4">
                Pendapatan Domestik Bruto
              </p>
            </div>
          </div>
        </div>
        <div className="kata5">
          <p>
            Kami percaya bahwa UMKM adalah tulang punggung ekonomi lokal dan
            merupakan katalisator penting dalam menciptakan lapangan kerja dan
            mendorong pertumbuhan ekonomi yang inklusif. Oleh karena itu, kami
            berkomitmen untuk memberikan dukungan yang diperlukan kepada para
            pengusaha UMKM agar mereka dapat tumbuh dan bersaing secara efektif
            di pasar yang semakin kompleks.
          </p>
        </div>
        <div className="tombol">
          <button>Lihat Program Strategis</button>
        </div>
      </div>

      <div className="visimisi">
        <p className="visi">Visi</p>
        <p className="katavisi">
          Menjadikan UMKM Indonesia produktif, mandiri, berdaya saing, dan
          sejahtera
        </p>
        <p className="misi">Misi</p>

        <p className="katamisi">
          Meningkatkan Produktivitas, Kemandirian, dan Kesejahteraan pelaku UMKM
          <br />
          <br />
          Meningkatkan Kompetensi dan Daya Saing pelaku UMKM di Pasar Nasional
          maupun Global
          <br />
          <br />
          Meningkatkan Kerjasama dan Gotong Royong para pelaku UMKM seluruh
          Indonesia agar tumbuh dan berkembang menjadi kokoh
          <br />
          <br />
          Meningkatkan Akselerasi Jaringan Kerjasama antar para pelaku UMKM
          dalam dan luar negeri
          <br />
          <br />
          Membantu Program Pemerintah dalam menanggulangi Pengangguran dan
          Pengentasan Kemiskinan
        </p>
      </div>
      <div>
        <Image src={"/assets/image/gambar6.jpeg"} className="gambarvisi" alt="Image" />
      </div>

      <div>
        <h1 className="judul5">Program Strategis</h1>
        <div className="tahun">2020 - 2025</div>

        <div className="program-strategis"></div>
        <div className="row">
          <div className="col-md-6">
            <div className="program">
              <Image src={"/assets/vector/icon2.png"} className="icon1" alt="Icon" />
              <h2 className="head1">Mapping Database UMKM</h2>
              <p className="paragraf1">
                Membangun database UMKM untuk
                <br />
                memetakan profil, kebutuhan, dan
                <br />
                potensi pertumbuhan bisnis UMKM di
                <br />
                berbagai sektor.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="program2 d-flex align-items-starts p">
              <Image src={"/assets/vector/icon1.png"} className="icon2" alt="Icon" />
              <div>
                <h2 className="head">Pelatihan Kapasitas Pelaku</h2>
                <p className="paragraf">
                  Menyediakan program pelatihan untuk
                  <br />
                  meningkatkan keterampilan dan
                  <br />
                  pengetahuan manajerial serta
                  <br />
                  operasional pelaku UMKM.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="program">
              <Image src={"/assets/vector/icon3.png"} className="icon3" alt="Icon" />
              <h2 className="head3">Penguatan & Perluasan</h2>
              <p className="paragraf3">
                Mengembangkan jaringan dan
                <br />
                organisasi UMKM untuk meningkatkan
                <br />
                kolaborasi, akses pasar, dan kekuatan
                <br />
                tawar.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="program">
              <Image src={"/assets/vector/icon4.png"} className="icon4" alt="Icon" />
              <h2 className="head4">Pelatihan Calon Pelaku</h2>
              <p className="paragraf4">
                Memberikan pendidikan dan pelatihan
                <br />
                kepada calon pengusaha tentang dasar-
                <br />
                dasar memulai dan mengelola UMKM.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="program">
              <Image src={"/assets/vector/icon5.png"} className="icon5" alt="Icon" />
              <h2 className="head3">Fasilitasi Pemasaran</h2>
              <p className="paragraf3">
                Membantu mengimplementasikan
                <br />
                strategi pemasaran yang efektif di kanal
                <br />
                online dan offline untuk meningkatkan
                <br />
                penjualan.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="program">
              <Image src={"/assets/vector/icon6.png"} className="icon6" alt="Icon" />
              <h2 className="head4">Akses Permodalan</h2>
              <p className="paragraf4">
                Memudahkan akses ke sumber dana dan
                <br />
                pinjaman bagi UMKM untuk modal kerja
                <br />
                atau ekspansi usaha.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="program">
              <Image src={"/assets/vector/icon7.png"} className="icon7" alt="Icon" />
              <h2 className="head3">Penyediaan Bahan Baku</h2>
              <p className="paragraf3">
                Menyederhanakan proses akses
                <br />
                terhadap bahan baku berkualitas
                <br />
                dengan harga terjangkau untuk UMKM.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="program">
              <Image src={"/assets/vector/icon8.png"} className="icon8" alt="Icon" />
              <h2 className="head4">Akses Buyer</h2>
              <p className="paragraf4">
                Menghubungkan UMKM dengan
                <br />
                pembeli potensial, termasuk pasar
                <br />
                ekspor, melalui berbagai program dan
                <br />
                kegiatan.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="program">
              <Image src={"/assets/vector/icon9.png"} className="icon9" alt="Icon" />
              <h2 className="head3">Desain Packaging</h2>
              <p className="paragraf3">
                Membantu UMKM dalam mendesain
                <br />
                kemasan yang menarik untuk
                <br />
                meningkatkan daya saing produk di
                <br />
                pasar.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="program">
              <Image src={"/assets/vector/icon10.png"} className="icon10" alt="Icon" />
              <h2 className="head4">Perlindungan Hukum</h2>
              <p className="paragraf4">
                Memberikan dukungan dalam
                <br />
                perlindungan hukum untuk menjaga hak
                <br />
                intelektual dan merek dagang UMKM.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="program">
              <Image src={"/assets/vector/icon11.png"} className="icon11" alt="Icon" />
              <h2 className="head3">Legalitas</h2>
              <p className="paragraf3">
                Memfasilitasi proses pengurusan izin
                <br />
                usaha, sertifikasi produk dan dokumen
                <br />
                legal lainnya untuk UMKM.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="program">
              <Image src={"/assets/vector/icon12.png"} className="icon12" alt="Icon" />
              <h2 className="head4">Fasilitas Kerjasama</h2>
              <p className="paragraf4">
                Mendorong kerjasama strategis antara
                <br />
                UMKM dengan berbagai pihak untuk
                <br />
                memperluas jaringan dan pasar.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="program">
              <Image src={"/assets/vector/icon13.png"} className="icon13" alt="Icon" />
              <h2 className="head3">Jasa Distribusi Barang</h2>
              <p className="paragraf3">
                Menawarkan layanan logistik dan
                <br />
                distribusi untuk membantu UMKM
                <br />
                menjangkau pasar yang lebih luas.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="program">
              <Image src={"/assets/vector/icon14.png"} className="icon10" alt="Icon" />
              <h2 className="head4">R & D UMKM</h2>
              <p className="paragraf4">
                Mendorong inovasi dan pengembangan
                <br />
                produk melalui riset dan pengembangan
                <br />
                yang ditujukan untuk UMKM.
              </p>
            </div>
          </div>
        </div>
      </div>

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
    </>
  );
}

export default Home;

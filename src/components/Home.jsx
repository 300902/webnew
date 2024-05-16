import NavigationBar from "./NavigationBar";
import Image from "react-bootstrap/Image";
import gambar2Image from "../assets/image/gambar2.jpeg";
import gambar3Image from "../assets/image/gambar3.jpeg";
import gambar4Image from "../assets/image/gambar4.jpeg";
import gambar5Image from "../assets/image/gambar5.jpg";
import gambar6Image from "../assets/image/gambar6.jpeg";
import gambar7Image from "../assets/image/gambar7.jpeg";
import gambar8Image from "../assets/image/gambar8.jpeg";
import gambar9Image from "../assets/image/gambar9.jpeg";
import gambar10Image from "../assets/image/gambar10.jpeg";
import icon1image from "../assets/vector/icon1.png";
import icon2image from "../assets/vector/icon2.png";
import icon3image from "../assets/vector/icon3.png";
import icon4image from "../assets/vector/icon4.png";
import icon5image from "../assets/vector/icon5.png";
import icon6image from "../assets/vector/icon6.png";
import icon7image from "../assets/vector/icon7.png";
import icon8image from "../assets/vector/icon8.png";
import icon9image from "../assets/vector/icon9.png";
import icon10image from "../assets/vector/icon10.png";
import icon11image from "../assets/vector/icon11.png";
import icon12image from "../assets/vector/icon12.png";
import icon13image from "../assets/vector/icon13.png";
import icon14image from "../assets/vector/icon14.png";
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
                src={gambar2Image}
                className="img-fluid rounded"
                alt="Image"
              />
              <div className="angka1">100000000</div>
              <p className="kata1">
                Ini adalah paragraf yang ditambahkan di dalam gambar.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="gambar2">
              <Image
                src={gambar3Image}
                className="img-fluid rounded"
                alt="Image"
              />
              <div className="angka2">100000000</div>
              <p className="kata2">
                Ini adalah paragraf yang ditambahkan di dalam gambar.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="gambar3">
              <Image
                src={gambar4Image}
                className="img-fluid rounded"
                alt="Image"
              />
              <div className="angka3">100000000</div>
              <p className="kata3">
                Ini adalah paragraf yang ditambahkan di dalam gambar.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="gambar4">
              <Image
                src={gambar5Image}
                className="img-fluid rounded"
                alt="Image"
              />
              <div className="angka4">100000000</div>
              <p className="kata4">
                Ini adalah paragraf yang ditambahkan di dalam gambar.
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
        <Image src={gambar6Image} className="gambarvisi" alt="Image" />
      </div>

      <div>
        <h1 className="judul5">Program Strategis</h1>
        <div className="tahun">2020 - 2025</div>

        <div className="program-strategis"></div>
        <div className="row">
          <div className="col-md-6">
            <div className="program">
              <Image src={icon2image} className="icon1" alt="Icon" />
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
              <Image src={icon1image} className="icon2" alt="Icon" />
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
              <Image src={icon3image} className="icon3" alt="Icon" />
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
              <Image src={icon4image} className="icon4" alt="Icon" />
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
              <Image src={icon5image} className="icon5" alt="Icon" />
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
              <Image src={icon6image} className="icon6" alt="Icon" />
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
              <Image src={icon7image} className="icon7" alt="Icon" />
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
              <Image src={icon8image} className="icon8" alt="Icon" />
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
              <Image src={icon9image} className="icon9" alt="Icon" />
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
              <Image src={icon10image} className="icon10" alt="Icon" />
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
              <Image src={icon11image} className="icon11" alt="Icon" />
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
              <Image src={icon12image} className="icon12" alt="Icon" />
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
              <Image src={icon13image} className="icon13" alt="Icon" />
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
              <Image src={icon14image} className="icon10" alt="Icon" />
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

      <div className="row1">
      <div className="galeri">
        <Image src={gambar7Image} className="gambar7" alt="Image" />
        <Image src={gambar8Image} className="gambar8" alt="Image" />
        <Image src={gambar9Image} className="gambar9" alt="Image" />
        <Image src={gambar10Image} className="gambar10" alt="Image" />
      </div>
      </div>
      <Footer />

    </>
  );
}

export default Home;

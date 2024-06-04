import NavigationBar from "./NavigationBar";
import Image from "react-bootstrap/Image";
import gambar11Image from "../assets/image/gambar11.jpeg";
import gambar6Image from "../assets/image/gambar6.jpeg";
import strukturImage from "../assets/image/Struktur.png";
import Faq from "./Faq";
import Footer from "./Footer";

const About = () => {
  const dpdData = [
    {
      daerah: "DPD Aceh",
      anggota: "Ketua DPD : H. Salihin",
      link: "aceh.pmkm-prima.org",
    },
    {
      daerah: "DPD Sumatera Utara",
      anggota: "Ketua DPD : Drs. H. M. Subandi, ST",
      link: "sumut.pmkm-prima.org",
    },
    {
      daerah: "DPD Sumatera Selatan",
      anggota: "Ketua DPD :  Ir. Syaiful Anwar, SH, M.Si",
      link: "sumsel.pmkm-prima.org",
    },
    {
      daerah: "DPD Sumatera Barat",
      anggota: "Ketua DPD : Syafrizal",
      link: "sumbar.pmkm-prima.org",
    },
    {
      daerah: "DPD Bengkulu",
      anggota: "Ketua DPD :",
      link: "bengkulu.pmkm-prima.org",
    },
    { daerah: "DPD Riau", anggota: "Ketua DPD :", link: "riau.pmkm-prima.org" },
    {
      daerah: "DPD Kepulauan Riau",
      anggota: "Ketua DPD : Weril Dasman, CPS.CH.CHT",
      link: "kepri.pmkm-prima.org",
    },
    {
      daerah: "DPD Jambi",
      anggota: "Ketua DPD :",
      link: "jambi.pmkm-prima.org",
    },
    {
      daerah: "DPD Lampung",
      anggota: "Ketua DPD : Ririn Sri Lestari, SKM",
      link: "lampung.pmkm-prima.org",
    },
    {
      daerah: "DPD Bangka Belitung",
      anggota: "Ketua DPD :",
      link: "babel.pmkm-prima.org",
    },
    {
      daerah: "DPD Kalimantan Timur",
      anggota: "Ketua DPD :",
      link: "kaltim.pmkm-prima.org",
    },
    {
      daerah: "DPD Kalimantan Barat",
      anggota: "Ketua DPD : Moses Maharang Putra, SE",
      link: "kalbar.pmkm-prima.org",
    },
    {
      daerah: "DPD Kalimantan Tengah",
      anggota: "Ketua DPD :",
      link: "kalteng.pmkm-prima.org",
    },
    {
      daerah: "DPD Kalimantan Selatan",
      anggota: "Ketua DPD : H. Adam Nugraha Wiradhana,S.AB.HC",
      link: "kalsel.pmkm-prima.org",
    },
    {
      daerah: "DPD Kalimantan Utara",
      anggota: "Ketua DPD :",
      link: "kaltara.pmkm-prima.org",
    },
    {
      daerah: "DPD DKI Jakarta",
      anggota: "Ketua DPD : Ir. H. A. Zacky. A. Dani. MM",
      link: "dkijakarta.pmkm-prima.org",
    },
    {
      daerah: "DPD Banten",
      anggota: "Ketua DPD :",
      link: "banten.pmkm-prima.org",
    },
    {
      daerah: "DPD Jawa Barat",
      anggota: "Ketua DPD : Saddah, SE",
      link: "jabar.pmkm-prima.org",
    },
    {
      daerah: "DPD Jawa Tengah",
      anggota: "Ketua DPD : Dr. Drs. H. Hono Sajati, SH, M.Hum",
      link: "jateng.pmkm-prima.org",
    },
    {
      daerah: "DPD DI Yogyakarta",
      anggota: "Ketua DPD :",
      link: "diy.pmkm-prima.org",
    },
    {
      daerah: "DPD Jawa Timur",
      anggota: "Ketua DPD : M. Rofi'i, ST, MT. CHT",
      link: "jatim.pmkm-prima.org",
    },
    { daerah: "DPD Bali", anggota: "Ketua DPD :", link: "bali.pmkm-prima.org" },
    {
      daerah: "DPD Nusa Tenggara Barat",
      anggota: "Ketua DPD : Datu Rahdin Wangsa, SH",
      link: "ntb.pmkm-prima.org",
    },
    {
      daerah: "DPD Nusa Tenggara Timur",
      anggota: "Ketua DPD : Ai Sirli, SH",
      link: "ntt.pmkm-prima.org",
    },
    {
      daerah: "DPD Sulawesi Utara",
      anggota: "Ketua DPD :",
      link: "sulut.pmkm-prima.org",
    },
    {
      daerah: "DPD Sulawesi Barat",
      anggota: "Ketua DPD :",
      link: "sulbar.pmkm-prima.org",
    },
    {
      daerah: "DPD Sulawesi Tengah",
      anggota: "Ketua DPD :",
      link: "sulteng.pmkm-prima.org",
    },
    {
      daerah: "DPD Gorontalo",
      anggota: "Ketua DPD :",
      link: "gorontalo.pmkm-prima.org",
    },
    {
      daerah: "DPD Sulawesi Tenggara",
      anggota: "Ketua DPD :",
      link: "sultra.pmkm-prima.org",
    },
    {
      daerah: "DPD Sulawesi Selatan",
      anggota: "Ketua DPD",
      link: "sulsel.pmkm-prima.org",
    },
    {
      daerah: "DPD Maluku Utara",
      anggota: "Ketua DPD :",
      link: "malut.pmkm-prima.org",
    },
    {
      daerah: "DPD Maluku",
      anggota: "Ketua DPD :",
      link: "maluku.pmkm-prima.org",
    },
    {
      daerah: "DPD Papua Barat",
      anggota: "Ketua DPD : Ir. Hendrik Sulingan",
      link: "pabar.pmkm-prima.org",
    },
    {
      daerah: "DPD Papua",
      anggota: "Ketua DPD : Arnold Katiandagho, MM, M.Th",
      link: "papua.pmkm-prima.org",
    },
    {
      daerah: "DPD Papua Selatan",
      anggota: "Ketua DPD :",
      link: "pasel.pmkm-prima.org",
    },
    {
      daerah: "DPD Papua Tengah",
      anggota: "Ketua DPD : Yulianus Ukago, SH",
      link: "pateng.pmkm-prima.org",
    },
    {
      daerah: "DPD Papua Pegunungan",
      anggota: "Ketua DPD :",
      link: "papeg.pmkm-prima.org",
    },
    {
      daerah: "DPD Papua Barat Daya",
      anggota: "Ketua DPD : Ali Bara, SH",
      link: "pabada.pmkm-prima.org",
    },
  ];

  return (
    <>
      <NavigationBar />
      <div className="container-head">
        <h1 className="head-about">Sekilas PMKM Prima</h1>
        <p className="paragraf-about">
          Perkumpulan Pengusaha Mikro, Kecil, dan Menengah Prima Indonesia
          adalah sebuah organisasi yang didedikasikan untuk memberikan dukungan
          yang komprehensif kepada pengusaha UMKM dalam upaya mereka untuk
          berkembang dan berhasil dalam bisnis. Didirikan dengan visi untuk
          menjadi suara bersama para pengusaha UMKM di seluruh negeri, kami
          bertekad untuk menciptakan lingkungan yang kondusif bagi pertumbuhan
          dan kesejahteraan UMKM.
          <br />
          <br />
          Kami percaya bahwa UMKM adalah tulang punggung ekonomi lokal dan
          merupakan katalisator penting dalam menciptakan lapangan kerja dan
          mendorong pertumbuhan ekonomi yang inklusif. Oleh karena itu, kami
          berkomitmen untuk memberikan dukungan yang diperlukan kepada para
          pengusaha UMKM agar mereka dapat tumbuh dan bersaing secara efektif di
          pasar yang semakin kompleks.
          <br />
          <br />
          Dengan demikian, kami menawarkan berbagai layanan dan program yang
          dirancang untuk memenuhi kebutuhan unik para pengusaha UMKM, mulai
          dari pelatihan dan pembinaan hingga advokasi bisnis dan jaringan. Kami
          memahami bahwa setiap bisnis memiliki tantangan dan peluang yang
          berbeda, oleh karena itu kami berusaha untuk menyediakan solusi yang
          sesuai dengan kebutuhan dan aspirasi bisnis Anda.
          <br />
          <br />
          Bersama, kita dapat menciptakan masa depan yang lebih cerah dan
          berkelanjutan bagi bisnis UMKM di seluruh negeri.
        </p>
      </div>

      <Image src={strukturImage} className="struktur" alt="Struktur" />


      <Image src={gambar11Image} className="gambar11" alt="Gambar 11" />

      <div className="bg-tengah">
      </div>

      <ul className="dpd-list">
        {dpdData.map((data, index) => (
          <li key={index}>
            <p>
              {data.daerah}
              <span className="plus-sign">+</span>
            </p>
            <p>{data.anggota}</p>
            <a href={data.link} className="dpd-link">
              {data.link}
            </a>
          </li>
        ))}
      </ul>

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

      <button className="btnjadi" type="submit">
        JADI ANGGOTA PMKM PRIMA INDONESIA
      </button>

        <Faq />

        <Footer />

    </>
  );
};

export default About;

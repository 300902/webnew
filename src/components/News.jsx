import NavigationBar from "./NavigationBar";
import Image from "react-bootstrap/Image";
import Pagination from "react-bootstrap/Pagination";
import React, { useState } from "react";
import gambar13Image from "../assets/image/gambar13.jpeg";
import gambar14Image from "../assets/image/gambar14.jpeg";
import gambar15Image from "../assets/image/gambar15.png";
import gambar16Image from "../assets/image/gambar16.png";
import gambar17Image from "../assets/image/gambar17.jpeg";
import gambar18Image from "../assets/image/gambar18.png";
import gambar19Image from "../assets/image/gambar19.jpeg";
import gambar20Image from "../assets/image/gambar20.png";
import gambar21Image from "../assets/image/gambar21.png";
import gambar22Image from "../assets/image/gambar22.png";
import Faq from "./Faq";
import Footer from "./Footer";

const News = () => {
  const newsItems = [
    {
      image: gambar13Image,
      date: "Februari 19, 2024",
      paragraph: "UMKM Kuliner Beromzet Miliaran, Ini 5 Rahasianya!",
    },
    {
      image: gambar14Image,
      date: "Februari 18, 2024",
      paragraph: "BNI Salurkan Kredit UMKM Rp 142,3 Triliun per September 2023",
    },
    {
      image: gambar15Image,
      date: "Februari 16, 2024",
      paragraph:
        "Erick Thohir : 30 Juta UMKM RI Perlu Didorong Masuk E-commerce",
    },
    {
      image: gambar16Image,
      date: "Februari 14, 2024",
      paragraph: "Kemenkop UKM Gandeng Blibli Dukung UMKM Naik Kelas",
    },
    {
      image: gambar17Image,
      date: "Februari 12, 2024",
      paragraph: "Tips Jitu Meningkatkan Penjualan UMKM di Era Digital",
    },
    {
      image: gambar18Image,
      date: "Februari 9, 2024",
      paragraph: "5 Tantangan UMKM Indonesia di Era Digital",
    },
    {
      image: gambar19Image,
      date: "Februari 7, 2024",
      paragraph:
        "Kisah Inspiratif UMKM : Dari Jualan Sate di Pinggir Jalan Kini Punya Restoran",
    },
    {
      image: gambar20Image,
      date: "Februari 5, 2024",
      paragraph: "Strategi UMKM Bertahan di Tengah Ancaman Resesi",
    },
    {
      image: gambar21Image,
      date: "Februaru 3, 2024",
      paragraph:
        "Pemerintah Luncurkan Program Baru untuk Dorong UMKM Naik Kelas",
    },
    {
      image: gambar22Image,
      date: "Februari 2, 2024",
      paragraph: "Pentingnya Digitalisasi bagi UMKM di Era New Normal",
    },
  ];

  const itemsPerPage = 10;
  const totalPages = Math.ceil(newsItems.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const changePage = (newPage) => {
    setCurrentPage(newPage);
  };

  const displayedItems = newsItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>
      <NavigationBar />
      <div className="judul-news"></div>
      <div className="container-news">
        <div className="news-grid">
          {displayedItems.map((newsItem, i) => (
            <div className="news-item" key={i}>
              <Image src={newsItem.image} alt="News" />
              <p className="news-date">{newsItem.date}</p>
              <p className="news-paragraph1">{newsItem.paragraph}</p>
            </div>
          ))}
        </div>
        <Pagination className="pagination-center">
          <Pagination.First onClick={() => changePage(1)} />
          <Pagination.Prev
            onClick={() => currentPage > 1 && changePage(currentPage - 1)}
          />
          {[...Array(totalPages).keys()].map((page, i) => (
            <Pagination.Item
              key={i}
              active={page + 1 === currentPage}
              onClick={() => changePage(page + 1)}
            >
              {page + 1}
            </Pagination.Item>
          ))}
          <Pagination.Next
            onClick={() =>
              currentPage < totalPages && changePage(currentPage + 1)
            }
          />
          <Pagination.Last onClick={() => changePage(totalPages)} />
        </Pagination>
      </div>

      <button className="btnjadi" type="submit">
        JADI ANGGOTA PMKM PRIMA INDONESIA
      </button>

      <Faq />

      <Footer />
    </>
  );
};

export default News;

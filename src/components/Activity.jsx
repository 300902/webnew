import NavigationBar from "./NavigationBar";
import Image from "react-bootstrap/Image";
import { Pagination } from "react-bootstrap";
import React, { useState } from "react";
import gambar23Image from "../assets/image/gambar23.jpeg";
import gambar24Image from "../assets/image/gambar24.jpeg";
import gambar25Image from "../assets/image/gambar25.jpeg";
import gambar26Image from "../assets/image/gambar26.jpeg";
import Faq from "./Faq";
import Footer from "./Footer";

const Activity = () => {
  const activityItems = [
    {
      image: gambar23Image,
      paragraph:
        "Business Marketing Live Webinar",
      date: "Februari 7, 2024",
      time: "19 : 00 - Selesai",
    },
    {
      image: gambar24Image,
      paragraph:
        "Digital Marketing Webinar",
      date: "Februari 5, 2024",
      time: "19 : 00 - Selesai",
    },
    {
      image: gambar25Image,
      paragraph:
        "Business Marketing Live Webinar",
      date: "Februaru 3, 2024",
      time: "19 : 00 - Selesai",
    },
    {
      image: gambar26Image,
      paragraph:
        "Marketing Strategies",
      date: "Februari 2, 2024",
      time: "19 : 00 - Selesai",
    },
  ];

  const itemsPerPage = 4;
  const totalPages = Math.ceil(activityItems.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const changePage = (newPage) => {
    setCurrentPage(newPage);
  };

  const displayedItems = activityItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  return (
    <>
      <NavigationBar />
      <div className="judul-activity"></div>
      <div className="container-activity">
        <div className="activity-grid">
          {displayedItems.map((activityItem, i) => (
            <div className="activity-item" key={i}>
              <Image src={activityItem.image} alt="News" />
              <p className="activity-paragraph1">{activityItem.paragraph}</p>
              <p className="activity-date">{activityItem.date}</p>
              <p className="activity-time">{activityItem.time}</p>
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

export default Activity;

import Container from "react-bootstrap/Container";
import React, { useState, useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logoImage from "../assets/image/logo.jpeg";
import Image from "react-bootstrap/Image";
import gambarImage from "../assets/image/gambar.png";
import { useLocation, NavLink } from "react-router-dom";
import aboutImage from "../assets/image/bgabout.jpeg"; // Change this to the path of your image
import programImage from "../assets/image/bgprogram.jpeg"; // Ganti dengan path ke gambar untuk halaman Program
import newsImage from "../assets/image/bgnews.jpeg"; // Ganti dengan path ke gambar untuk halaman Berita
import activityImage from "../assets/image/bgactivity.jpeg"; // Ganti dengan path ke gambar untuk halaman Kegiatan

function NavigationBar() {
  const location = useLocation();
  const isAboutPage = location.pathname === "/about";
  const isProgramPage = location.pathname === "/program";
  const isNewsPage = location.pathname === "/news";
  const isActivityPage = location.pathname === "/activity";

  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  let navbarClasses = ["navbar"];
  if (scrolled) {
    navbarClasses.push("scrolled");
  }

  if (isProgramPage) {
    navbarClasses.push("program-page");
  }

  if (isAboutPage) {
    navbarClasses.push("about-page");
  }

  if (isNewsPage) {
    navbarClasses.push("news-page");
  }

  return (
    <>
      <Navbar className={navbarClasses.join(" ")} expand="lg" fixed="top">
        <Container>
          <Navbar.Brand href="/" clas>
            <Image
              src={logoImage}
              className="d-inline-block align-top logo"
              alt="Logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
              <NavLink
                exact
                to="/"
                className="nav-link"
                activeClassName="active-link"
              >
                Beranda
              </NavLink>
              <NavLink
                to="/about"
                className="nav-link"
                activeClassName="active-link"
              >
                Tentang
              </NavLink>
              <NavLink
                to="/program"
                className="nav-link"
                activeClassName="active-link"
              >
                Program Strategis
              </NavLink>
              <NavLink
                to="/news"
                className="nav-link"
                activeClassName="active-link"
              >
                Berita
              </NavLink>
              <NavLink
                to="/activity"
                className="nav-link"
                activeClassName="active-link"
              >
                Kegiatan
              </NavLink>
              <NavLink
                to="/anggota"
                className="nav-link"
                activeClassName="active-link"
              >
                Anggota
              </NavLink>
            </Nav>
          </Navbar.Collapse>
          <button className="tombol1">GABUNG</button>
        </Container>
      </Navbar>

      <div className="d-flex justify-content-center position-relative">
        <Image
          src={
            isProgramPage
              ? programImage
              : isAboutPage
              ? aboutImage
              : isNewsPage
              ? newsImage
              : isActivityPage
              ? activityImage
              : gambarImage
          }
          width="100%"
          height="auto"
          className="d-inline-block align-top position-relative img-fluid"
          alt="Image"
        />
        <div
          className="position-absolute"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          {isAboutPage && (
            <>
              <p className="about-paragraph">
                {isAboutPage
                  ? "BANGKIT BERSATU DARI, OLEH, UNTUK UMKM DAN NEGERI"
                  : "PMKM PRIMA INDONESIA"}
              </p>
              <p className="about-paragraph2">
                {
                  "PMKM Prima Indonesia bersifat terbuka, independen, non partisan, tidak berpolitik praktis, tidak terikat kekuatan politik, atau partai politik tertentu."
                }
              </p>
            </>
          )}
          {isProgramPage && (
            <>
              <p className="program-paragraph">
                {"MENCIPTAKAN EKOSISTEM PERTUMBUHAN BERKELANJUTAN UMKM"}
              </p>

              <p className="program-paragraph2">
                {"14 Program Strategis untuk mendukung pertumbuhan UMKM"}
              </p>
            </>
          )}

          {isNewsPage && (
            <>
              <p className="news-paragraph">{"UPDATE TERKAIT"}</p>

              <p className="news-paragraph2">{"UMKM DALAM DAN LUAR NEGERI"}</p>
            </>
          )}

          {isActivityPage && (
            <>
              <p className="activity-paragraph">{"EVENT TERKAIT "}</p>
              <p className="activity-paragraph2">
                {"UMKM DALAM DAN LUAR NEGERI"}
              </p>
            </>
          )}
        </div>
      </div>
      {!isAboutPage && !isProgramPage && !isNewsPage && !isActivityPage && (
        <>
          <p className="dewan">
            DEWAN PIMPINAN PUSAT
            <br />
            <br />
            PERKUMPULAN
            <br />
            PENGUSAHA MIKRO KECIL
            <br />
            MENENGAH PRIMA INDONESIA
          </p>
          <p className="dpp">(DPP PMKM PRIMA INDONESIA)</p>
          <p className="umkm">
            Perkumpulan para pelaku dan penggiat UMKM di Indonesia
            <br /> 
            dan luar negeri, hadir untuk memperkuat pelaku UMKM
          </p>
        </>
      )}
    </>
  );
}

export default NavigationBar;

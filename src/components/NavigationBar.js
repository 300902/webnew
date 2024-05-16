import Container from "react-bootstrap/Container";
import React, { useState, useEffect } from 'react';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logoImage from "../assets/image/logo.jpeg";
import Image from "react-bootstrap/Image";
import gambarImage from "../assets/image/gambar.png";

function NavigationBar() {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200 ) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  })

  let navbarClasses=['navbar'];
  if(scrolled){
    navbarClasses.push('scrolled');
  }
  return (
    <>
      <Navbar className={navbarClasses.join(" ")} expand="lg" fixed="top">
        <Container>
          <Navbar.Brand href="/">
            <Image
              src={logoImage}
              className="d-inline-block align-top logo"
              alt="Logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto tabel">
              <Nav.Link href="/">Beranda</Nav.Link>
              <Nav.Link href="/about">Tentang</Nav.Link>
              <Nav.Link href="/program">Program Strategis</Nav.Link>
              <Nav.Link href="/news">Berita</Nav.Link>
              <Nav.Link href="/activity">Kegiatan</Nav.Link>
              <Nav.Link href="/anggota">Anggota</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <button className="tombol1">GABUNG</button>
        </Container>
      </Navbar>
      <div className="d-flex justify-content-center position relative">
        <Image
          src={gambarImage}
          width="100%"
          height="auto"
          className="d-inline-block align-top position-relative img-fluid"
          alt="Image"
        />
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
      </div>
    </>
  );
}

export default NavigationBar;

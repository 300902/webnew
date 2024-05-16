import React from "react";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import logoImage from "../assets/image/logo.jpeg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footersection">
        <div className="footercontainer">
          <div className="ftlink">
            <ul className="linkft" style={{ listStyle: "none" }}>
              <li>
                <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                  Beranda
                </Link>
              </li>
              <li>
                <Link
                  to="/tentang"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Tentang
                </Link>
              </li>
              <li>
                <Link
                  to="/program-strategis"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Program Strategis
                </Link>
              </li>
              <li>
                <Link
                  to="/anggota"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Anggota
                </Link>
              </li>
            </ul>
          </div>
          <div className="ftlink">
            <ul className="linkft" style={{ listStyle: "none" }}>
              <li>
                <a
                  href="https://www.instagram.com/"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Youtube
                </a>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com/"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  TikTok
                </a>
              </li>
            </ul>
          </div>
          <div className="ftlink">
            <ul className="linkft" style={{ listStyle: "none" }}>
              <li>
                <Link
                  to="/berita"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Email
                </Link>
              </li>{" "}
              {/* Pindahkan link email ke sini */}
            </ul>
          </div>
        </div>
        <div className="containeremail">
          <div className="emailhead">
            <h4>
              Silahkan masukkan email anda untuk mendapatkan
              <br />
              informasi terbaru terkait UMKM
            </h4>
            <form className="email">
              <input
                className="email"
                type="email"
                placeholder="Masukkan email"
              />
              <button className="btnsubmit" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
        <Image
          src={logoImage}
          className="d-inline-block align-top logo1"
          alt="Logo"
        />
        <p className="pdewan"> DEWAN PIMPINAN PUSAT  </p>
        <br />
        <p> PERKUMPULAN
            <br /> 
            PENGUSAHA MIKRO KECIL
            <br /> 
            MENENGAH PRIMA INDONESIA  </p>
      </div>
    </footer>
  );
};

export default Footer;

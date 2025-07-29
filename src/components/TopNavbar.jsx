import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Pastikan ini diimpor!
import './HalamanUtama.css'; // Tetap impor CSS yang sama

const TopNavbar = () => {
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container fluid className="px-5">
        {/* Ubah Navbar.Brand menjadi Link dari react-router-dom */}
        <Navbar.Brand as={Link} to="/"> {/* 'as={Link}' render Navbar.Brand sebagai Link, 'to="/"' mengarah ke homepage */}
           <img
            src="images/LogoParoki.png"
            width="75"
            height="75"
            className="d-inline-block align-top me-2 logo-navbar"
            alt="Logo Gereja St. Martinus"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto custom-nav-links">
            <NavDropdown title="Profil Gereja" id="profil-gereja-dropdown" className="nav-item-custom">
              <NavDropdown.Item as={Link} to="/sejarah-paroki">Sejarah</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/visi-misi-paroki">Visi & Misi</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/pastor-paroki">Pastor Paroki</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Stasi - Stasi" id="stasi-stasi-dropdown" className="nav-item-custom">
              <NavDropdown.Item as={Link} to="/wilayah-pusat">Wilayah Pusat</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/balai-pinang-hulu">Balai Pinang Hulu</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/marawa">Merawa</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/sekucing-labar">Sekucing Labai</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/labai-hilir">Labai Hilir</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Spiritualitas" id="spiritualitas-dropdown" className="nav-item-custom">
              <NavDropdown.Item as={Link} to="/labai-hilir">Doa & Liturgi</NavDropdown.Item>
              <NavDropdown.Item href="#spiritualitas-item-2">Sakramen</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Informasi" id="informasi-dropdown" className="nav-item-custom">
              <NavDropdown.Item href="#informasi-item-1">Pengumuman</NavDropdown.Item>
              <NavDropdown.Item href="#informasi-item-2">Kegiatan</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopNavbar;
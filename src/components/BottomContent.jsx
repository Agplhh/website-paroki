import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './HalamanUtama.css'; 

const BottomContent = () => {
  return (
    <>
      <Container fluid className="footer-section py-5 px-md-5 px-3">
        <Row className="justify-content-center text-center text-md-start align-items-start">
          <Col md={4} className="mb-4 mb-md-0 d-flex flex-column align-items-center align-items-md-start">
            <img
              src="images/LogoParoki.png"
              width="120"
              height="120"
              alt="Logo Gereja St. Martinus Balai Berkuak"
              className="mb-3 logo-footer"
            />
            <p className="footer-address-text">
              F9F9+RHG, Balai Pinang, Kec. Simpang Hulu, Kabupaten Ketapang, Kalimantan Barat 78854
            </p>
          </Col>
          <Col md={4} className="mb-4 mb-md-0 text-center">
            <h4 className="footer-heading mb-4">Jadwal Ekaristi</h4>
            <p className="mb-2 footer-schedule-label">Harian</p>
            <p className="mb-3 footer-schedule-text">Senin - Sabtu 05.30 WIB</p>
            <p className="mb-2 footer-schedule-label">Mingguan</p>
            <p className="footer-schedule-text">Minggu 07.00, 09.00 WIB</p>
          </Col>
          <Col md={4} className="text-center text-md-end d-flex flex-column align-items-center align-items-md-end footer-akses-umat-col">
            <h4 className="footer-heading footer-akses-umat-heading">Akses Umat</h4>
            <Button variant="light" className="download-button">Unduh Formulir Gereja</Button>
          </Col>
        </Row>
      </Container>

      <div className="copyright-section py-3 text-center">
        <p className="mb-0 copyright-text">Copyright 2025 Gereja St. Martinus Balai Berkuak</p>
      </div>
    </>
  );
};

export default BottomContent;
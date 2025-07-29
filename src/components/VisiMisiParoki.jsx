import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './VisiMisiParoki.css';
import TopNavbar from './TopNavbar';
import BottomContent from './BottomContent';

const VisiMisiParoki = () => {
  return (
    <div className="visimisi-paroki-page">
      <TopNavbar />

      <Container className="visimisi-content-wrapper my-5 p-4 p-md-5">
        <h1 className="visimisi-title text-center mb-5">PAROKI SANTO MARTINUS BALAI BERKUAK</h1>

        <Row className="mb-5 align-items-center visimisi-section">
          <Col md={3} className="text-md-end text-center pe-md-4">
            <h2 className="section-heading">VISI</h2>
          </Col>
          <Col md={9} className="text-md-start text-center ps-md-4">
            <p className="section-text">
              "GEREJA KEUSKUPAN KETAPANG SEBAGAI PERSAUDARAAN MURID-MURID YESUS KRISTUS YANG SEMAKIN TANGGUH DALAM BERIMAN DAN DALAM PELAYANAN KASIH"
            </p>
          </Col>
        </Row>

        <Row className="mb-5 align-items-center visimisi-section">
          <Col md={3} className="text-md-end text-center pe-md-4">
            <h2 className="section-heading">MISI</h2>
          </Col>
          <Col md={9} className="text-md-start text-center ps-md-4">
            <p className="section-text">
              "MEMBINA KADER IMAN MENGAJARKAN IMAN PADA UMAT MELAKSANAKAN PELAYANAN KASIH KEPADA YANG MENDERITA KECIL, LEMAH, MISKIN, TERSINGKIR, DAN DIFABEL MELAKSANAKAN PELAYANAN KASIH KEPADA ALAM CIPTAAN MENGEMBANGKAN TATA KELOLA PENGEMBALAAN ADMINISTRASI, HARTA BENDA DAN KEUANGAN YANG DAPAT DIPERCAYA"
            </p>
          </Col>
        </Row>

        <Row className="mb-5 align-items-center visimisi-section">
          <Col md={3} className="text-md-end text-center pe-md-4">
            <h2 className="section-heading">NILAI-NILAI</h2>
          </Col>
          <Col md={9} className="text-md-start text-center ps-md-4">
            <p className="section-text">
              "BELARASA, SABAR, RENDAH HATI, TANGGUH, PROFESIONAL, KREATIF, PARTISIPATIF"
            </p>
          </Col>
        </Row>

        <Row className="mb-3 align-items-center visimisi-section">
          <Col md={3} className="text-md-end text-center pe-md-4">
            <h2 className="section-heading">MOTTO</h2>
          </Col>
          <Col md={9} className="text-md-start text-center ps-md-4">
            <p className="section-text">
              "SEMAKIN BERIMAN, SEMAKIN BERSAUDARA, DAN SEMAKIN BERBELARASA"
            </p>
          </Col>
        </Row>
      </Container>

      <BottomContent />
    </div>
  );
};

export default VisiMisiParoki;
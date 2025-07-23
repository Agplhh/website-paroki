import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './PastorParoki.css'; // Pastikan ini mengarah ke CSS yang akan kita ubah
import TopNavbar from './TopNavbar';
import BottomContent from './BottomContent';

const PastorParoki = () => {
  const pastors = [
    {
      id: 1,
      name: 'RD Cyrilus Ndora',
      title: 'Pastor Kepala Paroki',
      imageUrl: 'images/RomoCr.png', // Pastikan path ini benar di folder public/images/
      description: 'Melayani sebagai gembala utama Paroki Santo Martinus Balai Berkuak, bertanggung jawab atas arah pastoral dan spiritual umat.'
    },
    {
      id: 2,
      name: 'RD. Thomas Sunarto',
      title: 'Pastor Rekan / Asisten Pelayanan Sakramental',
      imageUrl: 'images/RomoNarto.png', // Pastikan path ini benar di folder public/images/
      description: 'Mendukung Pastor Kepala Paroki dalam berbagai kegiatan pastoral dan pelayanan sakramental kepada umat.'
    },
    {
      id: 3,
      name: 'RD. Yosafat Elly Dhita Karunia',
      title: 'Pastor Rekan / Koordinator Kategorial',
      imageUrl: 'images/RomoDhita.png', // Pastikan path ini benar di folder public/images/
      description: 'Bertugas mengkoordinasi kegiatan kelompok kategorial dan mengembangkan spiritualitas komunitas di paroki.'
    },
  ];

  return (
    <div className="pastor-paroki-page">
      <TopNavbar />

      <Container className="pastor-content-wrapper my-5 p-4 p-md-5">
        <h1 className="pastor-title text-center mb-5">PASTOR PAROKI</h1>

        <Row className="justify-content-center">
          {pastors.map((pastor) => (
            <Col key={pastor.id} md={4} sm={6} xs={12} className="mb-4 d-flex">
              <Card className="pastor-card h-100">
                <Card.Img variant="top" src={pastor.imageUrl} alt={pastor.name} className="pastor-image" />
                <Card.Body className="d-flex flex-column"> 
                  <div>
                    <Card.Title className="pastor-name">{pastor.name}</Card.Title>
                    <Card.Text className="pastor-title-text">{pastor.title}</Card.Text>
                    <Card.Text className="pastor-description">{pastor.description}</Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <BottomContent />
    </div>
  );
};

export default PastorParoki;
import React, { useEffect, useState } from 'react';
import { db } from '../firebase-config';
import { collection, query, getDocs, limit } from 'firebase/firestore';
import { Container, Row, Col, Card, Spinner, Alert, Carousel } from 'react-bootstrap';
import './HalamanUtama.css';

const DaftarStasi = ({ collectionName }) => {
  const [stasiData, setStasiData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getImageUrl = (url, altText = 'Gambar') => {
    if (!url) {
      console.warn(`URL gambar kosong atau null. Menggunakan placeholder untuk: ${altText}`);
      return 'placeholder.jpg';
    }
    const convertedUrl = url.replace('https://drive.google.com/uc?export=view&id=', 'https://lh3.googleusercontent.com/d/');
    return convertedUrl;
  };

  useEffect(() => {
    const fetchStasiData = async () => {
      setLoading(true);
      setError(null);

      try {
        if (!collectionName) {
          setStasiData([]);
          setLoading(false);
          return;
        }

        const stasiRef = collection(db, collectionName);
        const q = query(stasiRef, limit(10));
        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setStasiData(data);
      } catch (err) {
        console.error("Error fetching stasi data: ", err);
        setError("Gagal memuat data stasi. Silakan coba lagi nanti.");
      } finally {
        setLoading(false);
      }
    };

    fetchStasiData();
  }, [collectionName]);

  if (loading) {
    return (
      <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '50vh' }}>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Memuat...</span>
        </Spinner>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="my-5">
        <Alert variant="danger" className="text-center">{error}</Alert>
      </Container>
    );
  }

  if (stasiData.length === 0) {
    return (
      <Container className="my-5">
        <Alert variant="info" className="text-center">
          Tidak ada data yang tersedia untuk stasi "{collectionName}".
        </Alert>
      </Container>
    );
  }

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        {stasiData.map((data) => (
          <Col md={6} lg={4} className="mb-4" key={data.id}>
            <Card className="shadow-sm h-100 d-flex flex-column">
              {data.foto && data.foto.length > 0 ? (
                data.foto.length > 1 ? (
                  <Carousel indicators={true} controls={true} interval={null}>
                    {data.foto.map((fotoUrl, index) => (
                      <Carousel.Item key={index}>
                        <img
                          className="d-block w-100"
                          src={getImageUrl(fotoUrl, `Foto ${data.nama || 'Stasi'} ${index + 1}`)}
                          alt={`Foto ${data.nama || 'Stasi'} ${index + 1}`}
                          style={{ height: '200px', objectFit: 'cover' }}
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = 'placeholder.jpg';
                            console.error(`Gagal memuat gambar: ${e.target.src}`);
                          }}
                        />
                      </Carousel.Item>
                    ))}
                  </Carousel>
                ) : (
                  <Card.Img
                    variant="top"
                    src={getImageUrl(data.foto[0], `Foto ${data.nama || 'Stasi'}`)}
                    alt={`Foto ${data.nama || 'Stasi'}`}
                    style={{ height: '200px', objectFit: 'cover' }}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'placeholder.jpg';
                      console.error(`Gagal memuat gambar: ${e.target.src}`);
                    }}
                  />
                )
              ) : (
                <Card.Img
                  variant="top"
                  src="placeholder.jpg"
                  alt="Tidak Ada Foto"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
              )}

              <Card.Body className="d-flex flex-column">
                <Card.Title className="mb-2">
                  {data.nama || 'Nama Stasi Tidak Tersedia'}
                </Card.Title>
                <Card.Text>
                  <strong>Alamat:</strong> {data.alamat || 'Tidak Tersedia'}
                </Card.Text>
                <Card.Text>
                  <strong>Dominasi:</strong> {data.dominasi || 'Tidak Tersedia'}
                </Card.Text>
                <Card.Text>
                  <strong>Jumlah Umat:</strong> {data.jumlahUmat || 'Tidak Tersedia'}
                </Card.Text>
                <Card.Text>
                  <strong>Kapasitas:</strong> {data.kapasitas || 'Tidak Tersedia'}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default DaftarStasi;

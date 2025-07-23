import React, { useEffect, useState } from 'react';
import { db } from '../firebase-config'; 
import { collection, query, getDocs, limit } from 'firebase/firestore';
import { Container, Row, Col, Card, Spinner, Alert } from 'react-bootstrap';
import './DaftarStasi.css'; 

const DaftarStasi = ({ collectionName }) => {
  const [stasiData, setStasiData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getStasiData = async () => {
      setLoading(true);
      setError(null);
      try {
        if (!collectionName) {
          setError("Nama koleksi tidak diberikan untuk DaftarStasi.");
          setLoading(false);
          return;
        }

        const stasiRef = collection(db, collectionName);
        const q = query(stasiRef, limit(10));

        const querySnapshot = await getDocs(q);
        const data = [];
        querySnapshot.forEach((doc) => {
          data.push({ id: doc.id, ...doc.data() });
        });
        setStasiData(data);
      } catch (err) {
        console.error("Error fetching stasi data for", collectionName, ": ", err);
        setError(`Gagal memuat data stasi "${collectionName}". Silakan coba lagi. (${err.message})`);
      } finally {
        setLoading(false);
      }
    };

    getStasiData();
  }, [collectionName]);

  const formatGoogleDriveUrl = (url) => {
    if (url && url.includes('drive.google.com/uc?export=view&id=')) {
      return url.replace('https://drive.google.com/uc?export=view&id=', 'https://drive.google.com/thumbnail?id=');
    }
    return url;
  };

  if (loading) {
    return (
      <Container className="d-flex justify-content-center align-items-center stasi-loading-spinner" style={{ minHeight: '50vh' }}>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="my-5">
        <Alert variant="danger">{error}</Alert>
      </Container>
    );
  }

  if (stasiData.length === 0) {
    return (
      <Container className="my-5">
        <Alert variant="info">Tidak ada data untuk stasi "{collectionName}". Pastikan koleksi ada dan berisi dokumen.</Alert>
      </Container>
    );
  }

  return (
    <Container className="stasi-list-container my-5">
      <h2 className="stasi-list-title text-center mb-5">Informasi Stasi {stasiData[0]?.nama?.split(' ')[1] || collectionName}</h2>
      <Row className="justify-content-center g-4"> 
        {stasiData.map((data) => (
          <Col key={data.id} xs={12} md={6} lg={4}> 
            <Card className="stasi-card h-100 shadow-sm border-0 rounded-4 overflow-hidden">
              {data.foto && data.foto.length > 0 ? (
                <div className="stasi-card-img-wrapper">
                  <Card.Img
                    variant="top"
                    src={formatGoogleDriveUrl(data.foto[0])}
                    alt={`Foto ${data.nama}`}
                    className="stasi-card-main-img"
                  />
                </div>
              ) : (
                <div className="stasi-card-img-placeholder d-flex align-items-center justify-content-center">
                  <span className="text-muted">Tidak Ada Foto</span>
                </div>
              )}
              <Card.Body className="d-flex flex-column p-4">
                <Card.Title className="stasi-card-title text-center mb-3">
                  {data.nama || 'Nama Stasi Tidak Tersedia'}
                </Card.Title>
                <div className="stasi-card-details flex-grow-1">
                  <p><strong>Alamat:</strong> {data.alamat || 'Tidak Tersedia'}</p>
                  <p><strong>Dominasi:</strong> {data.dominasi || 'Tidak Tersedia'}</p>
                  <p><strong>Jumlah Umat:</strong> {data.jumlahUmat || 'Tidak Tersedia'}</p>
                  <p><strong>Kapasitas:</strong> {data.kapasitas || 'Tidak Tersedia'}</p>
                </div>
                {data.foto && data.foto.slice(1).length > 0 && (
                  <div className="stasi-card-gallery mt-3 pt-3 border-top text-center">
                    <small className="text-muted d-block mb-2">Galeri Tambahan:</small>
                    <div className="d-flex flex-wrap justify-content-center">
                      {data.foto.slice(1).map((fotoUrl, index) => (
                        <img
                          key={index}
                          src={formatGoogleDriveUrl(fotoUrl)}
                          alt={`Foto ${data.nama} ${index + 2}`}
                          className="stasi-card-thumbnail mx-1 my-1"
                        />
                      ))}
                    </div>
                  </div>
                )}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default DaftarStasi;
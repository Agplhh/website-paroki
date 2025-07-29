import React, { useState, useEffect } from 'react';
import { collection, query, orderBy, getDocs } from 'firebase/firestore'; 
import { db } from '../firebase-config'; 

import TopNavbar from './TopNavbar';
import BottomContent from './BottomContent';
import CardKegiatan from './CardKegiatan'; 

import { Container, Row, Col, Spinner, Alert } from 'react-bootstrap'; 

const Kegiatan = () => {
  const [kegiatanData, setKegiatanData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchKegiatan = async () => {
      try {
        const kegiatanCollectionRef = collection(db, 'Kegiatan');
        const q = query(kegiatanCollectionRef, orderBy('waktu', 'desc'));
        
        const querySnapshot = await getDocs(q);
        
        const fetchedData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        
        setKegiatanData(fetchedData);
      } catch (err) {
        console.error("Error fetching kegiatan data:", err);
        setError("Gagal memuat data kegiatan. Silakan coba lagi nanti.");
      } finally {
        setLoading(false);
      }
    };

    fetchKegiatan();
  }, []); 
  
  if (loading) {
    return (
      <>
        <TopNavbar />
        <Container className="text-center py-5">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
          <p className="mt-2">Memuat daftar kegiatan...</p>
        </Container>
        <BottomContent />
      </>
    );
  }

  if (error) {
    return (
      <>
        <TopNavbar />
        <Container className="py-5">
          <Alert variant="danger">{error}</Alert>
        </Container>
        <BottomContent />
      </>
    );
  }

  return (
    <>
      <TopNavbar />
      <Container className="my-5">
        <h2 className="mb-4 text-center">Daftar Kegiatan</h2>
        {kegiatanData.length === 0 ? (
          <Alert variant="info" className="text-center">Belum ada kegiatan yang dipublikasikan.</Alert>
        ) : (
          <Row xs={1} md={2} lg={3} className="g-4">
            {kegiatanData.map((item) => (
              <Col key={item.id} className="d-flex"> 
                <CardKegiatan item={item} />
              </Col>
            ))}
          </Row>
        )}
      </Container>
      <BottomContent />
    </>
  );
};

export default Kegiatan;
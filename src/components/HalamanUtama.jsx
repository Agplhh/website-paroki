import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Spinner } from 'react-bootstrap';
import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore';
import { db } from '../firebase-config'; 

import TopNavbar from './TopNavbar';
import CarouselSection from './CarouselSection';
import BottomContent from './BottomContent';
import './HalamanUtama.css';

const HalamanUtama = () => {
  const [kegiatan, setKegiatan] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getImageUrl = (url, altText = 'Gambar') => {
    if (!url || typeof url !== 'string' || url.trim() === '') {
      console.warn(`URL gambar kosong, null, atau tidak valid. Menggunakan placeholder untuk: ${altText}`);
      return '/images/no-image.png'; 
    }

    if (url.includes('https://drive.google.com/uc?export=view&id=')) {
      const fileIdMatch = url.match(/id=([^&]+)/);
      if (fileIdMatch && fileIdMatch[1]) {
        const fileId = fileIdMatch[1];
        const convertedUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
        console.log(`Mengonversi URL Google Drive: ${url} -> ${convertedUrl}`);
        return convertedUrl;
      } else {
        console.warn(`Tidak dapat mengekstrak ID dari URL Google Drive: ${url}. Menggunakan placeholder.`);
        return '/images/no-image.png';
      }
    }
    return url.trim();
  };

  useEffect(() => {
    const fetchKegiatan = async () => {
      try {
        const kegiatanCollectionRef = collection(db, 'Kegiatan');
        const q = query(
          kegiatanCollectionRef,
          orderBy('waktu', 'desc'),
          limit(3)
        );

        const querySnapshot = await getDocs(q); 
        
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        
        setKegiatan(data);
      } catch (err) {
        console.error('Gagal mengambil data kegiatan dari Firebase:', err);
        setError('Gagal memuat data kegiatan. Silakan coba lagi nanti.');
      } finally {
        setLoading(false);
      }
    };

    fetchKegiatan();
  }, []);

  const formatTanggal = (timestamp) => {
    if (!timestamp || !timestamp.toDate) {
      console.warn("Format timestamp tidak valid:", timestamp);
      return '';
    }
    try {
      const date = timestamp.toDate();
      const options = { day: '2-digit', month: 'short', year: '2-digit' };
      return date.toLocaleDateString('id-ID', options);
    } catch (e) {
      console.error("Kesalahan saat memformat tanggal:", e, "untuk timestamp:", timestamp);
      return '';
    }
  };

  return (
    <div className="halaman-utama">
      <TopNavbar />

      <div className='mt-5'>
        <CarouselSection />
      </div>

      {/* Bagian Kegiatan Terbaru */}
      <Container className="my-5">
        <h2 className="text-center mb-4">Kegiatan Terbaru</h2>
        <Row>
          {loading ? (
            <Col xs={12} className="text-center py-5">
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
              <p className="mt-2">Memuat kegiatan...</p>
            </Col>
          ) : error ? (
            <Col xs={12} className="text-center py-5">
              <p className="text-danger">{error}</p>
            </Col>
          ) : kegiatan.length === 0 ? (
            <Col xs={12} className="text-center py-5">
              <p>Tidak ada kegiatan terbaru tersedia saat ini.</p>
            </Col>
          ) : (
            kegiatan.map((item) => (
              <Col md={4} sm={6} xs={12} className="mb-4 d-flex" key={item.id}>

                <Card className="shadow-sm h-100 w-100">
                  <Card.Img
                    variant="top"
                    src={getImageUrl(item.foto1, item.judul)}
                    alt={item.judul || 'Gambar Kegiatan'}
                    style={{ height: '200px', objectFit: 'cover' }}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/images/no-image.png';
                      console.warn(`Gagal memuat gambar dari URL asli (${item.foto1} atau yang dikonversi). Menggunakan placeholder final.`);
                    }}
                  />
                  <Card.Body className="d-flex flex-column">
                    <Card.Title className="fw-bold mb-2 text-truncate">{item.judul}</Card.Title>
                    <Card.Subtitle
                      className="mb-2 text-muted"
                      style={{ fontStyle: 'italic', color: '#d38c0d' }}
                    >
                      {formatTanggal(item.waktu)}
                    </Card.Subtitle>
                    <Card.Text className="flex-grow-1">
                      {item.konten ? item.konten.slice(0, 200) : ''}
                      {item.konten && item.konten.length > 200 ? '...' : ''}
                    </Card.Text>
                    <div className="mt-auto">
                      <a href={`/kegiatan/${item.id}`} className="text-secondary fw-semibold">
                        Baca Selengkapnya
                      </a>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))
          )}
        </Row>
        {kegiatan.length > 0 && ( 
          <div className="text-center mt-4">
            <a href="/kegiatan" className="btn btn-secondary">
              Lihat Semua Kegiatan
            </a>
          </div>
        )}
      </Container>

      <BottomContent />
    </div>
  );
};

export default HalamanUtama;
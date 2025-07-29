import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase-config';
import { Container, Spinner, Alert, Image } from 'react-bootstrap';
import TopNavbar from './TopNavbar';
import BottomContent from './BottomContent';

const HalamanDetailKegiatan = () => {
  const { id } = useParams();
  const [kegiatan, setKegiatan] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getImageUrl = (url) => {
    if (!url || typeof url !== 'string' || url.trim() === '') {
      return '/images/no-image.png';
    }
    if (url.includes('https://drive.google.com/uc?export=view&id=')) {
      const fileIdMatch = url.match(/id=([^&]+)/);
      if (fileIdMatch && fileIdMatch[1]) {
        const fileId = fileIdMatch[1];
        return `https://drive.google.com/uc?export=download&id=${fileId}`;
      }
    }
    return url.trim();
  };

  const formatTanggal = (timestamp) => {
    if (!timestamp || !timestamp.toDate) {
      return '';
    }
    try {
      const date = timestamp.toDate();
      const options = { day: '2-digit', month: 'long', year: 'numeric' };
      return date.toLocaleDateString('id-ID', options);
    } catch (e) {
      console.error("Kesalahan saat memformat tanggal:", e);
      return '';
    }
  };

  useEffect(() => {
    const fetchKegiatanDetail = async () => {
      try {
        if (!id) {
          setError('ID kegiatan tidak ditemukan.');
          setLoading(false);
          return;
        }
        const docRef = doc(db, 'Kegiatan', id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setKegiatan({ id: docSnap.id, ...docSnap.data() });
        } else {
          setError('Kegiatan tidak ditemukan.');
        }
      } catch (err) {
        console.error('Gagal mengambil detail kegiatan:', err);
        setError('Gagal memuat detail kegiatan. Silakan coba lagi nanti.');
      } finally {
        setLoading(false);
      }
    };

    fetchKegiatanDetail();
  }, [id]);

  if (loading) {
    return (
      <Container className="text-center py-5">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
        <p className="mt-2">Memuat detail kegiatan...</p>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="py-5">
        <Alert variant="danger">{error}</Alert>
      </Container>
    );
  }

  if (!kegiatan) {
    return (
      <Container className="py-5">
        <Alert variant="info">Kegiatan tidak ditemukan.</Alert>
      </Container>
    );
  }

  const renderContentWithImages = (content) => {
    if (!content) return null;

    const paragraphs = content.split(/\r?\n\s*\r?\n|\r?\n/).filter(p => p.trim() !== '');
    const contentWithImages = [];
    let paragraphCount = 0;
    let currentImageIndex = 2;

    for (let i = 0; i < paragraphs.length; i++) {
      contentWithImages.push(
        <p key={`para-${i}`} style={{ marginBottom: '1rem' }}>{paragraphs[i]}</p>
      );
      paragraphCount++;

      if (paragraphCount % 2 === 0) {
        const imageName = `foto${currentImageIndex}`;
        const imageUrl = kegiatan[imageName];

        if (imageUrl) {
          contentWithImages.push(
            <div key={`img-${currentImageIndex}`} className="text-center my-4">
              <Image
                src={getImageUrl(imageUrl)}
                alt={`${kegiatan.judul} Gambar ${currentImageIndex}`}
                fluid
                style={{ maxHeight: '450px', objectFit: 'cover' }}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/images/no-image.png';
                }}
              />
            </div>
          );
          currentImageIndex++;
        }
      }
    }
    return contentWithImages;
  };

  return (
    <>
      <TopNavbar />
      <Container className="my-5">
        <h1 className="mb-4 text-center">{kegiatan.judul}</h1>
        <p className="text-muted text-center mb-4">
          <small>Diposting pada: {formatTanggal(kegiatan.waktu)}</small>
        </p>

        {kegiatan.foto1 && (
          <div className="text-center mb-4">
            <Image
              src={getImageUrl(kegiatan.foto1)}
              alt={kegiatan.judul || 'Gambar Kegiatan Utama'}
              fluid
              style={{ maxHeight: '450px', objectFit: 'cover' }}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '/images/no-image.png';
              }}
            />
          </div>
        )}

        <div className="kegiatan-konten" style={{ textAlign: 'justify' }}>
          {renderContentWithImages(kegiatan.konten)}
        </div>
      </Container>
      <BottomContent />
    </>
  );
};

export default HalamanDetailKegiatan;

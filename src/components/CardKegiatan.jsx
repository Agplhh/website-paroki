// CardKegiatan.jsx
import React from 'react';
import { Card } from 'react-bootstrap';

const CardKegiatan = ({ item }) => {

  const getImageUrl = (url, altText = 'Gambar') => {

    if (!url || typeof url !== 'string' || url.trim() === '') {
      console.warn(`URL gambar kosong, null, atau tidak valid. Menggunakan placeholder untuk: ${altText}`);
      return '/images/no-image.png'; 
    }
    return url.trim();
  };

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
  );
};

export default CardKegiatan;
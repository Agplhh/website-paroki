// src/pages/SekucingLabar.jsx
import React from 'react';
import DaftarStasi from '../components/DaftarStasi'; // Sesuaikan path jika berbeda
import TopNavbar from '../components/TopNavbar';
import BottomContent from '../components/BottomContent';

const SekucingLabar = () => {
  return (
    <>
      <TopNavbar />
      <DaftarStasi collectionName="SekucingLabar" /> {/* Perhatikan huruf kapital jika ada */}
      <BottomContent />
    </>
  );
};

export default SekucingLabar;
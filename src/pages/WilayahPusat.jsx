// src/pages/WilayahPusat.jsx
import React from 'react';
import DaftarStasi from '../components/DaftarStasi'; // Sesuaikan path jika berbeda
import TopNavbar from '../components/TopNavbar';
import BottomContent from '../components/BottomContent';

const WilayahPusat = () => {
  return (
    <>
      <TopNavbar />
      <DaftarStasi collectionName="WilayahPusat" />
      <BottomContent />
    </>
  );
};

export default WilayahPusat;
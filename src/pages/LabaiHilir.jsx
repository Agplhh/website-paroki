// src/pages/LabaiHilir.jsx
import React from 'react';
import DaftarStasi from '../components/DaftarStasi'; // Sesuaikan path jika berbeda
import TopNavbar from '../components/TopNavbar';
import BottomContent from '../components/BottomContent';

const LabaiHilir = () => {
  return (
    <>
      <TopNavbar />
      <DaftarStasi collectionName="LabaiHilir" />
      <BottomContent />
    </>
  );
};

export default LabaiHilir;
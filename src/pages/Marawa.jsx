// src/pages/Marawa.jsx
import React from 'react';
import DaftarStasi from '../components/DaftarStasi'; // Sesuaikan path jika berbeda
import TopNavbar from '../components/TopNavbar';
import BottomContent from '../components/BottomContent';

const Marawa = () => {
  return (
    <>
      <TopNavbar />
      <DaftarStasi collectionName="Merawa" />
      <BottomContent />
    </>
  );
};

export default Marawa;
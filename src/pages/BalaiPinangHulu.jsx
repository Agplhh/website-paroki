// src/pages/BalaiPinangHulu.jsx
import React from 'react';
import DaftarStasi from '../components/DaftarStasi'; // Sesuaikan path jika berbeda dari root Anda
import TopNavbar from '../components/TopNavbar'; // Asumsikan TopNavbar ada di sini
import BottomContent from '../components/BottomContent'; // Asumsikan BottomContent ada di sini

const BalaiPinangHulu = () => {
  return (
    <>
      <TopNavbar />
      {/* collectionName harus sama persis dengan nama koleksi di Firestore Anda */}
      <DaftarStasi collectionName="BalaiPinangHulu" />
      <BottomContent />
    </>
  );
};

export default BalaiPinangHulu;
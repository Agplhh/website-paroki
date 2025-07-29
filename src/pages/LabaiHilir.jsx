import React from 'react';
import DaftarStasi from '../components/DaftarStasi'; 
import TopNavbar from '../components/TopNavbar';
import BottomContent from '../components/BottomContent';

const LabaiHilir = () => {
  return (
    <>
      <TopNavbar />
      <div className="mt-5">
        <h2 className="text-center mb-4">Informasi Stasi Labai Hilir</h2>
      </div>
      <DaftarStasi collectionName="LabaiHilir" />
      <BottomContent />
    </>
  );
};

export default LabaiHilir;
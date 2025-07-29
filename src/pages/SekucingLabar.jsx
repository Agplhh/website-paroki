import React from 'react';
import DaftarStasi from '../components/DaftarStasi';
import TopNavbar from '../components/TopNavbar';
import BottomContent from '../components/BottomContent';

const SekucingLabar = () => {
  return (
    <>
      <TopNavbar />
       <div className="mt-5">
        <h2 className="text-center mb-4">Informasi Stasi Sekucing Labai</h2>
      </div>
      <DaftarStasi collectionName="SekucingLabar" /> 
      <BottomContent />
    </>
  );
};

export default SekucingLabar;
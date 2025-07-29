import React from 'react';
import DaftarStasi from '../components/DaftarStasi'; 
import TopNavbar from '../components/TopNavbar'; 
import BottomContent from '../components/BottomContent'; 

const BalaiPinangHulu = () => {
  return (
    <>
      <TopNavbar />
       <div className="mt-5">
        <h2 className="text-center mb-4">Informasi Stasi Balai Pinang Hulu</h2>
      </div>
      <DaftarStasi collectionName="BalaiPinangHulu" />
      <BottomContent />
    </>
  );
};

export default BalaiPinangHulu;
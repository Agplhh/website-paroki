import React from 'react';
import TopNavbar from '../components/TopNavbar';
import BottomContent from '../components/BottomContent';

const PetaParoki = () => {
   return (
    <>
      <TopNavbar />
      <div className="container my-5">
        <h1 className="text-center mb-4">Peta Paroki Santo Martinus Balai Berkuak</h1>
        <div className="text-center">
          <img
            src="/images/Peta/PetaParoki.png"
            alt="Master Plan 1"
            className="img-fluid mb-4"
          />
        </div>
      </div>
      <BottomContent />
    </>
  );
};

export default PetaParoki;
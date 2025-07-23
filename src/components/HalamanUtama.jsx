import React from 'react';
import TopNavbar from './TopNavbar';
import CarouselSection from './CarouselSection';
import BottomContent from './BottomContent';
import './HalamanUtama.css';

const HalamanUtama = () => {
  return (
    <div className="halaman-utama">
      <TopNavbar />
      <CarouselSection /> 
      <BottomContent />
    </div>
  );
};

export default HalamanUtama;
import React from 'react';
import TopNavbar from '../components/TopNavbar';
import BottomContent from '../components/BottomContent';

const MasterPlan = () => {
  return (
    <>
      <TopNavbar />
      <div className="container my-5">
        <h1 className="text-center mb-4">Master Plan Paroki</h1>
        <div className="text-center">
          <img
            src="/images/MasterPlan/Masterplan1.png"
            alt="Master Plan 1"
            className="img-fluid mb-4"
          />
          <img
            src="/images/MasterPlan/Masterplan2.png"
            alt="Master Plan 2"
            className="img-fluid"
          />
        </div>
      </div>
      <BottomContent />
    </>
  );
};

export default MasterPlan;

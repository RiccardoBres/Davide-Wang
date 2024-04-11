import React from 'react';
import CustomNavbar from '../Components/Molecules/NavbarMolecules/CustomNavbar';
import Footer from '../Components/Organisms/FooterOrganism/Footer';
import ReservedAreaContent from '../Components/Organisms/ReservedAreaOrganism/ReservedAreaContent';

const ReservedArea = () => {
  return (
    <>
    <CustomNavbar />
    <ReservedAreaContent/>
    <Footer />
    </>
  )
}

export default ReservedArea

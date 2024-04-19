import React from 'react';
import CustomNavbar from '../Components/Molecules/NavbarMolecules/CustomNavbar';
import ServiceContent from '../Components/Organisms/ServiceOrganism/ServiceContent';
import Footer from '../Components/Organisms/FooterOrganism/Footer';
import useScrollToTop from '../CustomHooks/UseScrollToTop';

const Service = () => {
  useScrollToTop();

  return (
    <>
    <CustomNavbar />
    <ServiceContent/>
    <Footer/>
    </>
  )
}

export default Service

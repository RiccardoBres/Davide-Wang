import React from 'react';
import CustomNavbar from '../Components/Molecules/NavbarMolecules/CustomNavbar';
import Footer from '../Components/Organisms/FooterOrganism/Footer';
import useScrollToTop from '../CustomHooks/UseScrollToTop';
import ContactContent from '../Components/Organisms/ContactOrganism/ContactContent';

const Contacts = () => {
    useScrollToTop();
  return (
    <>
    <CustomNavbar />
    <ContactContent/>
    <Footer/>
    </>
  )
}

export default Contacts

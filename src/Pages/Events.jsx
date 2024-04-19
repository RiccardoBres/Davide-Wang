import React from 'react';
import CustomNavbar from '../Components/Molecules/NavbarMolecules/CustomNavbar';
import Footer from '../Components/Organisms/FooterOrganism/Footer';
import EventsContent from '../Components/Organisms/EventsOrganism/EventsContent';
import useScrollToTop from '../CustomHooks/UseScrollToTop';

const Events = () => {
  useScrollToTop();

  return (
    <>
    <CustomNavbar />
    <EventsContent/>
    <Footer />
    </>
    
  )
}

export default Events

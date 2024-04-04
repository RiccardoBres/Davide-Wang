import React from 'react';
import LandingSection from '../Components/Organisms/LandingOrganism/LandingSection';
import CustomNavbar from '../Components/Molecules/NavbarMolecules/CustomNavbar';
import AboutMe from '../Components/Organisms/AboutMeOrganism/AboutMe';
import BeverageConsulting from '../Components/Organisms/BeverageConsultingOrganism/BeverageConsulting';
import ConceptCreation from '../Components/Organisms/ConceptCreationOrganism/ConceptCreation';
import Experience from '../Components/Organisms/ExperienceOrganism/Experience';
import Footer from '../Components/Organisms/FooterOrganism/Footer';



const Home = () => {
  return (
    <>
      <CustomNavbar />
      <LandingSection />
      <AboutMe/>
      <BeverageConsulting/>
      <ConceptCreation/>
      <Experience/>
      <Footer/>
    </>
  )
}

export default Home;

import React, { useState, useEffect } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import CustomParagraph from '../../Atoms/CustomParagraph';
import CustomTitle from '../../Atoms/CustomTitle';

const CustomNavbar = () => {
 const [isMobile, setIsMobile] = useState(false);
 const [isScrolled, setIsScrolled] = useState(false); 

 useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); 
    };
    handleResize(); 
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
 }, []);

 useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= window.innerHeight) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
 }, []);

 const handleMenuClick = () => {
    // Implementazione dell'apertura della componente offcanvas qui
 };

 return (
    <div className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <CustomTitle text='Wang' className='small-title' />
      {isMobile ? (
        <GiHamburgerMenu className='menu-icon' onClick={handleMenuClick} />
      ) : (
        <div className="container-links">
          <CustomParagraph text='Servizi' className='small-p' />
          <CustomParagraph text='Eventi' className='small-p' />
          <CustomParagraph text='Contatti' className='small-p' />
        </div>
      )}
    </div>
 );
};

export default CustomNavbar;

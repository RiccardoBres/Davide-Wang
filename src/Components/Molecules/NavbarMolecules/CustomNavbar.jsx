import React, { useState, useEffect } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { Navbar, Nav } from 'react-bootstrap';
import CustomParagraph from '../../Atoms/CustomParagraph';
import CustomTitle from '../../Atoms/CustomTitle';
import { useNavigate } from 'react-router-dom';

const CustomNavbar = () => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 10) {
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


  const handleService = () => {
    navigate('/servizi');
  };
  const handleHome = () => {
    navigate('/');
  };

  return (
    <Navbar expand="lg" className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <Navbar.Brand as="span" onClick={handleHome}><CustomTitle text='Wang' className='cursor-pointer white title-nav' /></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className='white' />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav>
          <Nav className="container-links">
            <CustomParagraph text='Servizi' onClick={handleService} className='medium-p' />
            <CustomParagraph text='Eventi' className='medium-p' />
            <CustomParagraph text='Contatti' className='medium-p' />
          </Nav>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;

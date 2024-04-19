import React, { useState, useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import CustomParagraph from '../../Atoms/CustomParagraph';
import { useNavigate } from 'react-router-dom';
import { logout, useSession } from '../../../Middleware/ProtectedRoutes';
import OffCanvas from './OffCanvas';
import CustomTitle from '../../Atoms/CustomTitle';

const CustomNavbar = () => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [showOffCanvas, setShowOffCanvas] = useState(false);
  const [showLinks, setShowLinks] = useState(false); // Stato per gestire la visualizzazione dei titoletti
  const session = useSession();

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

  const userLogOut = () => {
    logout();
    navigate('/');
  };
  const handleService = () => {
    navigate('/servizi');
  };
  const handleEvents = () => {
    navigate('/eventi');
  };
  const handleContact = () => {
    navigate('/contatti');
  };
  const handleHome = () => {
    navigate('/');
  };

  const handleToggleClick = () => {
    setShowLinks(!showLinks); 
    setShowOffCanvas(!showOffCanvas); 
  };

  return (
    <>
      <Navbar  expand="lg" className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <Navbar.Brand onClick={handleHome}><CustomTitle text='Wang' className='small-title white cursor-pointer'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='white' onClick={handleToggleClick} />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
          <Nav className='container-links'>
            <CustomParagraph text='Servizi' onClick={handleService} className='medium-p' />
            <CustomParagraph text='Eventi' onClick={handleEvents} className='medium-p' />
            <CustomParagraph text='Contatti' onClick={handleContact} className='medium-p' />
            {session.isAuthenticated ? (
              <CustomParagraph text='Logout' onClick={userLogOut} className='medium-p' />
            ) : null}
          </Nav>
        </Navbar.Collapse>
        <OffCanvas show={showOffCanvas} onHide={() => setShowOffCanvas(false)} />
      </Navbar>

    </>
  );
};

export default CustomNavbar;

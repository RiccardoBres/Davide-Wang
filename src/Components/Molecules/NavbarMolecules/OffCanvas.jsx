import React from 'react';
import { Nav, Offcanvas } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './offCanvas.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CustomButton from '../../Atoms/CustomButton';
import CustomParagraph from '../../Atoms/CustomParagraph';
import CustomTitle from '../../Atoms/CustomTitle'
import { useSession, logout } from '../../../Middleware/ProtectedRoutes';
import { faSpotify, faInstagram, faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';


const OffCanvas = ({ show, onHide }) => {
    const policy = "By signing up you agree to receive news and offers from Group Name. You can unsubscribe at any time. For more details see the privacy policy.";
    const navigate = useNavigate();
    const session = useSession();
    const handleHome = () => {navigate('/')};
    const handleServices =()=>{navigate('/servizi')};
    const handleEvents =()=>{navigate('/eventi')};
    const handleContacts =()=>{navigate('/contatti')}

    const handleLogout = () => {
        logout();
        navigate('/');
       };
    return (
        <Offcanvas show={show} onHide={onHide} placement="start" className="w-75">
            <Offcanvas.Body className='body-offCanvas-left'>
                <Nav className="me-auto d-flex flex-column w-100">
                    <Nav.Link className='link-ofCanvas-left' onClick={handleHome} ><CustomTitle text='Wang' className='medium-title'/></Nav.Link>
                    <Nav.Link className='link-ofCanvas-left' onClick={handleServices}>Servizi</Nav.Link>
                    <Nav.Link className='link-ofCanvas-left' onClick={handleEvents}>Eventi</Nav.Link>
                    <Nav.Link className='link-ofCanvas-left' onClick={handleContacts}>Contatti</Nav.Link>
                    {session.isAuthenticated == true ?  <Nav.Link className='link-ofCanvas-left' onClick={handleLogout}>Logout</Nav.Link> : null }
                </Nav>
                <div className="social-icons-offCanvas">
                    <FontAwesomeIcon icon={faSpotify} />
                    <FontAwesomeIcon icon={faInstagram} />
                    <FontAwesomeIcon icon={faFacebook} />
                    <FontAwesomeIcon icon={faTwitter} />
                    <FontAwesomeIcon icon={faYoutube} />
                </div>
                <div className='container-mailing-input-left'>
                    {/* <div className="container-input-left">
                        <CustomInput text='Indirizzo Email' />
                        <CustomButton text="Registrati"/>
                    </div> */}
                    <CustomParagraph text={policy} className='text-light' />
                </div>
            </Offcanvas.Body>
        </Offcanvas>
    )
}

export default OffCanvas
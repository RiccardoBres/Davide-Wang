import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import './AboutMe.css';
import CustomParagraph from '../../Atoms/CustomParagraph';
import CustomTitle from '../../Atoms/CustomTitle';
import Profile from '../../../Layout/Assets/THE BAR IN FRONT OF THE BAR/DSC06385.jpg';
import Profile2 from '../../../Layout/Assets/LandingSection/background.jpg';
import CustomImage from '../../Atoms/CustomImage';

const AboutMe = () => {
    const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec pretium lacus, a malesuada ante. Nulla vel eros ac urna sodales semper, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec pretium lacus, a malesuada ante. Nulla vel eros ac urna sodales semper, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec pretium lacus, a malesuada ante. Nulla vel eros ac urna sodales semper";
    return (
        <>
            <Container fluid className='container-about-me mb-5'>
                <CustomTitle text="About" className='medium-title my-5' />
                <Row className='d-flex justify-content-center mt-5'>
                    <Col lg={6} md={6} sm={12} xs={12} className='col d-flex justify-content-center'>
                        <div className="background-image-profile">
                        <CustomImage src={Profile} className='profile-image' />
                        </div>
                    </Col>
                    <Col lg={6} md={6} sm={12} xs={12} className='col d-flex align-items-center'>
                        <CustomParagraph className='small-p w-75 align-end' text={description} />
                    </Col>
                </Row>
                <Row className='d-flex justify-content-center mt-5 row2 w-100'>
                <Col lg={4} md={6} sm={12} xs={12} className='col d-flex align-items-center justify-content-end'>
                        <CustomParagraph className='small-p' text={description} />
                    </Col>
                    
                    <Col lg={6} md={6} sm={12} xs={12} className='col d-flex justify-content-center'>
                        
                        <div className="background-image-profile2">
                        <CustomImage src={Profile2} className='profile-image2' />
                        </div>
                    </Col>
                </Row>
            </Container>
        </>

    )
}

export default AboutMe

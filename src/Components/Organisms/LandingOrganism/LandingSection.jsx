import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import IntroLanding from '../../Molecules/LandingMolecules/IntroLanding';
import './landing.css';

const LandingSection = () => {
    return (
        <Container fluid className="landing-section">
            <Row className='w-100'>
                <Col lg={12} md={12} sm={12} xs={12} className='p-0'>
                    <IntroLanding />
                </Col>
            </Row>
        </Container>
    )
}

export default LandingSection

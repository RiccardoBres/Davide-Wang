import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import FooterContent from '../../Molecules/FooterMolecules/FooterContent';
import FooterIcons from '../../Molecules/FooterMolecules/FooterIcons';

const Footer = () => {
  return (
    <Container fluid className='footer'>
      <Row className='w-100 row-content'>
        <Col lg={12} sm={12} xs={12} md={6}>
          <FooterContent />
        </Col>

      </Row>
      <Row className='w-100 '>
        <Col lg={12} sm={12} xs={12} md={6}>
          <FooterIcons />
        </Col>
      </Row>
    </Container>
  )
}

export default Footer

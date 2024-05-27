import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import CustomTitle from '../../Atoms/CustomTitle';
import CustomParagraph from '../../Atoms/CustomParagraph';
import '../ExperienceOrganism/Experience.css';
import ContactForm from '../../Molecules/ContactMolecules/ContactForm';
import ExperienceCard from '../../Molecules/ExperienceMolecules/ExperienceCard';
import './Contact.css'

const ContactContent = () => {
  return (
    <Container fluid className='container-contact'>
      <Row className='first-row-contact'>
        <Col lg={12} md={12} sm={12} xs={12}>
          <CustomTitle text='Contatti' className='big-title' />
        </Col>
      </Row>
      <Row className='second-row-contact'>
        <Col lg={8} md={12} sm={12} xs={12} className='col-contact'>
          <div className="form-contact">
            <CustomTitle text="Contact Title" className="medium-title" />
            <CustomParagraph text="Experience description lorem ipsum dolor sit amet." className='mb-4' />
            <ContactForm />
          </div>
          <div className="intro-contact">
            <CustomTitle text="Contact Title" className="medium-title" />
            <CustomParagraph text="Experience description lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Phasellus id metus sed libero tristique finibus. Integer euismod tristique mauris, id interdum leo dignissim sed. Nam sit amet velit vel purus vulputate tempus nec id risus. Duis varius tristique nisi, nec feugiat nulla fringilla non. Suspendisse potenti. Nulla facilisi. Mauris at malesuada libero." className='medium-p' />
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default ContactContent

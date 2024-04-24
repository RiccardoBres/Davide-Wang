import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import './serviceOrganism.css';
import ServiceCard from '../../Molecules/ServiceMolecules/ServiceCard';
import Image1 from '../../../Layout/Assets/UtilsImages/service3.jpg';
import Image2 from '../../../Layout/Assets/UtilsImages/service2.jpg';
import Image3 from '../../../Layout/Assets/UtilsImages/service1.jpg';
import Image4 from '../../../Layout/Assets/UtilsImages/service4.jpg';
import Image5 from '../../../Layout/Assets/UtilsImages/service5.jpg';
import ServiceImage from '../../Molecules/ServiceMolecules/ServiceImage';
import CustomTitle from '../../Atoms/CustomTitle';
import CustomParagraph from '../../Atoms/CustomParagraph';

const ServiceContent = () => {
  const serviceMenu = [
    {
      id: 1,
      title: "Progettazione",
      text: "Duis varius tristique nisi, nec feugiat nulla fringilla non. Suspendisse potenti. Nulla facilisi. Mauris at malesuada libero.",
      image: Image1
    },
  ];

  const serviceConcept = [
    {
      id: 2,
      title: "Creazione",
      text: "Duis varius tristique nisi, nec feugiat nulla fringilla non. Suspendisse potenti. Nulla facilisi. Mauris at malesuada libero.",
      image: Image2
    },
  ];

  const serviceConsulting = [
    {
      id: 3,
      title: "Consulenza",
      text: "Duis varius tristique nisi, nec feugiat nulla fringilla non. Suspendisse potenti. Nulla facilisi. Mauris at malesuada libero.",
      image: Image3
    },
  ];

  return (
    <>
      <Container fluid className="service-section">
        <Row className='first-background'>
          <Col lg={12} md={12} sm={12} xs={12} className='d-flex flex-column align-items-center justify-content-center white'>
            <CustomTitle text="I nostri servizi" className="big-title title-service" />
            
          </Col>
          
        </Row>
      </Container>
      <Container>
        <Row className='final-row mt-5'>
          <Col lg={6} md={6} sm={12} xs={12}>
            <ServiceImage image={Image4} end='end'/>
          </Col>
          <Col lg={6} md={6} sm={12} xs={12} className='ps-5 d-flex flex-column justify-content-center col-intro'>
            <CustomTitle text='Lorem ipsum dolor sit amet' className='medium-title' />
            <CustomParagraph className='small-p' text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
          </Col>
          <Col lg={6} md={6} sm={12} xs={12} className='pe-3 d-flex flex-column justify-content-center col-intro'>
            <CustomTitle text='Lorem ipsum dolor sit amet' className='medium-title' />
            <CustomParagraph className='small-p' text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
          </Col>
          <Col lg={6} md={6} sm={12} xs={12}>
            <ServiceImage image={Image5} start='start'/>
          </Col>
        </Row>
        </Container>
        <Container fluid>
        <Row className='second-row'>
        <CustomTitle text="Scopri cosa facciamo" className="big-title text-center mb-5" />
          <div className="container-card-services mt-5">
            <Col lg={4} md={12} sm={12} xs={12} className='p-0 Col'>
              {serviceMenu.map((menu) => (
                <ServiceCard key={menu.id} data={menu} />
              ))}
            </Col>
            <Col lg={4} md={12} sm={12} xs={12} className='p-0 Col second-card'>
              {serviceConcept.map((menu) => (
                <ServiceCard key={menu.id} data={menu} />
              ))}
            </Col>
            <Col lg={4} md={12} sm={12} xs={12} className='p-0 Col'>
              {serviceConsulting.map((menu) => (
                <ServiceCard key={menu.id} data={menu} />
              ))}
            </Col>
          </div>
          
        </Row>
      </Container>
    </>

  )
}

export default ServiceContent;

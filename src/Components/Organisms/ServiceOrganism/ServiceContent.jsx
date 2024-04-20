// ServiceContent.js
import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import './serviceOrganism.css';
import ServiceCard from '../../Molecules/ServiceMolecules/ServiceCard';
import Image1 from '../../../Layout/Assets/LandingSection/background.jpg';
import Image2 from '../../../Layout/Assets/UtilsImages/background3.jpg';
import CustomTitle from '../../Atoms/CustomTitle';
import CustomParagraph from '../../Atoms/CustomParagraph';


const ServiceContent = () => {
  const serviceMenu = [
    {
      id: 1,
      title: "Progettazione",
      text: "Description for Ideazione Menu",
      image: Image1
    },
  ];

  const serviceConcept = [
    {
      id: 2,
      title: "Creazione",
      text: "Description for Concept Creation",
      image: Image2
    },
  ];

  const serviceConsulting = [
    {
      id: 3,
      title: "Consulenza",
      text: "Description for Consulenza",
      image: Image1
    },
  ];

  return (
    <Container fluid className="service-section">
      <Row className='first-background'>
        <Col lg={12} md={12} sm={12} xs={12} className='d-flex flex-column align-items-center white'>
          <CustomTitle text="I nostri servizi" className="medium-title title-service" />
          <CustomParagraph text="Siamo sempre a tuo disposizione per aiutarti nello sviluppo del tuo prodotto" className='medium-p text-center'/>
        </Col>
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

      <Row className='final-row'>
        <Col lg={12} md={12} sm={12} xs={12} className='p-0 Col'>
          <div className="container-description-services">
            <CustomTitle text="Cosa Offriamo" className="medium-title" />
            <CustomParagraph text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
            <div>
              <CustomTitle text="Il massimo per arrivare in alto" className="small-title" />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default ServiceContent;

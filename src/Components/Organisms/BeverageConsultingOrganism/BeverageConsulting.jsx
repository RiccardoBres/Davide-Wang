import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import Image1 from '../../../Layout/Assets/UtilsImages/background.jpg';
import Image2 from '../../../Layout/Assets/UtilsImages/cocktail.jpg';
import Image3 from '../../../Layout/Assets/UtilsImages/background5.heic';
import CustomTitle from '../../Atoms/CustomTitle';
import CardBeverage from '../../Molecules/BeverageConsultingMolecules/CardBeverage';
import './BeverageConsulting.css';

const beverages = [
  {
    id: 1,
    title: "Beverage 1",
    text: "Description for Beverage 1",
    image: Image1
  },
  {
    id: 2,
    title: "Beverage 2",
    text: "Description for Beverage 2",
    image: Image2
  },
  {
    id: 3,
    title: "Beverage 3",
    text: "Description for Beverage 3",
    image: Image3
  }
];

const BeverageConsulting = () => {
  return (
    <Container fluid className='container-beverage-consulting'>
      <CustomTitle text="Beverage & Consulting" className='medium-title my-5' />
      <Row>
        {beverages.map(beverage => (
          <Col lg={4} md={4} sm={12} xs={12} key={beverage.id}>
            <CardBeverage src={beverage.image} title={beverage.title} text={beverage.text} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default BeverageConsulting;

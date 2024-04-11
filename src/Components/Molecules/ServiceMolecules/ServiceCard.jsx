import React from 'react';
import CustomTitle from '../../Atoms/CustomTitle';
import CustomParagraph from '../../Atoms/CustomParagraph';
import CustomImage from '../../Atoms/CustomImage';
import Card from 'react-bootstrap/Card';
import './ServiceMolecules.css'

const ServiceCard = ({data}) => {
  return (
    <Card className='card-service'>
    <Card.Img variant="top" src={data.image} />
    <Card.Body className='card-body-service'>
      <Card.Title>
        <CustomTitle text={data.title} className='small-title' />
      </Card.Title>
      <Card.Text>
        <CustomParagraph text={data.text} className='small-p' />
      </Card.Text>
    </Card.Body>
  </Card>
  )
}

export default ServiceCard

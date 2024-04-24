import React from 'react';
import CustomImage from '../../Atoms/CustomImage';
import './ServiceMolecules.css';

const ServiceImage = ({ image, end, start }) => {
  const positionClass = end ? 'final-row-card-end' : start ? 'final-row-card-start' : '';
  const borderClass = end ? 'border-background-end' : start ? 'border-background-start' : '';

  return (
    <div className={`final-row-card ${positionClass}`}>
      <div className={`border-background ${borderClass}`}></div>
      <CustomImage src={image} className='image-service' />
    </div>
  );
}

export default ServiceImage;

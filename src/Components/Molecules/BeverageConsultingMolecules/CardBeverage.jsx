import React from 'react';
import CustomImage from '../../Atoms/CustomImage';
import CustomTitle from '../../Atoms/CustomTitle';
import CustomParagraph from '../../Atoms/CustomParagraph';
import './BeverageMolecules.css'


const CardBeverage = ({src, title, text}) => {
  return (
    <div className='card-image-beverage'>
      <CustomImage src={src} className='card-image' />
      <div className="info-card">
        <CustomTitle text={title} className="medium-title"/>
        <CustomParagraph text={text} className="medium-p"/>
      </div>
    </div>
  )
}

export default CardBeverage

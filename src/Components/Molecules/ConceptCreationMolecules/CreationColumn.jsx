import React from 'react';
import CustomImage from '../../Atoms/CustomImage';
import CustomTitle from '../../Atoms/CustomTitle';
import CustomParagraph from '../../Atoms/CustomParagraph';
import './ConceptCreationsMolecules.css';

const CreationColumn = ({ src, title, description}) => {
  return (
    <div className='creation-column'>
      <CustomImage src={src} className='creation-image' />
      <div className='container-creation-info'>
        <CustomTitle text={title} className="creation-title"/>
        <CustomParagraph text={description} className="creation-description"/>
      </div>
    </div>
  )
}

export default CreationColumn
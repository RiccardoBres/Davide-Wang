import React from 'react';
import ExperienceImage from '../../../Layout/Assets/UtilsImages/PROFILE2.jpg';
import CustomTitle from '../../Atoms/CustomTitle';
import CustomParagraph from '../../Atoms/CustomParagraph';
import CustomImage from '../../Atoms/CustomImage';
import './ExperienceMolecules.css';

const ExperienceCard = () => {
  return (
    <div className="container-card-experience">
        <CustomImage src={ExperienceImage}/>
    </div>
  )
}

export default ExperienceCard

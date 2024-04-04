import React from 'react';
import CustomImage from '../../Atoms/CustomImage';
import CustomTitle from '../../Atoms/CustomTitle';
import CustomParagraph from '../../Atoms/CustomParagraph';
import './ConceptCreationsMolecules.css'

const ConceptColumn = ({  src, title, description }) => {
    return (
        <div className='concept-column'>
            <CustomImage src={src} className='concept-image' />
            <div className='container-concept-info'>
                <CustomTitle text={title} className="concept-title" />
                <CustomParagraph text={description} className="concept-description" />
            </div>
        </div>
    )
}

export default ConceptColumn

import React from 'react';
import CustomTitle from '../../Atoms/CustomTitle';
import CustomParagraph from '../../Atoms/CustomParagraph';
import CustomCurvedText from '../../Atoms/CustomCurvedText';
import './LandingMolecules.css'

const IntroLanding = () => {
    return (
        <div className="container-intro">
            <div className='div1'>
                <CustomParagraph text="Creator & Consultant" className='small-p white m-0' />
            </div>

            <div className="container-intro-name div3">
                
                <div className="d-flex flex-column align-items-center">
                    <CustomTitle text="DAVIDE" className='very-big-title white m-0' />
                    <CustomTitle text="WANG" className='very-big-title white' />
                </div>
            </div>
            <div className="div5">
                <CustomCurvedText circularText="Beverage" text="Consulting" className='small-p white' />
                <CustomCurvedText circularText="Concept" text="Creation" className='small-p white' />
            </div>
            <div className="div6">

            </div>
        </div>
    )
}

export default IntroLanding

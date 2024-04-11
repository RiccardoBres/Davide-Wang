import React from 'react';
import CustomTitle from '../../Atoms/CustomTitle';
import CustomParagraph from '../../Atoms/CustomParagraph';
import {useNavigate} from'react-router-dom';


const FooterContent = () => {
    const navigate = useNavigate();

    const handleNavigation =(link)=>{
        navigate(link);
    }
    return (
        <div className="container-footer">
            <div className='d-flex flex-column'>
                <CustomTitle text="Davide Wang" className="big-title" />
                <CustomParagraph text="Creator & Consultant" className="medium-p" />
            </div>
            <div className='info-footer'>
                <CustomParagraph text="Moebius" className="small-p" />
                <CustomParagraph text="Faq" className="small-p" />
                <CustomParagraph text="Reserved Area" className="small-p" onClick={()=>handleNavigation('/reserved-area')} />
            </div>
            <div className='info-footer'>
                <CustomParagraph text="Servizi" className="small-p" />
                <CustomParagraph text="Theme Tweak" className="small-p" />
            </div>
            <div className='info-footer'>
                <CustomParagraph text="Show Case" className="small-p" />
                <CustomParagraph text="Supporto" className="small-p" />

            </div>
            <div className='info-footer'>
                <CustomParagraph text="Su di me" className="small-p" />
                <CustomParagraph text="Contattami" className="small-p" />
                <CustomParagraph text="Sponsor" className="small-p" />
            </div>
        </div>
    )
}

export default FooterContent

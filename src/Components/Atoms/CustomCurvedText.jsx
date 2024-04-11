import React from 'react';
import ReactCurvedText from "react-curved-text";
import CustomParagraph from './CustomParagraph';
import { AiOutlineAntDesign } from "react-icons/ai";
import CustomTitle from './CustomTitle';


const CustomCurvedText = ({ circularText, className, text, iconText }) => {
    return (
        <div className={`d-flex flex-column align-items-center ${className}`}>
            <ReactCurvedText
                width={380}
                height={28}
                cx={190}
                cy={120}
                rx={100}
                ry={100}
                startOffset={120}
                textPathProps={{
                    fill: '#fff',
                    fontSize: '20px'
                }}
                reversed={true}
                text={circularText}
            />
            <AiOutlineAntDesign />
            <CustomTitle text={text} className="medium-title m-0" />
        </div>

    );
};

export default CustomCurvedText;
import React from 'react';
import ReactCurvedText from "react-curved-text";
import CustomParagraph from './CustomParagraph';
import { AiOutlineAntDesign } from "react-icons/ai";


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
            <CustomParagraph text={text} className="big-p m-0" />
        </div>

    );
};

export default CustomCurvedText;
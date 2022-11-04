import React from 'react';
import enterImg from '../../../assets/images/enter.png'
const EnterMenu = ({enterMenuProperty}) => {
    return (
        <div  className='enterMenu' style={{left: `${enterMenuProperty.position}px`}}>
            <div className='enterMenuInner'>
                <span>press enter</span>
                <img style={{width: '17px', height: '17px'}} src={enterImg} alt=""/>

            </div>
            <div className='enterBackground'></div>
        </div>
    );
};

export default EnterMenu;
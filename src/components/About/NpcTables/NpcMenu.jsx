import React from 'react';
import './questMenuStyles.scss'
const NpcMenu = ({questProperty}) => {
    return (
        <div className='questMenu' style={{left: `${questProperty.position - 40}px`}}>
            <p>{questProperty.text}</p>
        </div>
    );
};

export default NpcMenu;
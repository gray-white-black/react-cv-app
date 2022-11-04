import React from 'react';
import PositionCharacters from "../../../store/PositionCharacters";

const NpcGrandFa = () => {
    return (
        <span className='NpcGrandFa' style={{left: `${PositionCharacters.positions.npcGrandFa}px`}}></span>
    );
};

export default NpcGrandFa;
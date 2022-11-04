import React from 'react';
import PositionCharacters from "../../../store/PositionCharacters";

const NpcBretta = () => {
    return (
        <span className='NpcBretta' style={{left: `${PositionCharacters.positions.npcBretta}px`}}></span>
    );
};

export default NpcBretta;
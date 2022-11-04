import React, {useEffect, useRef} from 'react';
import PositionCharacters from "../../../store/PositionCharacters";
import {observer} from "mobx-react-lite";

const NpcMossKnight = () => {

    return (
        <span className='NpcMossKnight' style={{left: `${PositionCharacters.positions.npcMossKnight}px`}}></span>
    );
};

export default observer(NpcMossKnight);
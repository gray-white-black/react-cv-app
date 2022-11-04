import React, {useEffect, useRef, useState} from 'react';
import './About.scss'
import {observer} from "mobx-react-lite";
import MainCharacter from "./Characters/MainCharacter";
import NpcGrandFa from "./Characters/NpcGrandFa";
import NpcBretta from "./Characters/NpcBretta";
import NpcMossKnight from "./Characters/NpcMossKnight";
import PositionCharacters from "../../store/PositionCharacters";
import NpcMenu from "./NpcTables/NpcMenu";
import EnterMenu from "./NpcTables/EnterMenu";
import {Link, useNavigate} from "react-router-dom";
import BackToMenu from "./Buttons/BackToMenu";



const About = () => {
    const keysList = ['ArrowUp', 'ArrowLeft', 'ArrowRight', 'Enter', 'Escape']
    const [questTable, setQuestTable] = useState({
        isActiveEnterMenu: false,
        isActiveQuestMenu: false,
        position: 0,
        text: ""
    })
    const [keys, setKeys] = useState({
        ArrowRight: false,
        ArrowUp: false,
        ArrowLeft: false,
        Enter: false,
        Escape: false
    })
    const [refs, setRefs] = useState(PositionCharacters.positions)
    const navigate = useNavigate()


    const isPressedKey = (e) => {
        if(!keysList.includes(e.code)) { return }
        setKeys({...keys, [e.code]: e.type === 'keydown'});
        questTables()
        console.log(keys)
        exit()

    }
    const exit = () => {
        if(keys.Escape){
            navigate(`/`);
        }
    }
    const questTables = () =>{
        setQuestTable({...questTable, isActiveEnterMenu: questTable.isActiveEnterMenu = false})
        setQuestTable({...questTable, isActiveQuestMenu: questTable.isActiveQuestMenu = false})
        if(refs.MainCharacter - refs.npcGrandFa < 30 &&
            refs.MainCharacter - refs.npcGrandFa > -20) {
            setQuestTable({...questTable, text: questTable.text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'})
            setQuestTable({...questTable, isActiveEnterMenu: questTable.isActiveEnterMenu = true})
            setQuestTable({...questTable, position: refs.npcGrandFa})
            if(keys.Enter){
                setQuestTable({...questTable, isActiveEnterMenu: questTable.isActiveEnterMenu = false})
                setQuestTable({...questTable, isActiveQuestMenu: questTable.isActiveQuestMenu = true})
            }
        }
        if(refs.MainCharacter - refs.npcMossKnight < 30 &&
            refs.MainCharacter - refs.npcMossKnight > -20){
            setQuestTable({...questTable, text: questTable.text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'})
            setQuestTable({...questTable, isActiveEnterMenu: questTable.isActiveEnterMenu = true})
            setQuestTable({...questTable, position: refs.npcMossKnight})
            if(keys.Enter){
                setQuestTable({...questTable, isActiveEnterMenu: questTable.isActiveEnterMenu = false})
                setQuestTable({...questTable, isActiveQuestMenu: questTable.isActiveQuestMenu = true})
            }
        }
        if(refs.MainCharacter - refs.npcBretta < 30 &&
            refs.MainCharacter - refs.npcBretta > -20){
            setQuestTable({...questTable, text: questTable.text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'})
            setQuestTable({...questTable, isActiveEnterMenu: questTable.isActiveEnterMenu = true})
            setQuestTable({...questTable, position: refs.npcBretta})
            if(keys.Enter){
                setQuestTable({...questTable, isActiveEnterMenu: questTable.isActiveEnterMenu = false})
                setQuestTable({...questTable, isActiveQuestMenu: questTable.isActiveQuestMenu = true})
            }
        }
    }

    return (
        <div className='about'  tabIndex={0} onKeyDown={e => isPressedKey(e)} onKeyUp={e => isPressedKey(e)}>
            <BackToMenu/>
            <div className="aboutBackground">
                <div className="aboutBackgroundFog"></div>
                <MainCharacter keys={keys} setKeys={setKeys}/>
                <NpcGrandFa/>
                <NpcBretta/>
                <NpcMossKnight />
                {questTable.isActiveEnterMenu ?
                    <EnterMenu enterMenuProperty={questTable}/>
                    :
                    null
                }
                {questTable.isActiveQuestMenu ?
                    <NpcMenu questProperty={questTable}/>
                    :
                    null
                }
            </div>
        </div>
    );
};

export default observer(About);
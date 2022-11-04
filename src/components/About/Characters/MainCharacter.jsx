import React, {useEffect, useRef, useState} from 'react';
import './Characters.scss'
import {observer} from "mobx-react-lite";

import defaultSkin from '../../../assets/images/person.png'
import leftMoveSkin from '../../../assets/images/moveLeft.png'
import rightMoveSkin from '../../../assets/images/moveRight.png'
import jumpMoveRightSkin from '../../../assets/images/moveJumpRight.png'
import jumpMoveLeftSkin from '../../../assets/images/moveJumpLeft.png'
import PositionCharacters from "../../../store/PositionCharacters";

const MainCharacter = ({keys}) => {
    const [fps, setFps] = useState(0)
    const [characterSkin, setCharacterSkin] = useState(defaultSkin)
    const ref = useRef()

    const [physics, setPhysics] = useState({
        x: 0,
        y: 580,
        w: 32,
        h: 64,
        vx: 0.01,
        vy: 0.06,
        isAir: true,
        gravity: 30,
        isCrouch: false,
        correction: 0.02,
        maxHeight: 525
    })
    class DeltaTimer {
        constructor(func, delay) {
            this.func = func;
            this.delay = delay;
        }

        start() {
            this.lastTime = Date.now();
            this.timeout = setTimeout(this.loop.bind(this), this.delay);
        }

        stop() {
            if (this.timeout) {
                clearTimeout(this.timeout);
            }
        }

        loop() {
            const now = Date.now();
            const delta = now - this.lastTime;
            this.func(delta);

            this.lastTime = now;
            this.timeout = setTimeout(this.loop.bind(this), this.delay);
        }
    }


    const MoveEvent = () => {
        if(keys.ArrowRight){
            setCharacterSkin(rightMoveSkin)
            if(physics.vx < 0.3){
                setPhysics({...physics, vx:  physics.vx += physics.vx * physics.correction})
            }
                setPhysics({...physics, x:  physics.x += physics.vx})
            }
        if(keys.ArrowLeft){
            setCharacterSkin(leftMoveSkin)
            if(physics.vx < 0.3){
                setPhysics({...physics, vx:  physics.vx += physics.vx * physics.correction})
            }
                setPhysics({...physics, x:  physics.x -= physics.vx})
            }

        if(keys.ArrowUp && !physics.isAir){
                if(physics.vy < 0.4){
                    setPhysics({...physics, vy:  physics.vy += physics.vy * physics.correction})
                }
                    setPhysics({...physics, y: physics.y -= physics.vy})
                if(physics.y < physics.maxHeight){
                setPhysics({...physics, isAir: physics.isAir = true})
                }
        }
        if(keys.ArrowUp && keys.ArrowRight){
            setCharacterSkin(jumpMoveRightSkin)
        }
        if(keys.ArrowUp && keys.ArrowLeft){
            setCharacterSkin(jumpMoveLeftSkin)
        }
        if(!keys.ArrowUp && !keys.ArrowRight && !keys.ArrowLeft){
            setPhysics({...physics, vy:  physics.vy = 0.1})
            setPhysics({...physics, vx: physics.vx = 0.01})
            setCharacterSkin(defaultSkin)
        }


    }

    const Gravity = () => {
        if(!keys.ArrowUp && physics.y < 590){
            setPhysics({...physics, isAir: physics.isAir = true})
        }
        if(physics.y < 590 && physics.isAir){
            setPhysics({...physics, y: physics.y + physics.vy + 0.2})
        }else{
            setPhysics({...physics, isAir: physics.isAir = false})
        }
    }
    useEffect(() => {
        setInterval(() => {
            setFps( fps + 1 )
        },50)
    }, [DeltaTimer])

    useEffect(() => {
        MoveEvent()
        Gravity()
        PositionCharacters.changeCharacterPosition(physics.x)
    }, [fps])

    return (
        <span className='mainCharacter' ref={ref} style={{backgroundImage: `url(${characterSkin})`,top: `${physics.y}px`,left: `${physics.x}px`}}></span>
        );
};

export default observer(MainCharacter);
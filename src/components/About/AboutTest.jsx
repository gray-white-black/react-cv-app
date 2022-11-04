import React, {useState, useEffect, useContext, useRef, useCallback} from 'react';
import background from "../../assets/images/about.jpg";
import person from "../../assets/images/person.png"
import ArrowRightImg from "../../assets/images/moveRight.png"
import ArrowLeftImg from "../../assets/images/moveLeft.png"
import ArrowUpRightImg from "../../assets/images/moveJumpRight.png"
import ArrowUpLeftImg from "../../assets/images/moveJumpLeft.png"
import npcDadImg from "../../assets/images/NpcGrandFa.png"
import spinyHusk from "../../assets/images/NpcSpinyHusk.png"

const speed = 0.4;  //Speed move

const About = () => {


    const [move, setMove] = useState({})//state/clickMove
    const moveRef = useRef({37:false,38:false,39:false})
    const [animation, setAnimation] = useState(person) //anim photo
    const moveXref = useRef(3)
    const [slegka, setSlegka] = useState(move.current)
    // const jumpRef = useRef("")
    const [moveX, setMoveX] = useState(3) //stateMove
    const [jump, setJump] = useState("")//isJumpAnim?
    const ref = useRef() //ref me
    const refSpiny = useRef() //ref npc
    const refDed = useRef() //ref npc
    const [positionPerson, setPosition] = useState() //position in useEffect
    const [positionNpcDad, setPositionNpcDad] = useState()
    const [positionNpcSpinyHusk, setPositionNpcSpinyHusk] = useState()//position in useEffect
    const [isVisibleFirstBlock, setIsVisibleFirstBlock] = useState(false) //isVisible block? change in Effect, use in if = isClicked
    const [isVisibleSecondBlock, setIsVisibleSecondBlock] = useState(false) //isVisible block? change in Effect, use in if = isClicked
    const [isClickedFirstBlock, setIsClickedFirstBlock] = useState(false) //isClicked = menu_item
    const [isClickedSecondBlock, setIsClickedSecondBlock] = useState(false) //isClicked = menu_item
    const [isEntered, setIsEntered] = useState(false) //isEntered = pressEnter
    const [isEnteredSec, setIsEnteredSec] = useState(false)
    const [key, setKey] = useState('')
        function keyDownHandler(e) {
            setKey(e.key)
            setMove({...move, [e.key] : true})
            console.log(move)

            // switch (key) {
            //     case 'ArrowRight':{
            //
            // }
            //     case 'Arrowleft':{
            //
            //     }
            //     case 'ArrowUp':{
            //
            //     }
            //     case 'Enter':{
            //
            //     }
            // if(e.keyCode >= 37 && e.keyCode <=40){
                // setMove({...move, [e.keyCode] : true})
                // moveRef.current = {...move.current, [e.keyCode] : true} //another variant setMove
            // }
            // npcMenu()
        }

    function keyUpHandler(e) {
        setMove({...move, [e.key] : false})
        // if(e.keyCode >= 37 && e.keyCode <=40){
        //     setMove({...move, [e.keyCode] : false})
        //     // moveRef.current = {...move.current, [e.keyCode] : false} //another variant setMove
        // }
        defaultAnimation()
    }
    console.log(move)
    //if press key...

    function defaultAnimation(){
        setAnimation(person)
        setJump("")
    }
    function updateKeys() {
        if(move['ArrowLeft']){
            console.log('WIN')
            setMoveX(moveX => moveX - speed);
            // moveXref.current -=speed
            setAnimation(ArrowLeftImg);
        }
        if(move['ArrowRight']){
            setMoveX(moveX => moveX + speed);
            // moveXref.current +=speed
            setAnimation(ArrowRightImg);
        }
        if(move['ArrowUp']){
            setJump("jump")
            setAnimation(ArrowUpRightImg)
        }
        //
        // if(move[0] && move[1]){
        //     setJump("jump")
        //     setAnimation(ArrowUpLeftImg)
        // }

        // console.log(positionPerson)
        // console.log(positionNpcDad)
    }

    function npcMenu(){
        if(isVisibleFirstBlock && !isClickedFirstBlock){
            setIsEntered(isEntered => isEntered = true)
        }
        if(key === 'enter' && isVisibleFirstBlock){
            setIsClickedFirstBlock(isClickedFirstBlock => isClickedFirstBlock = true)
            setIsEntered(isEntered => isEntered = false)
        }
        if(!isVisibleFirstBlock){
            setIsClickedFirstBlock(isClickedFirstBlock => isClickedFirstBlock = false)
            setIsEntered(isEntered => isEntered = false)
        }

        if(isVisibleSecondBlock && !isClickedSecondBlock){
            setIsEnteredSec(isEnteredSec => isEnteredSec = true)
        }
        if(key === 'enter' && isVisibleSecondBlock){
            setIsClickedSecondBlock(isClickedSecondBlock => isClickedSecondBlock = true)
            setIsEnteredSec(isEnteredSec => isEnteredSec = false)
        }
        if(!isVisibleSecondBlock){
            setIsClickedSecondBlock(isClickedSecondBlock => isClickedSecondBlock = false)
            setIsEnteredSec(isEnteredSec => isEnteredSec = false)
        }
    }

    useEffect(() => {
            updateKeys()
    }, [move]);

    //getPosition person/npc
    useEffect(() => {
        setPosition(positionPerson => positionPerson = ref.current.getBoundingClientRect().x)
        setPositionNpcDad(positionNpcDad => positionNpcDad = refDed.current.getBoundingClientRect().x)
        setPositionNpcSpinyHusk(positionNpcSpinyHusk => positionNpcSpinyHusk = refSpiny.current.getBoundingClientRect().x)
    });

    //if position person = npcPosition....
    useEffect(() => {
        // console.log('isPosition')
        if(positionNpcDad - positionPerson  <= 30 && positionNpcDad - positionPerson >= -20){
            setIsVisibleFirstBlock(isVisibleFirstBlock => isVisibleFirstBlock = true)
        }else{
            setIsVisibleFirstBlock(isVisibleFirstBlock => isVisibleFirstBlock = false)
        }
    },[ positionPerson, positionNpcDad ])   //listen

    //if position person = npcPosition2....
    useEffect(() => {
        // console.log('isPositionSECOND')
        if(positionNpcSpinyHusk - positionPerson  <= 30 && positionNpcSpinyHusk - positionPerson >= -20){
            setIsVisibleSecondBlock(isVisibleSecondBlock => isVisibleSecondBlock = true)
        }else{
            setIsVisibleSecondBlock(isVisibleSecondBlock => isVisibleSecondBlock = false)
        }
    },[ positionPerson, positionNpcSpinyHusk ])   //listen

    return (
        <div>
        <div onKeyDown={keyDownHandler} onKeyUp={keyUpHandler} tabIndex={0} className="about" style={{backgroundImage: `url(${background})`}}>
            <div className='lightFr'><span>.</span></div>
            <div className='lightFrSec'><span>.</span></div>
            <div className="fog">
            </div>

            <div className={`${isEntered ? "press_enter" : "hide"}`}><p>Press enter</p>
            <div className="imgEnter"></div>
            </div>
            <div  className={`${isClickedFirstBlock ? "menu_item" : "hide"}`}  ><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At enim minima quaerat. Blanditiis dignissimos distinctio</p></div>

            <div className={`${isEnteredSec ? "press_enter_sec" : "hide"}`}><p>Press enter</p>
                <div className="imgEnter_sec"></div>
            </div>
            <div  className={`${isClickedSecondBlock ? "menu_item_sec" : "hide"}`}  ><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At enim minima quaerat. Blanditiis dignissimos distinctio</p></div>
            <div ref={refDed} className="npcDad" style={{backgroundImage:`url(${npcDadImg})`}}></div>
            <div ref={refSpiny}  className="NpcSpinyHusk" style={{backgroundImage:`url(${spinyHusk})`}}></div>
            </div>
    <div  ref={ref} id="person" className={`person breath ${jump}`} style={{left: `${moveX}%`, backgroundImage: `url(${animation})`}}></div>
        </div>
    );
};
export default About;
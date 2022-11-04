import React from 'react';
import leftArrowElem from "../../assets/images/left.png";
import rightArrowElem from "../../assets/images/right.png";
import {Link} from "react-router-dom";


const ListMenu = ({menuItem, isActive, setActive, isClicked, setClick}) => {
    const Click = () => {
    setClick(!isClicked);
    }

    return (

            <Link to={menuItem.name} style={{ textDecoration: 'none' }}>
            <div onClick={Click} className={`menuElem ${isActive ? "active" : ""}`} onMouseEnter={() => setActive()}>
                <img src={leftArrowElem} alt=""/>
                <span>{menuItem.name}</span>
                <img src={rightArrowElem} alt=""/>
            </div>
             </Link>
    );
};

export default ListMenu;
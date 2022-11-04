import React from 'react';
import './Button.scss'
import {Link} from "react-router-dom";

const BackToMenu = () => {
    return (
        <div>
            <Link to='/'><button className='backToMenu'>Back to menu</button></Link>
            <div className='buttonLight'></div>
        </div>


    );
};

export default BackToMenu;
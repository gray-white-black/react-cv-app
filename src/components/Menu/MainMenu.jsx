import React, {useState} from 'react';
import background from '../../assets/images/var1.jpg'
import ListMenu from "./ListMenu";
import Style from "./Menu.scss"

const MainMenu = () => {

    const menuItems = [
        {name:'About'},
        {name:'Skills'},
        {name:'Projects'},
        {name:'Contacts'},
    ]

    const [isActive, setActive] = useState(0)
    const [isClicked, setClick] = useState(false)

    return (
        <div className={`mainMenu ${isClicked ? "mainMenuAnim" : ""}`} style={{backgroundImage: `url(${background})`}}>
            <div className="blur">
                {menuItems.map((item,index) =>
                    <ListMenu isClicked={isClicked} setClick={setClick} menuItem={item} key={index} isActive={isActive===index} setActive={() => setActive(index)}/>
                )}
            </div>
        </div>
    );
};

export default MainMenu;
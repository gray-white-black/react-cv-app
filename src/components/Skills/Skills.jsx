import React from 'react';
import './Skills.scss'
import BackToMenu from "../About/Buttons/BackToMenu";
import SkillList from "./SkillList";
const Skills = () => {
    return (
        <div className='skillsBackground'>
            <div className="navBar">
                <BackToMenu/>
                <SkillList/>
            </div>
        </div>
    );
};

export default Skills;
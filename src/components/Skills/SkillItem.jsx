import React from 'react';
import './Skills.scss'
const SkillItem = ({item, skillList, changeActive}) => {
    console.log(item)
    return (

        <div className='skillItem'>
        <img className='skillImg' src={item.image} onClick={changeActive(item)} alt=""/>
        {/*{*/}
        {/*    isActive ? <span className='skillBorder'></span>*/}
        {/*:*/}
        {/*    null*/}
        {/*}*/}
        </div>
    );
};

export default SkillItem;
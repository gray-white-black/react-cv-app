import React, {useState} from 'react';
import ReactImg from '../../assets/images/SkillReact.png'
import ReduxImg from '../../assets/images/SkillRedux.png'
import JsImg from '../../assets/images/SkillJs.png'
import MobxImg from '../../assets/images/SkillMobx.png'
import GitImg from '../../assets/images/SkillGit.png'
import TypeScriptImg from '../../assets/images/SkillTypeScript.png'
import TailWindImg from '../../assets/images/SkillTailWind.png'
import SkillItem from "./SkillItem";

const SkillList = () => {

    const [skillList, setSkillList] = useState(
        [
            {
                image: ReactImg,
                isActive: true,
                id: 0
            }, {
                image: ReduxImg,
                isActive: false,
                id: 1
            }, {
                image: JsImg,
                isActive: false,
                id: 2
            }, {
                image: MobxImg,
                isActive: false,
                id: 3
            }, {
                image: GitImg,
                isActive: false,
                id: 4

            }, {
                image: TypeScriptImg,
                isActive: false,
                id: 5
            },{
                image: TailWindImg,
                isActive: false,
                id: 6
        }
        ]
    )

    const changeActive = (item) => {
        setSkillList(...skillList, skillList[item.id].isActive = true)
    }

    return (
        <div className='skillList'>
            {skillList.map((item, id) =>
                (<SkillItem item={item} changeActive={changeActive} skillList={skillList} setSkillList={setSkillList} key={item.id}/>)
            )}
        </div>
    );
};

export default SkillList;
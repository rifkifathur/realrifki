import React, { useState } from 'react';
import './Resume.scss';
import work from './work.svg';
import edu from './edu.svg';
import skill from './skill.svg'

const Header = (props) => {
    return (
        <header>
            <span>{props.header}</span>
        </header>   
    );
}

const Work = (props) =>{
    const dataWork = [{id:1, txt:"Tiara Bekasi Hospital", title: "IT Support staff", thn:"2020-2021"},{id:2, txt:"Temprina Media Grafika Company", title: "designer", thn:"2018-2019"}]
    return(
        <ul id='content' className={props.class}>
            {dataWork.map((content) => <li key={content.id}>{content.txt} <span>{content.thn}</span><p><b>as {content.title}</b></p></li>)}
        </ul>
    )
}

const Edu = (props) =>{
    const dataEdu = [{id:1, txt:"Indraprasta PGRI University", thn:"2019-2023"},{id:2, txt:"Karya Guna 2 Bekasi Vocational School", thn:"2015-2018"}]
    return(
        <ul id='content' className={props.class}>
            {dataEdu.map((content) => <li key={content.id}>{content.txt} <span>{content.thn}</span></li>)}
        </ul>
    )
}

const Skill = (props) =>{
    const dataSkill = [{id:1, txt:"HTML"},{id:2, txt:"CSS"},{id:3, txt:"JavaScript"},{id:4, txt:"React Js"}]
    return(
        <ul id='content' className={props.class}>
            {dataSkill.map((content) => <li key={content.id}>{content.txt}</li>)}
        </ul>
    )
}

const Resume = () => {
    const [tab, setTab] = useState(1);

    return (
        <section className="resume_" id='resume'>
            <Header header="My Resume"/>
            <div className="container">
                <div className="col_left">
                    <div className="card">
                        <div onClick={() => setTab(1)} id='btnWork' className={tab === 1 ? 'active' : null}><img src={work} alt="" /><span>Work</span></div>
                        <div onClick={() => setTab(2)} id='btnEdu' className={tab === 2 ? 'active' : null}><img src={edu} alt="" /><span>Education</span></div>
                        <div onClick={() => setTab(3)} id='btnSkill' className={tab === 3 ? 'active' : null}><img src={skill} alt="" /><span>Skill</span></div>
                    </div>
                </div>
                <div className="col_right">
                    <Work class={tab === 1 ? 'active-tab' : null}/>
                    <Edu class={tab === 2 ? 'active-tab' : null}/>
                    <Skill class={tab === 3 ? 'active-tab' : null}/>
                </div>
            </div>
        </section>
    );
};

export default Resume;
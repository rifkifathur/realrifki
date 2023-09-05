import React, { useState } from 'react';
import './Resume.scss';
import work from './work.svg';
import edu from './edu.svg';
import skill from './skill.svg';
import { FaCss3Alt, FaHtml5, FaJava, FaLaravel, FaPhp, FaReact } from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';

const Header = (props) => {
    return (
        <header>
            <span>{props.header}</span>
        </header>
    );
}

const mySort = (data) => {
    return data.sort((a, b) => b.id - a.id);
}

const Work = (props) => {
    const dataWork = [
        { id: 1, txt: "Temprina Media Grafika Inc", title: "Designer", thn: "Dec 2018 - Dec 2019" },
        { id: 2, txt: "Tiara Bekasi Hospital", title: "IT Support staff", thn: "Oct 2020 - Mar 2021" },
        { id: 3, txt: "Niramas Utama Inc", title: "Programmer Intern", thn: "May 2023 - Aug 2023" },
        { id: 4, txt: "Freelance", title: "Web Developer", thn: "2022 - Now" },
    ]

    mySort(dataWork);

    return (
        <ul id='content' className={props.class}>
            {dataWork.map((content) => <li key={content.id}><b>{content.txt}</b><p>{content.title} | <span>{content.thn}</span></p></li>)}
        </ul>
    )
}

const Edu = (props) => {
    const dataEdu = [
        { id: 1, txt: "Karya Guna 2 Bekasi Vocational School", title:"Network & Comp Engineering", thn: "2015-2018" },
        { id: 2, txt: "Indraprasta PGRI University", title:"Informatics Engineering", thn: "2019-2023" }
    ]

    mySort(dataEdu);

    return (
        <ul id='content' className={props.class}>
            {dataEdu.map((content) => <li key={content.id}><b>{content.txt}</b> <p>{content.title} | <span>{content.thn}</span></p></li>)}
        </ul>
    )
}

const Skill = (props) => {
    const dataSkill = [{ id: 1, txt: "HTML" }, { id: 2, txt: "CSS" }, { id: 3, txt: "JavaScript" }, { id: 4, txt: "React Js" }]
    return (
        <ul id='content' className={props.class}>
            {/* {dataSkill.map((content) => <li key={content.id}>{content.txt}</li>)} */}
            <div className='content-skill'>
                <div>
                    <h4>HTML</h4>
                    <FaHtml5 style={{ color: '#e34c26', fontSize: 65 }} />
                </div>
                <div>
                    <h4>CSS</h4>
                    <FaCss3Alt style={{ color: '#264de4', fontSize: 65 }} />
                </div>
                <div>
                    <h4>Javascript</h4>
                    <SiJavascript style={{ color: '#F0DB4F', fontSize: 65 }} />
                </div>
                <div>
                    <h4>PHP</h4>
                    <FaPhp style={{ color: '#8993be', fontSize: 65 }} />
                </div>
                <div>
                    <h4>Java</h4>
                    <FaJava style={{ color: '#f89820', fontSize: 65 }} />
                </div>
                <div>
                    <h4>React JS</h4>
                    <FaReact style={{ color: '#7cc5d9', fontSize: 65 }} />
                </div>
                <div>
                    <h4>Laravel</h4>
                    <FaLaravel style={{ color: '#fb503b', fontSize: 65 }} />
                </div>
            </div>
        </ul>
    )
}

const Resume = () => {
    const [tab, setTab] = useState(1);

    return (
        <section className="resume_" id='resume'>
            <Header header="My Resume" />
            <div className="container">
                <div className="col_left">
                    <div className="card">
                        <div onClick={() => setTab(1)} id='btnWork' className={tab === 1 ? 'active' : null}><img src={work} alt="" /><span>Work</span></div>
                        <div onClick={() => setTab(2)} id='btnEdu' className={tab === 2 ? 'active' : null}><img src={edu} alt="" /><span>Education</span></div>
                        <div onClick={() => setTab(3)} id='btnSkill' className={tab === 3 ? 'active' : null}><img src={skill} alt="" /><span>Skill</span></div>
                    </div>
                </div>
                <div className="col_right">
                    <Work class={tab === 1 ? 'active-tab' : null} />
                    <Edu class={tab === 2 ? 'active-tab' : null} />
                    <Skill class={tab === 3 ? 'active-tab' : null} />
                </div>
            </div>
        </section>
    );
};

export default Resume;
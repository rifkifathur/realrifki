import { useState } from 'react';
import './TopNav.scss';

const TopNav = () => {
    const [toggle, setToggle] = useState(false);

    const active_nav = () =>{
        setToggle(!toggle)
     }

    return (
        <nav>
            <div className="container">
                <h1><a href="/#home" onClick={active_nav}>RFN</a></h1>
                <ul id= "nav" className={toggle ? 'active' : null}>
                    <li><a href="./#home" onClick={active_nav}>Home</a></li>
                    <li><a href="./#about" onClick={active_nav}>About</a></li>
                    <li><a href="./#resume" onClick={active_nav}>Resume</a></li>
                    <li><a href="./#port" onClick={active_nav}>Projects</a></li>
                    <li><a href="./#contact" onClick={active_nav}>Contact</a></li>
                </ul>
                <div className="burger" onClick={active_nav}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </nav>
    );
};

export default TopNav;
import './About.scss';
import me from './me.jpg'


export const Header = (props) => {
    return (
        <header>
            <span>{props.header}</span>
        </header>   
    );
};

const About = () => {
    return (
        <section className="about_" id='about'>
            <Header header="About Me"/>
            <div className="container">
                <div className="col_left">
                    <img src={me} alt="" />
                </div>
                <div className="col_right">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui veritatis quo, enim fuga, dicta esse eos quibusdam odit modi officiis dolores ipsum neque labore voluptate error facilis? Dolorem, quo sit?</p>
                </div>
            </div>
        </section>
    );
};

export default About;
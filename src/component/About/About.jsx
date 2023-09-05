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
            <Header header="About Me" />
            <div className="container">
                <div className="col_left">
                    <img src={me} alt="" />
                </div>
                <div className="col_right">
                    <p>Hi, my name is Rifki Fathurrohman. I am a Web Developer based in Bekasi, Indonesia.
                        I have a passion for the field of programming, especially in the field of web programming. I am a person who is organized and focused on work results, thorough,
                        responsible and disciplined in everything. I can communicate well. Able to work in a
                        team or individually.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
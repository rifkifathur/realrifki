import './About.scss';



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
                    <img src="./assets/me.jpg" alt="" />
                </div>
                <div className="col_right">
                    <p>cxvxc</p>
                </div>
            </div>
        </section>
    );
};

export default About;
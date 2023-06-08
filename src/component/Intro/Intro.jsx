import './Intro.scss';
import ProfilePict from './foto_profile_.jpg'
const Intro = () => {
    return (
        <section className="intro_" id='home'>
                <div className="col_left">
                    <h3>
                        <span>Hello, IM <span>Rifki Fathur</span></span>
                        <span>Web Developer</span>
                    </h3>
                </div>
                <div className="col_right">
                    <img src={ProfilePict} alt="profile_pict" />
                </div>
                <footer>
                    <img src="./assets/3.svg" alt="footer" />
                </footer>
        </section>
    );
};

export default Intro;
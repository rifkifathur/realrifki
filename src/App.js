import TopNav from './component/Navbar/TopNav';
import Intro from './component/Intro/Intro';
import About from './component/About/About';
import Resume from './component/Resume/Resume';
import Portfolio from './component/Portfolio/Portfolio';
import Contact from './component/Contact/Contact';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
      <TopNav />
      <Intro />
      <About />
      <Resume />
      <Portfolio />
      <Contact />
    </>    
  );
}

export default App;

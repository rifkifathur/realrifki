import './Portfolio.scss';
import React, { Component } from 'react';
import Slider from "react-slick";
import portfolio1 from './portfolio1.png';
import portfolio2 from './portfolio2.png';
import portfolio3 from './portfolio3.png';
import portfolio4 from './portfolio4.png';





const Header = (props) => {
    return (
        <header>
            <span>{props.header}</span>
        </header>   
    );
}
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block"}}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block"}}
        onClick={onClick}
      />
    );
  }

class Portfolio extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />
          };

        return (
        <section className="porto_" id='port'>
            <Header header="Projects"/>
            <div className="container">
                <Slider ref={slider => (this.slider = slider)} {...settings}>
                    <div className="content-slider">
                        <img src={portfolio1} alt="" />                        
                    </div>
                    <div className="content-slider">
                        <img src={portfolio2} alt="" />                        
                    </div>
                    <div className="content-slider">
                        <img src={portfolio3} alt="" />                        
                    </div>
                    <div className="content-slider">
                        <img src={portfolio4} alt="" />                        
                    </div>
                </Slider>
            </div>
        </section>
        );
    }
}

export default Portfolio;
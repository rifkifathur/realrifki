import './Portfolio.scss';
import React, { Component } from 'react';
import Slider from "react-slick";


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
            <Header header="Portfolio"/>
            <div className="container">
                <Slider ref={slider => (this.slider = slider)} {...settings}>
                    <div >
                        <img src="./assets/portofolio.svg" alt="" width="100%"/>
                    </div>
                    <div>
                        <span>Search project ....</span>
                    </div>
                    <div>
                      <span>Search project ....</span>
                    </div>
                </Slider>
            </div>
        </section>
        );
    }
}

export default Portfolio;
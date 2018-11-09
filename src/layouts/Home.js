import React, { Component } from 'react';
import '../basscss.min.css';
import '../index.css';
import banner from '../img/banner.png';
import Carousel from 'nuka-carousel';
import CountUp, {startAnimation} from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

const style = {
  componentName: {},
  col: {},
  countup: {},
};

// const colors = ["7732bb", "047cc0", "00884b", "e3bc13", "db7c00", "aa231f"];

class Home extends Component {
  constructor(props) {
    super(...arguments);
    this.state = {
      slideIndex: 0,
      length: 6,
      wrapAround: false,
      underlineHeader: false,
      slidesToShow: 1.0,
      cellAlign: "left",
      transitionMode: "scroll",
      heightMode: "max",
      withoutControls: false

      
    };

    // this.handleImageClick = this.handleImageClick.bind(this);

    // super(props);
    // this.onVisibilityChange = this.onVisibilityChange.bind(this); // Bind for appropriate 'this' context
  }

  // handleImageClick() {
  //   this.setState({ underlineHeader: !this.state.underlineHeader });
  // }

  // onVisibilityChange(isVisible) {
  //   if (isVisible) {
  //     startAnimation(this.CountUp);
  //   }
  // }

  render() {
    return (			
		<div className="col col-12">
            <p className="libre f26 hitam center text-home-atas py2 my3">
            We help our clients to define their identity 
            and resonate with their audience through beautifully crafted, 
            creative and innovative solutions.    
            </p>
            <h1 className="libre hitam center f58">Welcome to Clover & Crow.</h1>
            <div className="col col-12 bg-home">
              <img src={banner} className="fit centered" />
            </div>
            <div className="col col-12 py3">
            <h1 className="caps pop hitam f18 ls2 left-align px3">featured work</h1>
              <div className="col col-12">
                  <div className="col col-12 lg-col-4">
                  <img src='https://via.placeholder.com/368' className="fit" alt="img" />
                  <h1 className="caps hitam libre f18">Stacy Johnson</h1>
                  </div>
                  <div className="col col-12 lg-col-4">
                  <img src='https://via.placeholder.com/368' className="fit" alt="img" />
                  <h1 className="caps hitam libre f18">THE HAVEN COLLECTIVE (COMING SOON!)</h1>
                  </div>
                  <div className="col col-12 lg-col-4">
                  <img src='https://via.placeholder.com/368' className="fit" alt="img" />
                  <h1 className="caps hitam libre f18">Petite Emme</h1>
                  </div>
              </div>
              {/* Services */}
              <div className="col col-12 bg-putih py3 my3">
                <h1 className="caps hitam libre f24">Services</h1>
                <p className="f18 hitam pop">Everything you need from a design studio, under one roof.</p>
                <div className="col col-12 px4">
                  <div className="col col-12 lg-col-4 px1">
                    <ul className="list-reset">
                      <li className="f18 hitam libre caps mb2">branding</li>
                      <li className="f18 hitam libre">-</li>
                      <li className="f18 hitam libre bold my2">Convey your passion with a strong foundation.</li>
                      <li className="f18 hitam pop">Brand strategy, concept development, primary + secondary logo, mark(s) + pattern design, font system, two collateral items, brand guides and final files.</li>
                    </ul>
                  </div>
                  <div className="col col-12 lg-col-4 px1">
                    <ul className="list-reset">
                      <li className="f18 hitam libre caps mb2">graphic design</li>
                      <li className="f18 hitam libre">-</li>
                      <li className="f18 hitam libre bold my2">Connect and resonate with your audience.</li>
                      <li className="f18 hitam pop">Business cards, letterheads, iconography, print and online advertising, social media branding, brochures, catalogues, label + packaging design.</li>
                    </ul>
                  </div>
                  <div className="col col-12 lg-col-4 px1">
                  <ul className="list-reset">
                      <li className="f18 hitam libre caps mb2">web design</li>
                      <li className="f18 hitam libre">-</li>
                      <li className="f18 hitam libre bold my2">Where your business can really take flight.</li>
                      <li className="f18 hitam pop">Websites and landing pages that come standard with built in SEO, powerful analytics, SSL certificates as well as mobile and tablet optimization.</li>
                    </ul>
                  </div>
                </div>
                  <div className="col col-12 px3">
                  <button className="center text-decoration-none btn-merah p2">READ UP ON OUR PROCESS AND WHAT YOU CAN EXPECT from clover & crow</button>
                  {/* <a href="#" className="center text-decoration-none btn-merah p2">READ UP ON OUR PROCESS AND WHAT YOU CAN EXPECT from clover & crow</a> */}
                  </div>
              </div>
              {/* Services */}
              {/* Slider */}
              <div className="col col-12 my3 px4">
              <Carousel slideIndex={this.state.slideIndex}
      afterSlide={slideIndex => this.setState({ slideIndex })}>
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide1" />
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide2" />
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide3" />
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide4" />
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide5" />
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide6" />
      </Carousel>
              </div>
              {/* Slider */}
              {/* Let's design something amazing together! */}
              <div className="col col-12 bg-putih py4">
                <div className="col col-12 mb3">

                  <div className="col col-12 lg-col-4">
                    <ul className="list-reset">
                      <li className="block maroon caps f58">
                     
                      <VisibilitySensor
            onChange={this.onVisibilityChange}
            delayedCall // Prevents react apps triggering elements as visible before styles are loaded
          >
            <CountUp className={style.countup} decimals={1} start={0} end={480}  duration={3}
                     ref={countUp => { this.CountUp = countUp; }} // From react-countup README 
            />
          </VisibilitySensor>

                      </li>
                      <li className="block pop caps hitam">happy clients</li>
                    </ul>
                  </div>
                  <div className="col col-12 lg-col-4">
                    <ul className="list-reset">
                      <li className="block maroon caps f58">6550</li>
                      <li className="block pop caps hitam">cups and coffe (and counting)</li>
                    </ul>
                  </div>
                  <div className="col col-12 lg-col-4">
                    <ul className="list-reset">
                      <li className="block maroon caps f58">296</li>
                      <li className="block pop caps hitam">fonts downloaded</li>
                    </ul>
                  </div>                  
                </div>
                <h1 className="hitam f58 libre text-home-atas my4">Let's design something amazing together!</h1>
                  <p className="text-home-atas pop f14 hitam">Interested in working together? Awesome! If you haven't already, head over to our FAQ's page to have a read, then feel free to drop us a line to get the conversation started!</p>
              </div>
              {/* Let's design something amazing together! */}
              {/* Insta */}
              <div className="col col-12 py4 px4">
                <h1 className="f58 libre hitam text-home-atas2">Clover & Crow is a boutique graphic and web design studio based in Winnipeg, MB Canada.</h1>
                <div className="col col-12">
                  <div className="col col-12 lg-col-6">
                    <h1 className="pop hitam left-align f14 caps ls1 s-center">insta post daily</h1>
                  </div>
                  <div className="col col-12 lg-col-6">
                    <h1 className="pop hitam right-align f14 s-center">@helloknvm</h1>
                  </div>
                  <div className="col col-12">

                    <div className="col col-12 md-col-6 lg-col-2">
                    <img src='https://via.placeholder.com/182x191' className="fit" alt="img" />
                    </div>
                    <div className="col col-12 md-col-6 lg-col-2">
                    <img src='https://via.placeholder.com/182x191' className="fit" alt="img" />
                    </div>
                    <div className="col col-12 md-col-6 lg-col-2">
                    <img src='https://via.placeholder.com/182x191' className="fit" alt="img" />
                    </div>
                    <div className="col col-12 md-col-6 lg-col-2">
                    <img src='https://via.placeholder.com/182x191' className="fit" alt="img" />
                    </div>
                    <div className="col col-12 md-col-6 lg-col-2">
                    <img src='https://via.placeholder.com/182x191' className="fit" alt="img" />
                    </div>
                    <div className="col col-12 md-col-6 lg-col-2">
                    <img src='https://via.placeholder.com/182x191' className="fit" alt="img" />
                    </div>
                  </div>
                </div>
              </div>
              {/* Insta */}
            </div>
    </div>
    );
  }
}
export default Home;
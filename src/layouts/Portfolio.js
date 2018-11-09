import React, { Component } from 'react';
import '../basscss.min.css';
import '../index.css';
import port1 from '../img/Mockup Web 1.png';
import port2 from '../img/Safe Label Design.png';
import port3 from '../img/SAFE MOCKUP 1.jpg';
import port4 from '../img/UPOPX TAKEAWAY 4.jpg';

class Portfolio extends Component {
  render() {
    return (
			<div className="col col-12 p4 my2">   
            <div className="col col-12">
                <div className="col col-12 lg-col-6 px2">
                    <img src={port1} className="fit" alt="img" />
                    <p className="pop f14 hitam caps">mega cctvindo</p>
                </div>
                <div className="col col-12 lg-col-6 px2">
                    <img src={port2} className="fit" alt="img" />
                    <p className="pop f14 hitam caps">safe label</p>
                </div>
            </div>
            <div className="col col-12">
                <div className="col col-12 lg-col-6 px2">
                    <img src={port2} className="fit" alt="img" />
                    <p className="pop f14 hitam caps">safe label</p>
                </div>
                <div className="col col-12 lg-col-6 px2">
                    <img src={port1} className="fit" alt="img" />
                    <p className="pop f14 hitam caps">mega cctvindo</p>
                </div>
            </div>
            <div className="col col-12">
                <div className="col col-12 lg-col-6 px2">
                    <img src={port1} className="fit" alt="img" />
                    <p className="pop f14 hitam caps">mega cctvindo</p>
                </div>
                <div className="col col-12 lg-col-6 px2">
                    <img src={port2} className="fit" alt="img" />
                    <p className="pop f14 hitam caps">safe label</p>
                </div>
            </div>
            </div>
    );
  }
}
export default Portfolio;
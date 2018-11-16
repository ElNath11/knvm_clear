import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from '../img/knvm-logo.png';

class Header extends Component {
  render() {
    return (
			<header id="header">
  			<div className="logo">
					<img src={logo} className="fit logo" /></div>
					<nav className="menu">
					<ul className="list-reset pop f12 caps">
			 			<li className="inline-block mr1"><Link to="/home" className="text-decoration-none hitam to-grey">welcome</Link></li>
			 			<li className="inline-block mr1"><Link to="/about" className="text-decoration-none hitam to-grey">about</Link></li>
			 			<li className="inline-block mr1"><Link to="/portfolio" className="text-decoration-none hitam to-grey">portfolio</Link></li>
			 			<li className="inline-block mr1"><Link to="/services" className="text-decoration-none hitam to-grey">services</Link></li>
			 			<li className="inline-block mr1"><Link to="/inquire" className="text-decoration-none hitam to-grey btn-merah p1">inquire</Link></li>
			 		{/* 		<li className="inline-block"><Link to="" className="text-decoration-none hitam to-grey">inquire</Link></li> */}
			 		</ul>
					</nav>

					
				</header>
    );
  }
}
export default Header;
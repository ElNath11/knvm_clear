import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from '../img/knvm-logo.png';
import '../basscss.min.css';
import '../index.css';




class Header extends Component {
  render() {
    return (
			<header id="header">
  			<div class="logo">
					<img src={logo} className="fit logo" /></div>
					<nav class="menu">
					<ul className="list-reset pop f12 caps">
			 			<li className="inline-block mr1"><Link to="/home" className="text-decoration-none hitam to-grey">welcome</Link></li>
			 			<li className="inline-block mr1"><Link to="/about" className="text-decoration-none hitam to-grey">about</Link></li>
			 			{/* <li className="inline-block mr1"><Link to="" className="text-decoration-none hitam to-grey">process</Link></li>
			 			<li className="inline-block mr1"><Link to="" className="text-decoration-none hitam to-grey">services</Link></li>
			 			<li className="inline-block mr1"><Link to="" className="text-decoration-none hitam to-grey">faq's</Link></li>
			 			<li className="inline-block"><Link to="" className="text-decoration-none hitam to-grey">inquire</Link></li> */}
			 		</ul>
					</nav>

					
				</header>
    );
  }
}
export default Header;
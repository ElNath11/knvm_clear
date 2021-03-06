import React, { Component } from 'react';
import logo from '../img/knvm-logo.png';



class Footer extends Component {
  render() {
    return (			
		<div className="col col-12 bg-hitam py2 px4 f12">
            <div className="col col-12 lg-col-2 left-align px1"> 
                <ul className="list-reset">
                    <li className="block pop caps bold putih mb2">location</li>
                    <li className="block pop caps putih">Malang, Indonesie</li>
                    <li className="block pop caps putih">Time Zone: WIB</li>
                </ul>
            </div>
            <div className="col col-12 lg-col-3 left-align px1"> 
                <ul className="list-reset">
                    <li className="block pop caps bold putih mb2">Hours</li>
                    <li className="block pop caps putih">MONDAY - FRIDAY: 10am - 6pm </li>
                    <li className="block pop caps putih">SATURDAY + SUNDAY: CLOSED</li>
                </ul>
            </div>
            <div className="col col-12 lg-col-3 left-align px1"> 
                <ul className="list-reset">
                    <li className="block pop caps bold putih mb2">CONTACT</li>
                    <li className="block pop caps putih">(204) 996-5046</li>
                    <li className="block pop caps putih">hell0@knvm.com</li>
                </ul>
            </div>
            <div className="col col-12 lg-col-2 left-align px1"> 
            <ul className="list-reset">
                    <li className="block pop caps bold putih mb2">SOCIAL</li>
                    <li className="inline-block pop caps putih pr1"><img src='https://via.placeholder.com/32' className="fit" alt="img" /></li>
                    <li className="inline-block pop caps putih pr1"><img src='https://via.placeholder.com/32' className="fit" alt="img" /></li>
                    <li className="inline-block pop caps putih "><img src='https://via.placeholder.com/32' className="fit" alt="img" /></li>
                </ul>
            </div>
            <div className="col col-12 lg-col-2 left-align px1"> 
                <img src={logo} className="fit logo-footer" />
            </div>
        </div>
    );
  }
}
export default Footer;
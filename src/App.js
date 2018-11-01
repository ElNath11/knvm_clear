import React, { Component } from 'react';
import logo from './logo.svg';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import Header from './layouts/Header';
import Home from './layouts/Home';
import Footer from './layouts/Footer';
// import Home from '../App';
import AboutPage from './layouts/AboutPage.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/home" exact component={Home} />
      	<Route path="/about" component={AboutPage} />
        <Footer />
      </div>
    );
  }
}

export default App;

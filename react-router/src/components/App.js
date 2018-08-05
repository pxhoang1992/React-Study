import React, { Component } from 'react';
import '../css/App.css';
import Nav from './Nav';
import Home from './Home';
import Footer from './Footer';
import Contact from './Contact';
import Redirect from '../router/Redirect';
import Details from './Details';
import News from './News';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class App extends Component {
  render() {
    return (

      <Router>
        <div>
          <Nav />
          <Redirect />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;

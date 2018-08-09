import React, { Component } from 'react';
import News from '../components/News';
import Details from '../components/Details';
import Contact from '../components/Contact';
import Home from '../components/Home';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom'

class Redirect extends Component {
    render() {
        return (
                <div>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/news" component={News} />
                    <Route exact path="/detail/:slug.:id.html" component={Details} />
                    <Route exact path="/contact" component={Contact} />
                </div>
        );
    }
}

export default Redirect;
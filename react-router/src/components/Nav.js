import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom'
  import { NavLink } from 'react-router-dom'

class Nav extends Component {
    render() {
        return (
            <div>
                {/* begin menu  */}
                <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
                    <div className="container">
                        <a className="navbar-brand js-scroll-trigger" href="#page-top">React Study</a>
                        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            Menu
      <i className="fa fa-bars" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ml-auto">
                                <li><NavLink to="/" activeClassName="selected">Home</NavLink></li>
                                <li><NavLink to="/news" activeClassName="selected">News</NavLink></li>
                                <li><NavLink to="/detail" activeClassName="selected">Detail</NavLink></li>
                                <li><NavLink to="/contact" activeClassName="selected">Contact</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                {/* end menu */}

            </div>
        );
    }
}

export default Nav;
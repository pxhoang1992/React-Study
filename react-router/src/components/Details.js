import React, { Component } from 'react';
import ig1 from '../img/3.jpg';
import ig2 from '../img/4.jpg';
import ig3 from '../img/5.jpg';
import ig4 from '../img/6.jpg';
import ig5 from '../img/7.jpg';
import { NavLink } from 'react-router-dom'

class Details extends Component {
    render() {
        return (
            <div>
                <div>
                    {/* content */}
                    <header className="masthead tintuc">
                        <div className="container h-100">
                            <div className="row h-100">
                                <div className="col-lg-12 my-auto">
                                    <div className="header-content mx-auto">
                                        <h1 className="mb-1 text-center">Trang chi tiết phim</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>
                    {/* begin tintuc */}
                    <div className="jumbotron jumbotron-fluid">
                        <div className="container">
                            <img src={ig1} className="img-fluid" alt="react png" />
                            <p className="lead">Jumbo helper text</p>
                            <hr className="my-2" />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eveniet perferendis, nulla, aspernatur voluptatem
                              asperiores quia exercitationem hic eaque, excepturi ad enim blanditiis consectetur perspiciatis alias atque
        maiores sed in.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eveniet perferendis, nulla, aspernatur voluptatem
                              asperiores quia exercitationem hic eaque, excepturi ad enim blanditiis consectetur perspiciatis alias atque
        maiores sed in.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eveniet perferendis, nulla, aspernatur voluptatem
                              asperiores quia exercitationem hic eaque, excepturi ad enim blanditiis consectetur perspiciatis alias atque
        maiores sed in.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eveniet perferendis, nulla, aspernatur voluptatem
                              asperiores quia exercitationem hic eaque, excepturi ad enim blanditiis consectetur perspiciatis alias atque
        maiores sed in.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eveniet perferendis, nulla, aspernatur voluptatem
                              asperiores quia exercitationem hic eaque, excepturi ad enim blanditiis consectetur perspiciatis alias atque
        maiores sed in.</p>
                        </div>
                    </div>
                    <div className="container">
                        <div className="card border-primary">
                            <h4 className="card-title text-center">Phim liên quan</h4>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="card-deck">
                                    <div className="card">
                                        <NavLink to="/detail" activeClassName="selected">
                                            <img className="card-img-top" src={ig2} alt="react png" />
                                        </NavLink>
                                        <div className="card-body">
                                            <h4 className="card-title">Title</h4>
                                            <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe perferendis sequi aut inventore,
                                              est iure ullam! Inventore nesciunt exercitationem dolor provident maxime. Aperiam aliquid
                odit itaque amet adipisci voluptatem voluptas.</p>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <NavLink to="/detail" activeClassName="selected">
                                            <img className="card-img-top" src={ig3} alt="react png" />
                                        </NavLink>
                                        <div className="card-body">
                                            <h4 className="card-title">Title</h4>
                                            <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe perferendis sequi aut inventore,
                                              est iure ullam! Inventore nesciunt exercitationem dolor provident maxime. Aperiam aliquid
                odit itaque amet adipisci voluptatem voluptas.</p>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <NavLink to="/detail" activeClassName="selected">
                                            <img className="card-img-top" src={ig4} alt="react png" />
                                        </NavLink>
                                        <div className="card-body">
                                            <h4 className="card-title">Title</h4>
                                            <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe perferendis sequi aut inventore,
                                              est iure ullam! Inventore nesciunt exercitationem dolor provident maxime. Aperiam aliquid
                odit itaque amet adipisci voluptatem voluptas.</p>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <NavLink to="/detail" activeClassName="selected">
                                            <img className="card-img-top" src={ig5} alt="react png" />
                                        </NavLink>
                                        <div className="card-body">
                                            <h4 className="card-title">Title</h4>
                                            <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe perferendis sequi aut inventore,
                                              est iure ullam! Inventore nesciunt exercitationem dolor provident maxime. Aperiam aliquid
                odit itaque amet adipisci voluptatem voluptas.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* end tintuc */}
                </div>

            </div>
        );
    }
}

export default Details;
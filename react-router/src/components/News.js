import React, { Component } from 'react';
import ig1 from '../img/3.jpg';
import ig2 from '../img/4.jpg';
import ig3 from '../img/5.jpg';
import ig4 from '../img/6.jpg';
import ig5 from '../img/7.jpg';
import { NavLink } from 'react-router-dom'

class News extends Component {
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
                                        <h1 className="mb-1 text-center">Trang danh sách phim</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>
                    {/* begin tintuc */}
                    <div className="container">
                        <div className="row mt-3">
                            <div className="col-4">
                                <div className="card-deck">
                                    <div className="card">
                                    <NavLink to="/detail" activeClassName="selected"><img className="card-img-top" src={ig1} alt="react jpg" /></NavLink>
                                        <div className="card-body">
                                            <h4 className="card-title">Jedi cuối cùng (2017)</h4>
                                            <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque error quas atque non reiciendis
                                              natus qui sint asperiores, voluptatibus ex quisquam unde tenetur nisi animi consequuntur,
                nihil dolorem esse dicta?</p>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                            </div>
                            <div className="col-4">
                                <div className="card-deck">
                                    <div className="card">
                                    <NavLink to="/detail" activeClassName="selected"><img className="card-img-top" src={ig2} alt="react jpg" /></NavLink>
                                        <div className="card-body">
                                            <h4 className="card-title">Thần lực thức tỉnh (2015)</h4>
                                            <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque error quas atque non reiciendis
                                              natus qui sint asperiores, voluptatibus ex quisquam unde tenetur nisi animi consequuntur,
                nihil dolorem esse dicta?</p>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                            </div>
                            <div className="col-4">
                                <div className="card-deck">
                                    <div className="card">
                                    <NavLink to="/detail" activeClassName="selected"><img className="card-img-top" src={ig3} alt="react jpg" /></NavLink>
                                        <div className="card-body">
                                            <h4 className="card-title">Sự báo thù của người Sith (2005)</h4>
                                            <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque error quas atque non reiciendis
                                              natus qui sint asperiores, voluptatibus ex quisquam unde tenetur</p>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                            </div>
                            <div className="col-4">
                                <div className="card-deck">
                                    <div className="card">
                                    <NavLink to="/detail" activeClassName="selected"><img className="card-img-top" src={ig4} alt="react jpg" /></NavLink>
                                        <div className="card-body">
                                            <h4 className="card-title">Sự xâm lăng của người Vô tính (2002)</h4>
                                            <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque error quas atque non reiciendis
                                              natus qui sint asperiores, voluptatibus ex quisquam unde tenetur nisi animi consequuntur,
                nihil dolorem esse dicta?</p>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                            </div>
                            <div className="col-4">
                                <div className="card-deck">
                                    <div className="card">
                                    <NavLink to="/detail" activeClassName="selected"><img className="card-img-top" src={ig5} alt="react jpg" /></NavLink>
                                        <div className="card-body">
                                            <h4 className="card-title">Hiểm họa bóng ma (1999)5</h4>
                                            <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque error quas atque non reiciendis
                                              natus qui sint asperiores, voluptatibus ex quisquam unde tenetur nisi animi consequuntur,
                nihil dolorem esse dicta?</p>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                            </div>
                        </div>
                    </div>
                    {/* end tintuc */}
                    {/* end content     */}
                </div>

            </div>
        );
    }
}

export default News;
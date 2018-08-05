import React, { Component } from 'react';
import a from '../img/1.jpg';

class Home extends Component {
    render() {
        return (
            <div>
                <div>
                    {/* content */}
                    <header className="masthead">
                        <div className="container h-100">
                            <div className="row h-100">
                                <div className="col-lg-7 my-auto">
                                    <div className="header-content mx-auto">
                                        <h1 className="mb-5">Chiến tranh giữa các vì sao</h1>
                                        <a href="#" className="btn btn-outline btn-xl js-scroll-trigger">Start Watching Now </a>
                                    </div>
                                </div>
                                <div className="col-lg-5 my-auto">
                                    <div className="device-container">
                                        <div className="device-mockup iphone6_plus portrait white">
                                            <div className="device">
                                                <div className="screen">
                                                    {/* Demo image for screen mockup, you can put an image here, some HTML, an animation, video, or anything else! */}
                                                    <img src={a} className="img-fluid" alt="starwar3" />
                                                </div>
                                                <div className="button">
                                                    {/* You can hook the "home button" to some JavaScript events or just remove it */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>
                    
                    {/* end content     */}
                </div>

            </div>
        );
    }
}

export default Home;
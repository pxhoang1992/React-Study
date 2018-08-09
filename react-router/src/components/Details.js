import React, { Component } from 'react';
import data from './data.json';
import CardItem from './CardItem';
class Details extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var count = 3;
        return (
            <div>
                <div>
                    {/* content */}
                    <header className="masthead tintuc">
                        <div className="container h-100">
                            <div className="row h-100">
                                <div className="col-lg-12 my-auto">
                                    <div className="header-content mx-auto">
                                        <h1 className="mb-1 text-center">Page Film Detail</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>
                    {/* begin tintuc */}
                    {
                        data.map((value, key) => {
                            if (value.id == this.props.match.params.id) {
                                return (
                                    <div className="jumbotron jumbotron-fluid">
                                        <div className="container">
                                            <div className="img-fluid imgDetail" style={{ 'backgroundImage': `url(${value.image})` }} alt="react png"></div>
                                            <p className="lead">{value.title}</p>
                                            <hr className="my-2" />
                                            <p>{value.content}</p>
                                        </div>
                                    </div>
                                )
                            }
                        })
                    }
                    <div className="container">
                        <div className="card border-primary">
                            <h4 className="card-title text-center">Phim liên quan</h4>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="card-deck">
                                    {
                                        data.map((value, key) => {
                                            console.log('props match id: ', this.props.match.params.id);
                                            if ((value.id != this.props.match.params.id)) {
                                                console.log('value id: ', value.id);
                                                if (count > 0) {
                                                    count--;
                                                    return (
                                                        <CardItem key={key} id={value.id} title={value.title} quote={value.quote} content={value.content} image={value.image}></CardItem>
                                                    )
                                                }
                                            }
                                        })
                                    }
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
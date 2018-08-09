import React, { Component } from 'react';
import Item from './Item';
import data from './data.json';

class News extends Component {
    render() {
        console.log(data);

        return (
            <div>
                <div>
                    {/* content */}
                    <header className="masthead tintuc">
                        <div className="container h-100">
                            <div className="row h-100">
                                <div className="col-lg-12 my-auto">
                                    <div className="header-content mx-auto">
                                        <h1 className="mb-1 text-center">List Film Star War</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>
                    {/* begin tintuc */}
                    <div className="container">
                        <div className="row mt-3">
                            {
                                data.map((value, key) => {
                                    return (
                                        <Item key={key} id={value.id} title={value.title} quote={value.quote} content={value.content} image={value.image}></Item>
                                    )
                                })
                            }
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
import React, { Component } from 'react';

class Names extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="card" className="col-6">
                {/* <img src="..." class="card-img-top" alt="..."/> */}
                    <div className="card-body">
                        <h5 className="card-title">Anthony</h5>
                        <p className="card-text">What's up?</p>
                        {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                    </div>
            </div>
        );
    }
}
export default Names;
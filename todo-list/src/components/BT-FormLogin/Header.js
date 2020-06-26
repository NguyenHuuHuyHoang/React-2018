import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div>
                <div className="d-flex justify-content-between align-items-center p-4">
                    <a href="" className="text-decoration-none d-block text-dark"><i className="fa fa-arrow-left mr-2"></i>Go back</a>
                    <img className=""src="./img/index.png" alt=""/>
                    <div>
                    <button className="btn btn-light">Sign up</button>
                    </div>
                    
                </div>
            </div>
        )
    }
}

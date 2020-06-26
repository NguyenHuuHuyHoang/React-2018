import React, { Component } from 'react'

export default class Icon extends Component {
    render() {
        return (
            <div className="d-flex flex-column border p-5 bg-secondary text-light">
                <i className={`text-light ${this.props.objData.icon}`}></i>
                {this.props.objData.text}
            </div>
        )
    }
}

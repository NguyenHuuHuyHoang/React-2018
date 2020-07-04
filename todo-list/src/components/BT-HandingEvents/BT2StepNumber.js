import React, { Component } from 'react'

export default class BT2StepNumber extends Component {

    constructor () {
        super()
        this.state = {
            number : 0
        }
    }

    AddNumber = () => {
        let newNumber = this.state.number + 1
        this.setState (
            {
                number : newNumber
            }
        )
    }

    SubtractNumber = () => {
        let newNumber = this.state.number -1
        this.setState({
            number: newNumber
        })
    }



    render() {
        return (
            <div>
                <button className="btn btn-success mr-2" onClick={this.AddNumber}>+</button>
                <span>{this.state.number}</span>
                <button className="btn btn-danger ml-2" onClick={this.SubtractNumber}>-</button>
            </div>
        )
    }
}

import React, { Component } from 'react'

class Container1 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            level: "init",
            power:1
        }
    }

    changeLevelState = () => {
        this.setState(
            () =>
                (
                    {
                        level: this.state.level + " "+ "medium"
                    }
                )
        )
    }
    changePowerState = () => {
        this.setState(
            () =>
                (
                    {
                        power: this.state.power + 1
                    }
                )
        )
    }
    bothState = () => {
        this.setState(
            () =>
                (
                    {
                        level: this.state.level + " "+ "medium",
                        power: this.state.power + 1
                    }
                )
        )
    }

    render() {
        return (
            <div>
                <button onClick={() => this.changeLevelState()}>Change Level</button>
                <button onClick={() => this.changePowerState()}>Change Power</button>
                <button onClick={() => this.bothState()}>Change Both</button>
                level  is {this.state.level} and power is {this.state.power}
            </div>
        );
    }
}



export default Container1;
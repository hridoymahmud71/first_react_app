import React, { Component } from 'react'
import Component1 from '../functional/component1'

class Container1 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            level: "init",
            power:1,
            name:"Hakuma",
            age:33
        }
    }

    changeNameToReverseState = () => {
        this.setState(
            () =>
                (
                    {
                        name: this.state.name.split("").reverse().join("")
                    }
                )
        )
    }
    changeAgeState = () => {
        this.setState(
            () =>
                (
                    {
                        age: parseInt(this.state.age + this.state.age*.2) 
                    }
                )
        )
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
    allState = () => {
        this.setState(
            () =>
                (
                    {
                        level: this.state.level + " "+ "medium",
                        power: this.state.power + 1,
                        name: this.state.name.split("").reverse().join(""),
                        age: parseInt(this.state.age + this.state.age*.2) 
                    }
                )
        )
    }

    render() {
        return (
            <div>
                <button onClick={() => this.changeLevelState()}>Change Level</button>
                <button onClick={() => this.changePowerState()}>Change Power</button>
                <button onClick={() => this.changeNameToReverseState()}>Change Name</button>
                <button onClick={() => this.changeAgeState()}>Change Age</button>
                <button onClick={() => this.allState()}>Change All</button>
                level  is {this.state.level} and power is {this.state.power}
                <Component1 name={this.state.name} age={this.state.age}/>
            </div>
        );
    }
}



export default Container1;
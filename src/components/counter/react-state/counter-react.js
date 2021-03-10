import React from 'react'
import Up from "./up-react";
import Down from "./down-react";
import Display from "./display-react";

export default class Counter extends React.Component {

    state = {
        count: 321,
    }

    down = () => this.setState((prevState) => {
        return {
            count: prevState.count - 1
        }})

    up = () => {
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }
        })
    }


    render() {
        return(
            <div>
                <Display count = {this.state.count}/>
                <Up up = {this.up}/>
                <Down down = {this.down}/>
            </div>
        )
    }
}
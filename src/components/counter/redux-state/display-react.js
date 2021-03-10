import React from 'react'
import {connect} from "react-redux";

const CounterDisplay = ({myCount}) => <h1>Counter: {myCount}</h1>

const stpm = (state) => {
    return {
        myCount: state.count
    }
}

export default connect(stpm)(CounterDisplay)
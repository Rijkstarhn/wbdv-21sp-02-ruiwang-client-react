import React from 'react'
import CounterDisplay from "./display-react";
import CounterUp from "./up-react";
import CounterDown from "./down-react";
import {createStore} from "redux";
import {Provider} from "react-redux";

const initialState = {
    count: 250
}

const reducer = (prevState = initialState, action) => {
    switch (action.type) {
        case 'UP':
            return {
                count: prevState.count + 1
            }
        case'DOWN':
            return {
                count: prevState.count - 1
            }
        default:
            return prevState
    }
}

const store = createStore(reducer)

const CounterRedux = () =>
    <Provider store={store}>
        <div>
            <CounterDisplay />
            <CounterUp />
            <CounterDown />
        </div>
    </Provider>


export default CounterRedux
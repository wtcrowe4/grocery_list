import Grocery from "./Grocery";
import React, { Component } from 'react';
import { Consumer } from '..context/'

export default class Groceries extends Component {
    render() {
        return (
            <Consumer>
                {value => {
                    const { Groceries } = value;
                    return Groceries.map(t => <Grocery Grocery={t}> </Grocery>)
                }}
            </Consumer>
        )
    }
}

//imported Consumer which pulls the value of the whole state and making map of the grocery
//for each grocery, it returns one grocery
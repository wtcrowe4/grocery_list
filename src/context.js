import React, { Component } from 'react'

//created a context and then created a class called Provider 
// which returns context.provder which has value
//wanted to wrap this around the whole application

const Context = React.createContext()
export class Provider extends Component {
    state={
        groceries:[
            {id:1,
            title:"Grocery",
            complete: false}
        ]
    }
    render () {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer
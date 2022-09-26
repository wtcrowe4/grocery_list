import React, { Component } from 'react'

export default class Grocery extends Component {
    render () {
        const {title} = this.props.grocery
        return (
           <h3 className="text-dark text-center p-1 bg-light border-bottom">
            <i className="far fa-times-circle fa-sm float-left m-1 text-danger"></i>{Grocery}
            <input type="checkbox" className="m-2 float-right"/>
           </h3>
    )}
}
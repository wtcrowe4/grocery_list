import React, { Component } from 'react'

export default class AddGrocery extends Component {
    render () {
        return (
            <form>
                <input type="text" className="form-control rounded-0" placeholder='Write your grocery here...'/>
                <button className="form-control rounded-0 btn-secondary" type="submit">Add Grocery</button>
            </form>
        )
    }
}
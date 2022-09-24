//create header

import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import '../App.css';

const Header = () => {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Grocery List</h1>
                <Navbar>
                    <Nav>
                        <Nav.Link className="nav-link" href="/">Home</Nav.Link>
                        <Nav.Link className="nav-link" href="/register">Register</Nav.Link>
                        <Nav.Link className="nav-link" href="/login">Login</Nav.Link>
                        <Nav.Link className="nav-link" href="/dashboard">Dashboard</Nav.Link>
                    </Nav>
                </Navbar>
            </header>
        </div>
    )
}

export default Header

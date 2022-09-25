import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import '../App.css';
import { FaHome, FaSignInAlt, FaUserPlus, FaList } from 'react-icons/fa';

const Header = () => {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Grocery List</h1>
                <Navbar>
                    <Nav>
                        <Nav.Link className="nav-link" href="/">
                            <FaHome />Home
                        </Nav.Link>
                        <Nav.Link className="nav-link" href="/register">
                            <FaUserPlus />Register
                        </Nav.Link>
                        <Nav.Link className="nav-link" href="/login">
                            <FaSignInAlt />Login 
                        </Nav.Link>
                        <Nav.Link className="nav-link" href="/dashboard">
                            <FaList />Dashboard
                        </Nav.Link>
                    </Nav>
                </Navbar>
            </header>
        </div>
    )
}

export default Header

import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import '../css/App.css';
import { FaHome, FaSignInAlt, FaUserPlus, FaList, FaSignOutAlt } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { logout, reset } from '../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user, message } = useSelector(state => state.auth);

    return (
        <div className="App">
            <header className="App-header">
                <h1>Grocery List</h1>
                <Navbar>
                    <Nav>
                        {user ? (
                            <>
                                <Nav.Link href="/dashboard"><FaHome />My Home</Nav.Link>
                                <Nav.Link href="/lists"><FaList />My Lists</Nav.Link>
                                <Nav.Link href="/logout" onClick={() => {
                                    dispatch(logout());
                                    toast.success(message);
                                    navigate('/');
                                    dispatch(reset());
                                }}><FaSignOutAlt />Logout</Nav.Link>
                            </>
                        ) : (
                            <>
                        <Nav.Link className="nav-link" href="/">
                            <FaHome />Home
                        </Nav.Link>
                        <Nav.Link className="nav-link" href="/register">
                            <FaUserPlus />Register
                        </Nav.Link>
                        <Nav.Link className="nav-link" href="/login">
                            <FaSignInAlt />Login 
                        </Nav.Link>
                        </>
                        )}
                         {/* <Nav.Link className="nav-link" href="/dashboard">
                             <FaList />Dashboard
                         </Nav.Link> */}
                    </Nav>
                </Navbar>
            </header>
        </div>
    )
}

export default Header

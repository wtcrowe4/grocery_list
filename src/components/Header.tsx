import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import '../css/App.css';
import { FaHome, FaSignInAlt, FaUserPlus, FaList, FaSignOutAlt } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { logout, reset } from '../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


interface State {
    auth: {
        user: any;
    }
}


const Header = () => {
    const dispatch: any = useDispatch();
    const navigate = useNavigate();
    
    const { user } = useSelector((state: State) => state.auth);

    return (
        <div className="App">
            <header className="App-header">
                <h1 className="title">Grocery List</h1>
                <Navbar>
                    <Nav>
                        {user ? (
                            <>
                                <Nav.Link href="/dashboard"><FaHome />My Home</Nav.Link>
                                <Nav.Link href="/lists"><FaList />My Lists</Nav.Link>
                                <Nav.Link  onClick={() => {
                                    dispatch(logout(user));
                                    navigate('/');
                                    
                                    //state message is being read from login
                                    //toast.success(message);
                                    toast.success('Logged out successfully');
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
                <p style={{fontSize: ".6em"}} >Make sure to sign out to protect your information.</p>
            </header>
        </div>
    )
}

export default Header

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
    // @ts-expect-error TS(2571): Object is of type 'unknown'.
    const { user } = useSelector(state => state.auth);

    return (
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div className="App">
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <header className="App-header">
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <h1 className="title">Grocery List</h1>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Navbar>
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <Nav>
                        {user ? (
                            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                            <>
                                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                                <Nav.Link href="/dashboard"><FaHome />My Home</Nav.Link>
                                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                                <Nav.Link href="/lists"><FaList />My Lists</Nav.Link>
                                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                                <Nav.Link  onClick={() => {
                                    // @ts-expect-error TS(2345): Argument of type 'AsyncThunkAction<void, void, {}>... Remove this comment to see the full error message
                                    dispatch(logout());
                                    navigate('/');
                                    
                                    //state message is being read from login
                                    //toast.success(message);
                                    toast.success('Logged out successfully');
                                    dispatch(reset());
                                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                                }}><FaSignOutAlt />Logout</Nav.Link>
                            </>
                        ) : (
                            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                            <>
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <Nav.Link className="nav-link" href="/">
                            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                            <FaHome />Home
                        </Nav.Link>
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <Nav.Link className="nav-link" href="/register">
                            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                            <FaUserPlus />Register
                        </Nav.Link>
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <Nav.Link className="nav-link" href="/login">
                            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                            <FaSignInAlt />Login 
                        </Nav.Link>
                        </>
                        )}
                         {/* <Nav.Link className="nav-link" href="/dashboard">
                             <FaList />Dashboard
                         </Nav.Link> */}
                    </Nav>
                </Navbar>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <p style={{fontSize: ".6em"}} >Make sure to sign out to protect your information.</p>
            </header>
        </div>
    )
}

export default Header

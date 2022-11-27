import { useState, useEffect } from 'react';
import { FaSignInAlt } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { login, reset } from '../features/auth/authSlice';
// @ts-expect-error TS(6142): Module '../components/Spinner' was resolved to 'C:... Remove this comment to see the full error message
import Spinner from '../components/Spinner';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // @ts-expect-error TS(2571): Object is of type 'unknown'.
    const { user, status, error, message } = useSelector(state => state.auth);

    useEffect(() => {
        document.title = 'Login';
        if (error !== null) {
            toast.error(message);
            console.log(status)
            dispatch(reset());
        }
        if (user) {
            toast.success(message);
            navigate('/dashboard');

        }
        
        }, [user, error, status, message, navigate, dispatch]);
    
    
    const onChange = (e: any) => setFormData({ ...formData, [e.target.id]: e.target.value });
    const onSubmit = (e: any) => {
        e.preventDefault()
        console.log(formData);
        // @ts-expect-error TS(2345): Argument of type 'AsyncThunkAction<any, void, {}>'... Remove this comment to see the full error message
        dispatch(login(formData));
    };

    if(status === 'loading') {
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        return <Spinner />
    }

    
    
    return (
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div className="login-container">
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <h1>Login</h1>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <FaSignInAlt />
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <h3>Please sign in to your account</h3>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <form className="register-form">
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <div className="form-group">
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <label htmlFor="email">Email</label>
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <input type="email"
                        className="form-control"
                        id="email"
                        placeholder="Enter email"
                        onChange={e => onChange(e)} />
                </div>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <div className="form-group">
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <label htmlFor="password">Password</label>
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <input type="password"
                        className="form-control"
                        id="password"
                        placeholder="Enter password"
                        onChange={e => onChange(e)} />
                </div>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <button type="submit" className="btn btn-primary" onClick={e => onSubmit(e)}>Submit</button>
            </form>
        </div>
    );
}

export default Login;
import { useState, useEffect } from 'react';
import { FaUser } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { register, reset } from '../features/auth/authSlice';
// @ts-expect-error TS(6142): Module '../components/Spinner' was resolved to 'C:... Remove this comment to see the full error message
import Spinner from '../components/Spinner';

const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        password2: ''
    });
    const { password, password2 } = formData
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // @ts-expect-error TS(2571): Object is of type 'unknown'.
    const{ user, status, error, message } = useSelector(state => state.auth);

    useEffect(() => {
        document.title = 'Register';
        if(error !== null) {
            toast.error(message);
            console.log(status)
            dispatch(reset());
            navigate('/register', { replace: true });
        }
        if (user) {
            toast.success(message);
            navigate('/dashboard');
        }
        //dispatch(reset());


    }, [user, error, status, message, navigate, dispatch]);

    const onChange = (e: any) => setFormData({ ...formData, [e.target.id]: e.target.value });
    
    const onSubmit = (e: any) => {
        e.preventDefault()
        if (password !== password2) {
            toast.error('Passwords do not match');
            console.log('Passwords do not match');
            dispatch(reset());
        } else {
            const newUser = formData;
            console.log(newUser);
            // @ts-expect-error TS(2345): Argument of type 'AsyncThunkAction<any, void, {}>'... Remove this comment to see the full error message
            dispatch(register(newUser));
        }
    };

    if(status === 'loading') {
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        return <Spinner />
    }

    
    return (
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div className="register-container">
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <h1>Register</h1>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <FaUser />
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <h3>Please create an account</h3>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <form className="register-form" onSubmit={onSubmit}>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <div className="form-group">
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <label htmlFor="username">Username</label>
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <input type="text" 
                        className="form-control" 
                        id="username" 
                        placeholder="Enter username"
                        onChange={e => onChange(e)}
                    />
                </div>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <div className="form-group">
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <label htmlFor="email">Email</label>
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <input type="email" 
                        className="form-control" 
                        id="email" 
                        placeholder="Enter email"
                        onChange={e => onChange(e)} 
                    />
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
                        onChange={e => onChange(e)} 
                    />
                </div>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <div className="form-group">    
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <label htmlFor="password2">Confirm Password</label>
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <input type="password" 
                        className="form-control" 
                        id="password2" 
                        placeholder="Confirm password"
                        onChange={e => onChange(e)} 
                    />
                </div>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <div className="form-group">
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <button type="submit" className="btn-block">Submit</button>
                </div>
            </form>    
                
        </div>
    )
}

export default Register


import { useState, useEffect } from 'react';
import { FaSignInAlt } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { login, reset } from '../features/auth/authSlice';
import Spinner from '../components/Spinner';
import React from 'react';

interface State {
    lists: any;
    auth: any;
}

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const navigate = useNavigate();
    const dispatch: any = useDispatch();
    const { user, status, error, message } = useSelector((state: State) => state.auth);

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
        dispatch(login(formData));
    };

    if(status === 'loading') {
        return <Spinner />
    }

    
    
    return (
        <div className="login-container">
            <h1>Login</h1>
            <FaSignInAlt />
            <h3>Please sign in to your account</h3>
            <form className="register-form">
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email"
                        className="form-control"
                        id="email"
                        placeholder="Enter email"
                        onChange={e => onChange(e)} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password"
                        className="form-control"
                        id="password"
                        placeholder="Enter password"
                        onChange={e => onChange(e)} />
                </div>
                <button type="submit" className="btn btn-primary" onClick={e => onSubmit(e)}>Submit</button>
            </form>
        </div>
    );
}

export default Login;
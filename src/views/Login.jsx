import { useState, useEffect } from 'react';
import { FaSignInAlt } from 'react-icons/fa';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const { email, password } = formData;
    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
    const onSubmit = e => {
        e.preventDefault()
        console.log(formData);
    };
    
    return (
        <div className="login-container">
            <h1>Login</h1>
            <FaSignInAlt />
            <h3>Please sign in to your account</h3>
            <form className="login-form">
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email"
                        className="form-control"
                        id="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={e => onChange(e)} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password"
                        className="form-control"
                        id="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={e => onChange(e)} />
                </div>
                <button type="submit" className="btn btn-primary" onClick={e => onSubmit(e)}>Submit</button>
            </form>
        </div>
    );
}

export default Login;
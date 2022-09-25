import { useState, useEffect } from 'react';
import { FaUser } from 'react-icons/fa';


const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        password2: ''
    });
    const { username, email, password, password2 } = formData;
    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
    const onSubmit = e => {
        e.preventDefault()
        if (password !== password2) {
            console.log('Passwords do not match');
        } else {
            console.log(formData);
        }
    };
    return (
        <div className="register-container">
            <h1>Register</h1>
            <FaUser />
            <h3>Please create an account</h3>
            <form className="register-form">
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" 
                        className="form-control" 
                        id="username" 
                        placeholder="Enter username"
                        value={username}
                        onChange={e => onChange(e)}
                    />
                </div>
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
                <div className="form-group">    
                    <label htmlFor="password2">Confirm Password</label>
                    <input type="password" 
                        className="form-control" 
                        id="password2" 
                        placeholder="Confirm password"
                        value={password2}
                        onChange={e => onChange(e)} />
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-block" onSubmit={e => onSubmit(e)}>Submit</button>
                </div>
            </form>    
                
        </div>
    )
}

export default Register


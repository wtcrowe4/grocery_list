import axios from 'axios';
require('dotenv').config();
const port = process.env.PORT || 80;
//const api_url = 'http://localhost:8080/api/user';

//Register User
const register = async (user) => {
    const response = await axios.post(`${port}/register`, user);
    console.log(response)
    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data));
        //using session storage creates issues with thunk
        //sessionStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
};

//Login User
const login = async (user) => {
    const response = await axios.post(`${port}/login`, user);
    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data));
        //sessionStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
};

//Logout User
const logout = () => {
    localStorage.removeItem('user');
    //sessionStorage.removeItem('user');
};

const authService = {
    register,
    login,
    logout
};

export default authService;




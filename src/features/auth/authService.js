import axios from 'axios';

//Heroku Deployment
const config = {
    development: {
        baseURL: 'http://localhost:80/api',
        timeout: 1000,
    },
    production: {
        baseURL: 'https://grocery-list-with-recipes.herokuapp.com',
        timeout: 1000,
    }
    
};

const api_url = process.env.NODE_ENV === 'production' ? config.production.baseURL : config.development.baseURL;

//const api_url = 'http://:::80/api/user';

//Register User
const register = async (user) => {
    //only return json data
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const response = await axios.post(`${api_url}/api/user/register`, user, config);
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
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    const response = await axios.post(`${api_url}/api/user/login`, user, config);
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




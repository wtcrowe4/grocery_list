import axios from 'axios';

const api_url = 'http://localhost:8080/api/user';

interface User {
    id: number,
    username: string,
    email: string,
    password: string,
    token: string
}



//Register User
const register = async (user: User) => {
    const response = await axios.post(`${api_url}/register`, user);
    console.log(response)
    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data));
        //using session storage creates issues with thunk
        //sessionStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
};

//Login User
const login = async (user: User) => {
    const response = await axios.post(`${api_url}/login`, user);
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




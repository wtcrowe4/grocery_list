import axios from 'axios';

const api_url = 'http://localhost:8080/api/list';

//Create a new list
const create = async (list, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.post(`${api_url}/create`, list, config);
    return response.data;
};

//Get all lists






const listService = {
    create,
    // all,
    // get,
    // update,
    // deleteList
};

export default listService;













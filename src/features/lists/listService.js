import axios from 'axios';

const api_url = 'http://localhost:8080/api/list';

//Create a new list
const create = async (list) => {
    const response = await axios.post(`${api_url}/create`, list);
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













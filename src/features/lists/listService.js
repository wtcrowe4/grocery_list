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
const all = async (token, userId) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        },
    }
    const response = await axios.get(`${api_url}/all`, config);
    response.data.map(list => {
        // if (list.userId !== userId) {
        //     return null;
        // } else {
        //     console.log(list);
        //     return list;
        // }
        console.log(list);
        return list;
    })
    return response.data;
};
    // });
    
    


    

//Get a list
const get = async (listId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.get(`${api_url}/${listId}`, config);
    return response.data;
};


//Delete a list
const deleteList = async (listId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        },
        params: {
            id: listId
        }
    }
    console.log(listId)
    const response = await axios.delete(`${api_url}/${listId}`, config);
    return response.data;
};

//Add an item to a list
const addItem = async (item, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.put(`${api_url}/addItem`, item, config);
    return response.data;
};

//Update
const update = async (list, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.put(`${api_url}/${list}`, list, config);
    return response.data;
};




const listService = {
    create,
    all,
    deleteList,
    get,
    addItem,
    update,
    
};

export default listService;













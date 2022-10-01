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
        // params: {
        //     userId: userId
        // }
    }
    const response = await axios.get(`${api_url}/all`, config);
    // response.data.forEach(list => {
    //     if (list.userId === userId) {
    //         console.log(list);
    //         return list;
    //     } else {
    //         return null;
    //     }
    
    
   return response.data 
    // });
};
    
//     return myLists;
// };






const listService = {
    create,
    all,
    // get,
    // update,
    // deleteList
};

export default listService;













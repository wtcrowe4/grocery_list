import { useState, useEffect } from 'react';
import { useDispatch, useSelector, } from 'react-redux';
import { useNavigate } from 'react-router-dom';
//import listSlice from '../features/lists/listSlice';
import { create } from '../features/lists/listSlice';


const MyLists = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // const { user } = sessionStorage.getItem('user') ? JSON.parse(sessionStorage.getItem('user')) : null;
     const user = useSelector(state => state.auth ? state.auth : null);
    //const lists = useSelector(state => state.lists);
    
    
    const [listName, setListName] = useState('');
    
    useEffect(() => {
        document.title = 'My Lists';
        
        if(!user) {
            navigate('/login' , { replace: true });
        }
    }, [user, navigate]);

    //Fix error on welcome message when user is null
    if (!user) {
        return null;
    }

    // onChange={(e) => setListName(e.target.value)}

    const onSubmit = (e) => {
        e.preventDefault();
        setListName('List 4')
        console.log(user.user.user._id)
        const newList = {
            title: listName,
            userId: user.user.user._id
        }
        console.log(listName)
        console.log(newList);
        //listSlice.addList(newList);
        dispatch(create(newList));   
    }


    //code to render all lists for user in database


    return(
        <div className="form">
            <h3>My Lists</h3>
            <form onSubmit={e => onSubmit(e)}>
                <div className="form-group">
                    <label htmlFor="listName">Create a New List</label>
                    <input type="text" name="listName" id="listName" />
                </div>
                <button type="submit" className="btn btn-primary">Create List</button>
            </form>


        </div>
    )
}

export default MyLists;

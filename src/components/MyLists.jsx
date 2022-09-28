import { useState, useEffect } from 'react';
import { useDispatch, useSelector, } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const MyLists = () => {
    const navigate = useNavigate();
    // const { user } = sessionStorage.getItem('user') ? JSON.parse(sessionStorage.getItem('user')) : null;
     const user = useSelector(state => state.auth ? state.auth : null);
    
    
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

    const onSubmit = (e) => {
        e.preventDefault();
    }


    //code to render all lists for user in database


    return(
        <div className="form">
            <h3>My Lists</h3>
            <form>
                <div className="form-group">
                    <label htmlFor="listName">Create a New List</label>
                    <input type="text" name="listName" id="listName" />
                </div>
                <button type="submit" className="btn btn-primary" onSubmit={e => onSubmit(e)}>Create List</button>
            </form>


        </div>
    )
}

export default MyLists;

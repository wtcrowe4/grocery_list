import React from 'react'
import { useState, useEffect } from 'react';
import { useDispatch, useSelector, } from 'react-redux';
import { getOneList } from '../features/lists/listSlice';


const SavedList = () => {
    //const [myList, setMyList] = useState({});
    const dispatch = useDispatch();
    const listId = window.location.pathname.split('/')[2];
    console.log(listId)
    
    
    const onChange = (e) => {
        e.preventDefault();
    }

    const onSubmit = (e) => {
        e.preventDefault();
    }

    useEffect(() => {
        dispatch(getOneList(listId));
        
    }, [dispatch, listId])

    
  
    return (
    <div className="saved-list">
             <h3>List Title</h3>
             <form onSubmit={onSubmit}>
                 <input type="text"
                     placeholder="List Item"
                     name="listItem"
                     id="listItem"
                     onChange={onChange}
                     required
                 />
                 <input type="submit" className="btn btn-primary" value="Add Item" />
             </form>
         </div>
    
  )
}


export default SavedList;



import React from 'react'
import { useState, useEffect } from 'react';
import { useDispatch, useSelector, } from 'react-redux';
import { getOneList, addItem, updateList } from '../features/lists/listSlice';


const SavedList = () => {
    
    const dispatch = useDispatch();
    const listId = window.location.pathname.split('/')[2];
    
    const { lists } = useSelector(state => state.lists ? state.lists : null);
    
    const [listItems, setListItems] = useState(lists.items ? lists.items : []);
    const [item, setItem] = useState('');

   

    const onChange = (e) => {
        e.preventDefault();
        setItem(e.target.value);

    //    console.log(listItems);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        //add list item to list
        dispatch(updateList(listId));
        //push item to redux state and database
        //setListItems([...listItems, item]);        
        
        //clear input field


        
        
        
        setItem('');    
    }

    useEffect(() => {
        dispatch(getOneList(listId));
        
    }, [dispatch, listId])

     
    
    const renderList = () => {
  
              if (lists.items && lists.items.length > 0) {
            return lists.items.map(item => {
                return (
                    <li key={item}>{item}</li>
                )
            })
            
        }
     }

                

  
    return (
    <div className="saved-list">
             <h3>{lists.title}</h3>
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
                
                {/* Save button to run updateList function */}
                <button className="btn btn-primary">Save</button>
                
                {renderList()}
         </div>
    
  )
}


export default SavedList;



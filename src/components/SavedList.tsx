import React from 'react'
import { useState, useEffect } from 'react';
import { useDispatch, useSelector, } from 'react-redux';
import { getOneList, addItem, updateList } from '../features/lists/listSlice';


const SavedList = () => {
    
    const dispatch = useDispatch();
    const listId = window.location.pathname.split('/')[2];
    
    // @ts-expect-error TS(2571): Object is of type 'unknown'.
    const { lists } = useSelector(state => state.lists ? state.lists : null);
    
    const [listItems, setListItems] = useState(lists.items ? lists.items : []);
    const [item, setItem] = useState('');

   

    const onChange = (e: any) => {
        e.preventDefault();
        setItem(e.target.value);

    //    console.log(listItems);
    }

    const onSubmit = (e: any) => {
        e.preventDefault();
        //add list item to list
        // @ts-expect-error TS(2345): Argument of type 'AsyncThunkAction<any, void, {}>'... Remove this comment to see the full error message
        dispatch(updateList(listId));
        //push item to redux state and database
        //setListItems([...listItems, item]);        
        
        //clear input field


        
        
        
        setItem('');    
    }

    useEffect(() => {
        // @ts-expect-error TS(2345): Argument of type 'AsyncThunkAction<any, void, {}>'... Remove this comment to see the full error message
        dispatch(getOneList(listId));
        
    }, [dispatch, listId])

     
    
    const renderList = () => {
  
              if (lists.items && lists.items.length > 0) {
            return lists.items.map((item: any) => {
                return (
                    <ul className="saved-list">
                        <li key={item}>{item}
                            <button className="btn-sm" onClick={e=>console.log(e)}>x</button>
                        </li>
                    </ul>
                )
            });
            
        }
     }

                

  
    return (
    <div className="saved-list">
             <h1>{lists.title}</h1>
             
             {renderList()}
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
                
                
         </div>
    
  )
}


export default SavedList;



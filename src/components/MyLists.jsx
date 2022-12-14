import { useState, useEffect } from 'react';
import { useDispatch, useSelector, } from 'react-redux';
import { useNavigate } from 'react-router-dom';
//import listSlice from '../features/lists/listSlice';
import { createList, getMyLists, deleteList } from '../features/lists/listSlice';


const MyLists = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // const { user } = sessionStorage.getItem('user') ? JSON.parse(sessionStorage.getItem('user')) : null;
    const user = useSelector(state => state.auth ? state.auth : null);
    const lists = useSelector(state => state.lists);
    //const [myLists, setMyLists] = useState([])
    
    const [listName, setListName] = useState('');
    
    useEffect(() => {
        document.title = 'My Lists';
        
        if(!user) {
            navigate('/login' , { replace: true });
        }
        
        dispatch(getMyLists(user._id));
        
       

         
        
 
    
    
    
    
    
    }, [user, navigate, dispatch]);

    
    
    
    
    

    //Fix error on welcome message when user is null
    if (!user) {
        return null;
    }

    const onChange= (e) => setListName(e.target.value)

    const onSubmit = (e) => {
        e.preventDefault();
        const newList = {
            title: listName,
            userId: user.user.user._id
        }
        console.log(listName)
        console.log(newList);
        //listSlice.addList(newList);
        dispatch(createList(newList));
        //clear input field

    }


    const onDeleteClick = (e,id) => {
        e.preventDefault();
        dispatch(deleteList(id));
        //update list
        dispatch(getMyLists(user.user._id));


    }
   
    




    const renderLists = () => {
        
        if (lists.lists.length === 0) {
            return <p>You have no lists</p>
        } else {
            return (
                <ul>
                    {lists.lists.map(list => {
                        return (
                        <div key={list._id}>
                            
                            <a href={`/dashboard/${list._id}`} >
                                <li key={list._id}>{list.title}</li>
                            </a>
                            <button className="btn btn-sm" 
                                onClick={e => onDeleteClick(e, list._id)}>Delete
                            </button>
                           
                        </div>
                        )
                      })}
                    
                </ul>
            )
        }
    }
       
        
        
      
        
    
        
        
    //     return (
    //        <div>
    //            <ul>
                   
                          
    //                            <a key={list._id} href={'/dashboard'}>
    //                                <li key={myLists._id}>{myLists.title}</li> 
    //                            </a>
                         
                
                   
    //            </ul>
    //        </div>
    //    )

    


    return(
        <div className="form">
            <h2>My Lists</h2>
            <h3>Saved lists on your account.</h3>
            <form onSubmit={e => onSubmit(e)}>
                <div className="form-group">
                    <label htmlFor="listName">Create a New List</label>
                    <input type="text" name="listName" id="listName" onChange={onChange} defaultValue={listName}/>
                </div>
                <button type="submit" className="btn btn-primary">Create List</button>
            </form>
            
            {renderLists()}

            </div>

    )
}

export default MyLists;

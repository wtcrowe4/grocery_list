import { useState, useEffect } from 'react';
import { useDispatch, useSelector, } from 'react-redux';
import { useNavigate } from 'react-router-dom';
//import listSlice from '../features/lists/listSlice';
import { createList, getMyLists } from '../features/lists/listSlice';


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
    
        
    
        dispatch(getMyLists(user.user._id));
        // const getLists = async () => {
        //     const allLists = await dispatch(getMyLists());
        //     console.log(user.user.user._id);
        //     console.log(allLists.payload);
        //     allLists.payload.map(list => {
        //         if (list.userId === user.user.user._id) {
        //             console.log(list.title);
        //             //setMyLists([...myLists, list]);
        //             return list;
        //         } else {
        //             return null;
        //         }
        // })
    // }}  
    
    //setMyLists([...myLists, getLists()]);

         
        
 
    
    
    
    
    
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
    }



   
    




    const renderLists = () => {
        
        if (lists.lists.length === 0) {
            return <p>You have no lists</p>
        } else {
            return (
                <ul>
                    {lists.lists.map(list => (
                        <a href={'/dashboard'} key={list._id}>
                            <li key={list._id}>{list.title}</li>
                        </a>
                    ))}
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
            <h3>My Lists</h3>
            <form onSubmit={e => onSubmit(e)}>
                <div className="form-group">
                    <label htmlFor="listName">Create a New List</label>
                    <input type="text" name="listName" id="listName" onChange={onChange}/>
                </div>
                <button type="submit" className="btn btn-primary">Create List</button>
            </form>
            {/* <p>{[myLists]}</p> */}
            {renderLists()}

            </div>

    )
}

export default MyLists;

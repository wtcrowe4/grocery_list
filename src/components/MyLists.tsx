import { useState, useEffect } from 'react';
import { useDispatch, useSelector, } from 'react-redux';
import { useNavigate } from 'react-router-dom';
//import listSlice from '../features/lists/listSlice';
import { createList, getMyLists, deleteList } from '../features/lists/listSlice';


const MyLists = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // const { user } = sessionStorage.getItem('user') ? JSON.parse(sessionStorage.getItem('user')) : null;
    // @ts-expect-error TS(2571): Object is of type 'unknown'.
    const user = useSelector(state => state.auth ? state.auth : null);
    // @ts-expect-error TS(2571): Object is of type 'unknown'.
    const lists = useSelector(state => state.lists);
    //const [myLists, setMyLists] = useState([])
    
    const [listName, setListName] = useState('');
    
    useEffect(() => {
        document.title = 'My Lists';
        
        if(!user) {
            navigate('/login' , { replace: true });
        }
        
        // @ts-expect-error TS(2345): Argument of type 'AsyncThunkAction<any, void, {}>'... Remove this comment to see the full error message
        dispatch(getMyLists(user._id));
        
       

         
        
 
    
    
    
    
    
    }, [user, navigate, dispatch]);

    
    
    
    
    

    //Fix error on welcome message when user is null
    if (!user) {
        return null;
    }

    const onChange= (e: any) => setListName(e.target.value)

    const onSubmit = (e: any) => {
        e.preventDefault();
        const newList = {
            title: listName,
            userId: user.user.user._id
        }
        console.log(listName)
        console.log(newList);
        //listSlice.addList(newList);
        // @ts-expect-error TS(2345): Argument of type 'AsyncThunkAction<any, void, {}>'... Remove this comment to see the full error message
        dispatch(createList(newList));
        //clear input field

    }


    const onDeleteClick = (e: any,id: any) => {
        e.preventDefault();
        // @ts-expect-error TS(2345): Argument of type 'AsyncThunkAction<any, void, {}>'... Remove this comment to see the full error message
        dispatch(deleteList(id));
        //update list
        // @ts-expect-error TS(2345): Argument of type 'AsyncThunkAction<any, void, {}>'... Remove this comment to see the full error message
        dispatch(getMyLists(user.user._id));


    }
   
    




    const renderLists = () => {
        
        if (lists.lists.length === 0) {
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            return <p>You have no lists</p>
        } else {
            return (
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <ul>
                    {lists.lists.map((list: any) => {
                        return (
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <div key={list._id}>
                            
                            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                            <a href={`/dashboard/${list._id}`} >
                                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                                <li key={list._id}>{list.title}</li>
                            </a>
                            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                            <button className="btn btn-sm" 
                                onClick={e => onDeleteClick(e, list._id)}>Delete
                            </button>
                           
                        </div>
                        )
                      })}
                    
                </ul>
            );
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
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div className="form">
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <h2>My Lists</h2>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <h3>Saved lists on your account.</h3>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <form onSubmit={e => onSubmit(e)}>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <div className="form-group">
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <label htmlFor="listName">Create a New List</label>
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <input type="text" name="listName" id="listName" onChange={onChange} defaultValue={listName}/>
                </div>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <button type="submit" className="btn btn-primary">Create List</button>
            </form>
            
            {renderLists()}

            </div>

    )
}

export default MyLists;

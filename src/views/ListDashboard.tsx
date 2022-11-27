import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
//import ListForm from '../components/ListForm';
// @ts-expect-error TS(6142): Module '../components/Recipes' was resolved to 'C:... Remove this comment to see the full error message
import Recipes from '../components/Recipes';
// @ts-expect-error TS(6142): Module '../components/SavedList' was resolved to '... Remove this comment to see the full error message
import SavedList from '../components/SavedList';
//import { getOneList } from '../features/lists/listSlice';


const ListDashboard = () => {
    const navigate = useNavigate();
    //const dispatch = useDispatch();
    // @ts-expect-error TS(2571): Object is of type 'unknown'.
    const { user } = useSelector(state => state.auth ? state.auth : null);
    //const { lists } = useSelector(state => state.lists ? state.lists : null);
    
    useEffect(() => {
        document.title = 'Dashboard';
        
        if(!user) {
            navigate('/login' , { replace: true });
        }

        //dispatch(getOneList(lists.list._id));


    }, [user, navigate]);

    //Fix error on welcome message when user is null
    if (!user) {
        return null;
    }

    //Clear local storage when page closes
    // window.onbeforeunload = () => {
    //     localStorage.clear();
    // }
    

    return (
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div className="dashboard-container">
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <h1>Dashboard</h1>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <h2>Welcome {user.username ? user.username : user.user.username}!</h2>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <h3>Edit a saved list here.</h3>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div className="dashboard-content">
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <div className="dashboard-list">
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <SavedList />
            </div>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <div className="dashboard-recipes">
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Recipes />
            </div>
        </div>


        
        </div>
    );
}

export default ListDashboard;
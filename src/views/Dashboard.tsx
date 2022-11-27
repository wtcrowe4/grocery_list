import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
//import ListForm from '../components/ListForm';
import Recipes from '../components/Recipes';
import List from '../components/List';
import { getOneList } from '../features/lists/listSlice';



const Dashboard = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user } = useSelector(state => state.auth ? state.auth : null);
    const { lists } = useSelector(state => state.lists ? state.lists : null);
    
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
        <div className="dashboard-container">
        <h1>Dashboard</h1>
        <h2>Welcome {user.username ? user.username : user.user.username}!</h2>
        <h3>Make a quick list and e-mail it to yourself.</h3>
        <div className="dashboard-content">
            <div className="dashboard-list">
                <List />
            </div>
            <div className="dashboard-recipes">
                <Recipes />
            </div>
        </div>


        
        </div>
    );
}

export default Dashboard;

import { useSelector } from 'react-redux';

const Dashboard = () => {
    const user = useSelector(state => state.auth.user);
    
    return (
        <div className="dashboard-container">
        <h1>Dashboard</h1>
        <h2>Welcome {user.username ? user.username : user.user.username}!</h2>



        
        </div>
    );
}

export default Dashboard;

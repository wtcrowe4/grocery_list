import './css/App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './views/Home';
import Login from './views/Login';
import Register from './views/Register';
import Dashboard from './views/Dashboard';
import Header from './components/Header';
// import MyLists from './components/MyLists';
// import ListDashboard from './views/ListDashboard';
//import Lists from './components/Lists';


function App() {

  return (
    <>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            {/* <Route path="/lists" element={<MyLists />} />
            <Route path="/dashboard/:id" element={<ListDashboard />} /> */}
          </Routes>  
        </div>
      </Router>
      <ToastContainer />
      
    </>

  );
}

export default App;

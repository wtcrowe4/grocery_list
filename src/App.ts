import './css/App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// @ts-expect-error TS(6142): Module './views/Home' was resolved to 'C:/Users/Th... Remove this comment to see the full error message
import Home from './views/Home';
// @ts-expect-error TS(6142): Module './views/Login' was resolved to 'C:/Users/T... Remove this comment to see the full error message
import Login from './views/Login';
// @ts-expect-error TS(6142): Module './views/Register' was resolved to 'C:/User... Remove this comment to see the full error message
import Register from './views/Register';
// @ts-expect-error TS(6142): Module './views/Dashboard' was resolved to 'C:/Use... Remove this comment to see the full error message
import Dashboard from './views/Dashboard';
// @ts-expect-error TS(6142): Module './components/Header' was resolved to 'C:/U... Remove this comment to see the full error message
import Header from './components/Header';
// @ts-expect-error TS(6142): Module './components/MyLists' was resolved to 'C:/... Remove this comment to see the full error message
import MyLists from './components/MyLists';
// @ts-expect-error TS(6142): Module './views/ListDashboard' was resolved to 'C:... Remove this comment to see the full error message
import ListDashboard from './views/ListDashboard';
//import Lists from './components/Lists';


function App() {

  return (
    <>
      // @ts-expect-error TS(2749): 'Router' refers to a value, but is being used as a... Remove this comment to see the full error message
      <Router>
        // @ts-expect-error TS(2304): Cannot find name 'div'.
        <div className="App">
          // @ts-expect-error TS(2749): 'Header' refers to a value, but is being used as a... Remove this comment to see the full error message
          <Header />
          <Routes>
            // @ts-expect-error TS(2749): 'Route' refers to a value, but is being used as a ... Remove this comment to see the full error message
            <Route path="/" element={<Home />} />
            // @ts-expect-error TS(2304): Cannot find name 'path'.
            <Route path="/login" element={<Login />} />
            // @ts-expect-error TS(2304): Cannot find name 'path'.
            <Route path="/register" element={<Register />} />
            // @ts-expect-error TS(2304): Cannot find name 'path'.
            <Route path="/dashboard" element={<Dashboard />} />
            // @ts-expect-error TS(2304): Cannot find name 'path'.
            <Route path="/lists" element={<MyLists />} />
            // @ts-expect-error TS(2304): Cannot find name 'path'.
            <Route path="/dashboard/:id" element={<ListDashboard />} />
          </Routes>  
        </div>
      </Router>
      // @ts-expect-error TS(2362): The left-hand side of an arithmetic operation must... Remove this comment to see the full error message
      <ToastContainer />
      
    </>

  );
}

export default App;

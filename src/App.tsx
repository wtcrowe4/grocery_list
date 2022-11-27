import './css/App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './views/Home';
import Login from './views/Login';
import Register from './views/Register';
import Dashboard from './views/Dashboard';
import Header from './components/Header';
import MyLists from './components/MyLists';
import ListDashboard from './views/ListDashboard';
import React from 'react';
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

import './App.css';
import Header from './components/Header';
import AddGrocery from './components/AddGrocery';
import Groceries from './components/Groceries';

function App() {
  return (
    <div className="app-container">
      <Header></Header>
      <AddGrocery></AddGrocery>
      <Groceries></Groceries>
    </div>
  );
}

export default App;

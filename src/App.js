import './App.css';
import Header from './components/Header';
import AddGrocery from './components/AddGrocery';
import Groceries from './components/Groceries';
import { Provider } from './context';

function App() {
  return (
    <Provider>
       <div className="app-container">
      <Header></Header>
      <AddGrocery></AddGrocery>
      <Groceries></Groceries>
    </div>
    </Provider>
  );
}

export default App;

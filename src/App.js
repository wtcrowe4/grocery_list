import './App.css';
import Header from './components/Header';
import AddGrocery from './components/AddGrocery';

function App() {
  return (
    <div className="app-container">
      <Header></Header>
      <AddGrocery></AddGrocery>
    </div>
  );
}

export default App;

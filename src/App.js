import './App.css';
import { Navbar } from './components/Navbar';
import { TransactionList } from './components/TransactionList';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <TransactionList/>
    </div>
  );
}

export default App;

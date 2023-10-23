import './App.css';
import { Navbar } from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TransactionList  from './components/TransactionList';
import AddTransaction from './components/AddTransactionForm';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<TransactionList />} />  
          <Route path="/new" element={<AddTransaction />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

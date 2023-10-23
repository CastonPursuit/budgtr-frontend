import './App.css';
import { Navbar } from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import List from './pages/List';
import NewTransaction from './pages/NewTransaction';
import TransactionInfo from './pages/TransactionInfo';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<List/>} />  
          <Route path="/new" element={<NewTransaction />} />
          <Route path="/info" element={<TransactionInfo/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

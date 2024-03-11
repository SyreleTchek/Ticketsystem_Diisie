import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Board from './components/Board';
import Ticket from './components/Ticket';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <div>
      <Header />
        <Routes>
          <Route path="/header" element={<Header />} />
          <Route path="/" element={<Board />} />
          <Route path="/ticket/:id" element={<Ticket />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Board from './components/Board';
import Ticket from './components/Ticket';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Board />} />
        <Route path="/ticket/:id" element={<Ticket />} />
      </Routes>
    </Router>
  );
}

export default App;

import './App.css'
import Header from './components/Header';
import Dashboard from './pages/Dashboard'
import Visit from './pages/Visit'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/visit" element={<Visit />} />
      </Routes>
    </Router>
  );
}

export default App

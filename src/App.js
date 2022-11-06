import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import CounterPage from './pages/CounterPage';
import CounterUseReducer from './components/CounterUseReducer';
import CounterUseState from './components/CounterUseState';
import HomePage from './pages/HomePage';
import Navigation from './components/Navigation';


function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="counter" element={<CounterPage />}>
          <Route path="custom-hook" element={<CounterUseState />} />
          <Route path="reducer" element={<CounterUseReducer />} />
        </Route>
      </Routes>
    </Router>
  );
}


export default App;

/* eslint-disable react/jsx-filename-extension */
import './App.css';
import Home from 'components/pages/Home/Home';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;

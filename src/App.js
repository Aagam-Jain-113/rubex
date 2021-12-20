import React from 'react'
import Home from './components/Home/Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from './components/Contact/Contact';
import About from './components/About/About';

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;

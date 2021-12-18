import React from 'react'
import Home from './components/Home/Home';
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <div className='h-screen'>
        <Navbar />
        <Home />
      </div>
    </div>
  );
}

export default App;

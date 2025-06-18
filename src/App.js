import './App.css';
import TextForm from './components/TextForm';
import Navbar from './components/Navbar';
import React, { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light');
  const modeChange = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#032744';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
      <Navbar title={"Text Manager"} aboutText={"About"} mode={mode} modeChange={modeChange} /> {/* send modeChange() function as props */}
      <div className='container my-3'>
        <TextForm heading="Enter Text Here" mode={mode}/>
      </div>
    </>
  );
}

export default App;

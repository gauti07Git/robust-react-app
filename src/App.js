import './App.css';
import TextForm from './components/TextForm';
import Navbar from './components/Navbar';
import React, { useState } from 'react';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }
  document.title = "Text Manager";
  const modeChange = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#032744';
      showAlert("Dark mode is enabled!", 'success');
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode is enabled!", 'success');
    }
  }
  return (
    <>
      <Navbar title={"Text Manager"} aboutText={"About"} mode={mode} modeChange={modeChange} /> {/* send modeChange() function as props */}
      <div>
        <Alert alert={alert} />
      </div>  
      <div className='container my-3'>
        <TextForm heading="Enter Text Here" mode={mode} showAlert={showAlert} />{/* showAlert function pass as props */}
      </div>
    </>
  );
}

export default App;

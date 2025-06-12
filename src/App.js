import './App.css';
import TextForm from './components/TextForm';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar title={"Text Manager"} aboutText={"About"} />
      <div className='container my-3'>
        <TextForm heading="Enter Text Here"/>
      </div>
    </>
  );
}

export default App;

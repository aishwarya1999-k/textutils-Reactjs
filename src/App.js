
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react';

function App() {
  const [mode,setMode] = useState('light'); // whether dark mode is enabled or not
  const [alert,setAlert]=useState(null);

  const showAlert = (message,type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    },3000)
  }

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled","success")
      document.title = "TextUtils - Dark Mode";
      /* setInterval(() => {
        document.title = "TextUtils is Amazing Mode";
      },3000) */
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success")
      document.title = "TextUtils - Light Mode";
    }
  }
  return (
    <>
     <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
     <Alert alert={alert}/>
     {/* <Navbar /> */}
     <div className="container my-3">
     <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
     <About />
     </div>
     
    </>
  );
}

export default App;

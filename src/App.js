
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React,{useState} from 'react'


import {
  BrowserRouter as Router,
  Route,
  Routes,
  
} from "react-router-dom";

function App() {
  const [mode,setMode]=useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);

  }

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor="#2b2c2d";
      showAlert("Dark mode has been enabled","success")
      // document.title='TextUtils - Dark Mode'
      // setInterval(() => {
      //   document.title='TextUtils is Amazing mode'
      // }, 2000);
      // setInterval(() => {
      //   document.title='Install TextUtils now'
      // }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor="white";
      showAlert("Dark mode has been disabled","success")
      // document.title='TextUtils - Light mode'
    }

  }

  return (
    <> 
    <Router>
    <Navbar title="TextUtils" about="About us" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <Routes>
          <Route exect path="/about"  element={
            <About title="About Us" mode={mode}/>
           }/>           
          <Route exect path="/" element={
          <TextForm showAlert={showAlert} heading='Try TextUtils - Word Counter, Character Counter, Remove extra spaces' mode={mode}/>
          }/>      
    </Routes>  
    </div>
    </Router>
    </>  
  );
}

export default App;

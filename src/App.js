// import { useState } from "react/cjs/react.production.min";
import "./App.css";
import Header from "./Components/Header";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";
import {useState} from "react";
function App() {
  const [mode,setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert=(message,type) =>{
    setAlert({
      msg: message,
      type: type
    }); 
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }
  
  const toggleMode =() =>{
    if(mode === 'dark'){
      setMode('light');
      document.body.style.backgroundColor ='white';
      showAlert("Light mode enabled","success");
    }
    else{
      setMode('dark');
      document.body.style.backgroundColor ='#1f3c48';
      showAlert("Dark mode enabled","success");
    }
  }
  return (
    <>
      <Header appname="TextUtils" about="About Us" home="Home" mode = {mode} toggleMode = {toggleMode} />
      <Alert alert = {alert} />
      <div className="container my-4">
      <TextForm heading = "TextUtils app" mode = {mode} toggleMode = {toggleMode} showAlert = {showAlert}/>
      </div>
    </>
  );
}

export default App;

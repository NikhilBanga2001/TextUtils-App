// import { useState } from "react/cjs/react.production.min";
import "./App.css";
import Header from "./Components/Header";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";
import {useState} from "react";
function App() {
  const [mode,setMode] = useState('light');
  const toggleMode =() =>{
    if(mode === 'dark'){
      setMode('light');
      document.body.style.backgroundColor ='white';
      // document.textarea.style.backgroundColor ='white';

    }
    else{
      setMode('dark');
      document.body.style.backgroundColor ='#1f3c48';
      // document.textarea.style.backgroundColor ='grey';
    }
  }
  return (
    <>
      <Header appname="TextUtils" about="About Us" home="Home" mode = {mode} toggleMode = {toggleMode} />
      <div className="container my-4">
      <Alert/>
      <TextForm heading = "TextUtils app" mode = {mode} toggleMode = {toggleMode}/>
      </div>
    </>
  );
}

export default App;

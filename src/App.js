// import { useState } from "react/cjs/react.production.min";
import "./App.css";
import Header from "./Components/Header";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";
import { useState } from "react";
import About from "./Components/About";
// import reactDom from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1200);
  };

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode enabled", "success");
      // setInterval(()=>{
      //   document.title = "Dark Mode is Amazing";
      // }, 2000);
      // setInterval(()=>{
      //   document.title = "Install TextUtils Now";
      // }, 1800);
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#1f3c48";
      showAlert("Dark mode enabled", "success");
      // setInterval(()=>{
      //   document.title = "Light Mode is Amazing";
      // }, 2000);
      // setInterval(()=>{
      //   document.title = "Install TextUtils Now";
      // }, 1800);
    }
  };
  return (

      <Router>
        <Header
          appname="TextUtils"
          about="About Us"
          home="Home"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-4">
          <Routes>
            <Route path= '/about'
              element = {<About/>}></Route>
            <Route path= '/'
              element = {<TextForm
                heading="TextUtils app"
                mode={mode}
                toggleMode={toggleMode}
                showAlert={showAlert}
              />}>
            </Route>
          </Routes>
          {/* <TextForm heading = "TextUtils app" mode = {mode} toggleMode = {toggleMode} showAlert = {showAlert}/> */}
        </div>
      </Router>
  );
}

export default App;

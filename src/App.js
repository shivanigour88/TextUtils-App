import './App.css';
import  Navbar from './componenets/Navbar.js';
//import  About from './componenets/About.js';
import  TextForm from './componenets/TextForm.js';
import React, { useState } from 'react';
import Alert from './componenets/Alert.js';
/*import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";*/

function App() {

  const[mode , setMode] = useState('dark');
  const[alert , setAlert] = useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg : message,
      type :type,
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const ToggleMode = () =>{
    
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = '#09306a';
      showAlert("Dark mode has been enabeled" ,'success');
      document.title ="TextUtils - Darkmod";

      //setInterval(() => {
       // document.title ="TextUtils is Amazing mode ";
      //},2000);
      //setInterval(() => {
       // document.title ="Install TextUtils now ";
      //},1500);
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabeled" ,'success');
      document.title ="TextUtils - Lightmode";

    }
  }
  return (
  <>   
  {/*<Router>*/}
  <Navbar title = "TestUtils" TextAbout = "About" mode = {mode} ToggleMode = {ToggleMode}/>
   <Alert alert = {alert}/>
   <div className="container">
        {/*<Routes>*/}
          {/*<Route exact path="/about" element={<About />} />*/}
          <TextForm Heading="Try TextUtils - Covert Uppercase , Convert Lowercase, Remove extra spaces " mode={mode} showAlert={showAlert}/>
        {/*</Routes>*/}
    </div>
  {/*</Router>*/}
  </>
  );
}

export default App;

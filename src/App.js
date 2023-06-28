import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import About from './components/About';
// import { createRoot } from "react-dom/client";
// import {
//   createBrowserRouter,
//   RouterProvider,
//   Route,
//   Link,
// } from "react-router-dom";



function App() {
  //whether dark mode is enabled or not
  const [mode, setMode]=useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor ='#042743';
      showAlert("Dark mode has been enabled","success");
    }else{
      setMode('light');
      document.body.style.backgroundColor ='white';
      showAlert("Light mode has been enabled","success");
    }
  }

  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: (
  //       <div>
  //         <TextForm showAlert={showAlert} heading="Enter text to analyze" mode={mode} />
  //       </div>
  //     ),
  //   },
  //   {
  //     path: "about",
  //     element: <div><About/></div>,
  //   },
  // ]);
  
  return (
    <>
      <Navbar title="TextUtils"  mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert} />
      <div className="container my-3" >
      <TextForm showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Counter" mode={mode} />
      </div>
      
      

    </>
  );
}

export default App;

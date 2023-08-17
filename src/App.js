import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  const [mode,setMode]  = useState('light');
  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'rgba(33,37,41)';
      document.body.style.color = 'white';
      setDark('LightMode');
      showAlert("Dark Mode Has Been Enabled","success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      setDark('DarkMode');
      showAlert("Light Mode Has Been Enabled","success")
    }
  }

  const [dark,setDark] = useState('DarkMode');
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type) =>{
    setAlert({
      msg: message,
      type : type 
    })
  }
  setTimeout(() =>{
    setAlert(null);
  },2000)
  return (
  <>
  <BrowserRouter>
  <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} dark={dark}/>
   <Alert alert={alert}></Alert>
   <Routes>
    <Route exact path='/about' element={<About/>}></Route>
    <Route exact path='/' element={<TextForm/>}></Route>
  </Routes>
  </BrowserRouter>
   </>
  );
}

export default App;

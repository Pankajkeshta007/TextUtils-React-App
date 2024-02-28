
import { useState } from 'react';
import About from './About';
import './App.css';
import Navbar from './Navbar';
import TextForm from './TextForm';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Alert from './Alert';

 export default function App() {
  const [alert, setAlert] = useState(null);

  const showAlert=(message , type )=>{

    setAlert({
      msg:message,
      type:type

    })
  }
    setTimeout(() => {

      setAlert(null);
   
    } , 1500);
   

  const [mode, setMode]= useState('light');

  const toggleMode =()=>{
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor ='#042743';
      showAlert("Dark mode has been enabled" , "success");
      document.title= 'TextUtils -Dark Mode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor ='white';
      showAlert("Light mode has been enabled" , "success");
      document.title='TextUtils -Light Mode';


    }
  }
  return (
   < >

 {/* <BrowserRouter>
  <Navbar  title="TextUtils" mode={mode} toggleMode={toggleMode}/>
  <Alert alert={alert}/> 

  <Routes>
    <Route exact path="/" element={<TextForm mode={mode}  showAlert={showAlert} heading="Enter the text below to analyze" />}> </Route>
    <Route exact path="/about" element={<About mode={mode} />}></Route>
  </Routes>
  </BrowserRouter> */}
   <Navbar  title="TextUtils" mode={mode} toggleMode={toggleMode}/>
  <Alert alert={alert}/>
  <TextForm mode={mode}  showAlert={showAlert} heading="Enter the text below to analyze" />
     


    </> 

     
    
  );
  }

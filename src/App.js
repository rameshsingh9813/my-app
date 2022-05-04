import './App.css';
import Form from './component/Form';
import Footer from './component/Footer';
import Navigation from './component/Navigation';
import React, { useState } from 'react';


function App() {
  let [Modes,setMode]=useState('light')
  const togglemode=()=>{
    if(Modes==='light'){
      setMode('dark');
    }
    else{
      setMode('light');
    }
  }
  return (
    <>
    <Navigation mode={Modes} togglemode={togglemode}/>
    <Form label="Enter your text..."/>
    <Footer/>
     </>
  );}

export default App;






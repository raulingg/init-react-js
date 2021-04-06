import React,{useState} from 'react';
import './App.css';
import { Content } from './components/content/Content';
import { Navbar } from './components/navbar/Navbar';

function App() {
  const [name, setName]=useState('')

  const handleName =(name)=>{
    setName(name)
  }
  
  return (
    <div>
      <Navbar
        setName={handleName}
      />
      {name&&<h1>{name}</h1>}
      <Content />
    </div>
  );
}

export default App;

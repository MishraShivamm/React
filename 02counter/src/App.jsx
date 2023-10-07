import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let counter = 15
 const addValue = () =>{
  console.log("clicked", counter);
  counter =counter+1 
  
  }
  const lessValue = () =>{
    console.log("clicked", counter);
    counter =counter - 1 
    
    }

  return (
    <>
      <h1> Chai with Shivam</h1>
      <h2>Counter Value:{counter} </h2>
      <button onClick={
        addValue
      }>Add value</button>
      <><br /><button onClick={
        lessValue
      }>less value</button></>
    </>
  )
}

export default App

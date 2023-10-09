import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter]=useState(1)
  //let counter = 15
 const addValue = () =>{
  console.log("clicked", counter);
  //counter =counter+1
  setCounter(counter+1) 
  
  }
  const lessValue = () =>{
    //Assignment part 
    if(counter >=1 ){
      setCounter(counter-1)
    }
    else {
      console.log("STOP")
    }
    // the above if else part is assignment for the hooks vedio of series Chai or React 
   // counter =counter - 1 
    
    }

  return (
    <>
      <h1> Chai with Shivam</h1>
      <h2>Counter Value:{counter} </h2>
      <button onClick={
        addValue
      }>Add value:{counter}</button>
      <><br /><button onClick={
        lessValue
      }>less value:{counter}</button></>
    </>
  )
}

export default App

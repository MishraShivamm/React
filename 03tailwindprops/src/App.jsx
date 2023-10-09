import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myobj = {
    user: "Shivam",
    age:"20"
  }
  let myarr = [23,22,21]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 
      rounded-xl mb-4'>Chai with Shivam </h1>
      <Card username="Chai With Shivam" btnText = "Click Me"/>
      <Card username="Chai With Code" btnText = "Visit Me"/>
      
    </>
  )

}

export default App







/// Props make  component reuseable 
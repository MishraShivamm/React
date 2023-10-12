import { useState , useCallback} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length ,setLength] = useState (7);
  const [num , setNum ] = useState (false);
  const [specialKeyword , setSpecialKeyword] = useState(false);
  const [Password , setPassword] = useState("")

  const passwordGenerator = useCallback (()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(num) str += "0123456789"
    if(specialKeyword) str += "~!@#$%^&*(){}[]`"


    for (let i = 1; i < array.length; i++) {
      let char = (Math.random () * str.length +1)    
    }


  },[length,num,specialKeyword,setPassword])

  return (
    <>
      <h1 className='text-4xl text-center 
      text-white'>Password Generator</h1>
    </>
  )
}

export default App

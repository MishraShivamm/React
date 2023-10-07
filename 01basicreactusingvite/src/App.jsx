import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Chai from './Chai'

function App() {
  const user = "Shivam "
  const [count, setCount] = useState(0)

  return (
    <><Chai /><h1>Chai  with {user}</h1></>
  )
}

export default App

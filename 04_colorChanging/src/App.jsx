import { useState } from "react"

function App() {
  const [color,setcolor] = useState('skyblue')

  return (
    <>
      <div className="w-full h-screen duration-300"
      style = {{backgroundColor: color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12  inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-3 
          rounded-3xl ">
            <button onClick={()=>setcolor("red")}className="outline-none px-3 py-1 
            rounded- full text-white shadow-lg "
            style={{backgroundColor:"red"}}>red</button>
            <button onClick={()=>setcolor("blue")}className="outline-none px-3 py-1 
            rounded- full text-white shadow-lg "
            style={{backgroundColor:"blue"}}>blue</button>
            <button onClick={()=>setcolor("green")}className="outline-none px-3 py-1 
            rounded- full text-white shadow-lg "
            style={{backgroundColor:"green"}}>green</button>
            <button onClick={()=>setcolor("black")}className="outline-none px-3 py-1 
            rounded- full text-white shadow-lg "
            style={{backgroundColor:"black"}}>black</button>
            <button onClick={()=>setcolor("grey")}className="outline-none px-3 py-1 
            rounded- full text-white shadow-lg "
            style={{backgroundColor:"grey"}}>grey</button>
            <button onClick={()=>setcolor("olive")}className="outline-none px-3 py-1 
            rounded- full text-white shadow-lg "
            style={{backgroundColor:"olive"}}>olive</button>
            <button onClick={()=>setcolor("yellow")}className="outline-none px-3 py-1 
            rounded- full text-white shadow-lg "
            style={{backgroundColor:"yellow"}}>yelllow</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
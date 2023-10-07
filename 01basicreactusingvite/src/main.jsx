import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'



function Myapp(){
  return(
    <div>
      <h1>Custom App</h1>
    </div>
  )
}

/*const reactElement= {
  type :"a",
  props :{
      href:"https://google.com",
      target: "_blank"
  },
  children:"CLick me to visti Goggle"
}*/


const anotherUser = "Chai or react"
const anotherElement = (
  <a href='https://google.com' target = '_blank' >visit google</a>
)

const reactElement = React.createElement(
  'a',
  {href:"https://google.com", target:'_blank'},
  'click me to visit google',
  anotherUser 
)
ReactDOM.createRoot(document.getElementById('root')).render(
 
    
   reactElement
    
)

/* Every react use a bunndler 
JSX -JavaScript XML 
 
this whole code "<div>
      <h1>Custom App</h1>
    </div>" is parsed and then converted into tree in this sort of code " const reactElement= {
    type :"a",
    props :{
        href:"https://google.com",
        target: "_blank"
    },
    children:"CLick me to visti Goggle"
} "


in react if you are creating element in main function "const reactElement = React.createElement()" like this so in this 
creatElement there's a predefined way to declare things or give prarameter . 
on first we have to declare a tag , 
2nd an object,
3rd will be direct object .
variable inject (direct)


in react when our tree is completed theen variable injections starts . 

 const user = "Shivam " this is in a function and then 
   return (
    <><Chai /><h1>Chai  with {user}</h1></>
  ) so  this " {user}" is called evaluated expression which will  show the final output . 


*/
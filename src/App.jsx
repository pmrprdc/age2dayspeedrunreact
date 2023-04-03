import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [digitA, setDigitA] = useState("1")
  const [digitB, setDigitB] = useState("2")

  const buttonArray = [];
  const digitArray = []

  for(let i=0; i<10; i++){
      buttonArray.push({
        type: "button",
        name: `${i*10} to ${(i*10)+9}`,
        key: i,
        value: parseInt(i) * 10

      })
      digitArray.push({
        type: "button",
        name: i,
        key: `digit${i}`,
        value: parseInt(i)
      })
  }

  const handlerForB = event => {

    setDigitB(event.target.value)

    
  }

  const handlerForA = event => {
    
  
    setDigitA(event.target.value/10)

  }


  

  return (
    <div className="App">
        <h1>{digitA} {digitB}</h1>
        <h1>How old are you???</h1>
        <div>
          {buttonArray.map(x=>{
            return (
              <button key={x.key} value={x.value} onClick={handlerForA}>{x.name}</button>
            )
          })}
        </div>
        <div>
           {digitArray.map(x=>{
            return (
            <button onClick={handlerForB} value={x.value} key={x.key}>{x.name}</button>
            )
           })}
        </div>
        <button>convert age 2 days</button>
        <button>
          Restarts
        </button>
    </div>
  )
}

export default App

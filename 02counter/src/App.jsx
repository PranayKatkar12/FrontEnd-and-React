import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter]=useState(15)
  //let counter=5;

  const addValue= () => {
    //console.log("clicked",counter)
    //counter=counter+1;
    // if(counter===20){
    //   return;
    // }

    // setCounter(counter+1)
    // setCounter(counter+1)
    // setCounter(counter+1)
    // setCounter(counter+1)

    // setCounter(counter+1)
    // setCounter(counter+2)
    // setCounter(counter+3)
    // setCounter(counter+4)

    setCounter((PrevCounter)=>PrevCounter+1)
    setCounter((PrevCounter)=>PrevCounter+1)
    setCounter((PrevCounter)=>PrevCounter+1)
    setCounter((PrevCounter)=>PrevCounter+1)
  }

  const removeValue= () => {
     if(counter <= 0){
      return;
     }
     setCounter(counter-1)
  }
  return (
    <>
      <h1>chai aur react</h1>
      <h2>counter value:{counter}</h2>
      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove value {counter}</button>
      <p>footer:{counter}</p>
    </>
  )
}

export default App

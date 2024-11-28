import { useState } from 'react'
import ControlledComp from './components/ControlledComp'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>

<h1 className="text-3xl text-red-200 font-bold underline">
      Hello world!
    </h1>
    <ControlledComp/>
    </>
  )
}

export default App

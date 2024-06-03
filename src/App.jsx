import { useState } from 'react'
import Nav from './Components/Nav';
import Matrix from "/Matrix_1.mp4";

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-gray-950">
      <Nav />
      <div className="relative bg-gray-900 h-[400px] w-[85%] max-w-[1200px] m-auto border-[1px] border-green-950">
        <h1 className="absolute z-5 text-5xl text-right text-green-300">This is a giant text</h1>
        <video src={Matrix} autoPlay={true} loop muted className="absolute z-0 w-full h-[100%] object-cover object-center" />
      </div>
    </div>
  )
}

export default App

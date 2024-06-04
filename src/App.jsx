import { useState, useEffect } from 'react'
import Nav from './Components/Nav';
import Matrix from "/Matrix_1.mp4";
import Hero from "./Components/Hero";
import Gallery from "./Components/Gallery";
import Footer from "./Components/Footer";

import './App.css'

function App() {
    
  useEffect(() => {
    document.title = `Enter the Matrix`
  }, []);

  return (
    <>
    <div className="select-none relative bg-gray-900 h-[400px] w-[85%] max-w-[1200px] m-auto border-[1px] border-green-950 rounded-b-3xl
    lg:h-[500px]">

      <video src={Matrix} autoPlay={true} loop muted className="absolute z-0 w-full h-[100%] object-cover object-center opacity-40" />
      <Nav />
      <Hero />
      
    </div>
      <Gallery />
      <Footer/>
    </>
  )
}

export default App

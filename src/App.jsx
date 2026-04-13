import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navigation/Navbar.jsx'
import Home from './Components/Home.jsx'
import About from './Components/About.jsx'
import Projects from './Components/Projects.jsx'
import Contact from './Components/Contact.jsx'
const App = () => {
  return (
    <main className=''>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/project" element={<Projects/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App

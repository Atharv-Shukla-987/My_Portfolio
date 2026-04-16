import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navigation/Navbar.jsx'
import Home from './Components/pages/Home.jsx'
import About from './Components/pages/About.jsx'
import Projects from './Components/pages/Projects.jsx'
import Contact from './Components/pages/Contact.jsx'
const App = () => {
  return (
    <main className=''>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App

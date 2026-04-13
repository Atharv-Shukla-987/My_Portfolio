import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <Link to="/" className='text-2xl font-bold text-blue-500'>
          AH
        </Link>
        <div className="flex gap-6">
          <Link to="/" className="hover:text-blue-500 transition">Home</Link>
          <Link to="/about" className="hover:text-blue-500 transition">About</Link>
          <Link to="/project" className="hover:text-blue-500 transition">Projects</Link>
          <Link to="/contact" className="hover:text-blue-500 transition">Contact</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

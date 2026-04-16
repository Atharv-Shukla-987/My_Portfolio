import React from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className="header w-full font-bold bg-transparent absolute top-0 left-0 z-20  ">
      <div className="absolute w-full flex justify-around items-center mt-1 text-2xl">
        <NavLink to="/" className='w-10 h-10 rounded-lg  bg-white
        flex items-center justify-center shadow-md '>
          <p class="bg-gradient-to-r from-blue-700 to-blue-400 bg-clip-text text-transparent">
           AH
           </p>

        </NavLink>
       
       <nav className='flex justify-between items-center gap-10'>
         <NavLink to='/about' className={({ isActive }) => isActive ? "text-blue-600" : "text-black" }>
          About
        </NavLink>
        <NavLink to='/projects' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
          Projects
        </NavLink>
        <NavLink to='/contact' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
        Contact
        </NavLink>
       </nav>

      
      </div>
    </header>
  )
}

export default Navbar

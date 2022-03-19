import React from 'react'
import Navbar from '../navbar/Navbar'
import "./Header.css"

function Header() {
  return (
    <header className='d-flex text-center justify-content-center bg-dark '>
        <Navbar/>
    </header>
  )
}

export default Header
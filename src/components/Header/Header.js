import React from 'react'
import NavBar from '../NavBar/NavBar'
import { Link } from 'react-router-dom'
import style from './Header.module.css'
function Header() {
  return (
      <>
        <header>
            <Link to={'/'}><h1>Paulo's New York Times</h1></Link>
            <NavBar />
        </header>
      </>
  )
}

export default Header
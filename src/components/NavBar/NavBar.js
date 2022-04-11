import React from 'react'
import { Link } from 'react-router-dom'
import style from './NavBar.module.css'
function NavBar() {
  return (
    <nav>
        <ul>
            <li><Link  to={'/health'}>health</Link></li>
        </ul>
        <ul>
            <li><Link to={'/opinion'}>opinion</Link></li>
        </ul>
        <ul>
            <li><Link to={'/technology'}>technology</Link></li>
        </ul>
        <ul>
            <li><Link to={'/politics'}>politics</Link></li>
        </ul>
        <ul>
            <li><Link to={'/arts'}>arts</Link></li>
        </ul>
        <ul>
            <li><Link to={'/automobiles'}>automobiles</Link></li>
        </ul>
        <ul>
            <li><Link to={'/books'}>books</Link></li>
        </ul>
        <ul>
            <li><Link to={'/fashion'}>fashion</Link></li>
        </ul>
        <ul>
            <li><Link to={'/movies'}>movies</Link></li>
        </ul>
        <ul>
            <li><Link to={'/sports'}>sports</Link></li>
        </ul>
    </nav>
  )
}

export default NavBar
            


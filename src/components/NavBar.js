import React from 'react'
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about/">About</Link>
        </li>
        <li>
          <Link to="/users/">Users</Link>
        </li>
        <li>
          <Link to="/page/">Page</Link>
        </li>
        <li>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">Google</a>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar

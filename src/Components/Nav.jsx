import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import "./Nav.css"

export default class Nav extends Component {
  render() {
    return (
        <nav>
          <div className='logo'><h1>AMAZON</h1></div>
          <div className='nav-items'>
        <NavLink to="/" className="nav-link">Home</NavLink>
        <NavLink to="/login" className="nav-link">Login</NavLink>
        <NavLink to="/register" className="nav-link">Register</NavLink>
        <NavLink to="/contact" className="nav-link">Contact</NavLink>
        </div>
        </nav>
      ) 
  }
}

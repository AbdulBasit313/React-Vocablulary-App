import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/Navbar.css'

class Navbar extends Component {
   render() {
      return (
         <div className='Navbar'>
            <NavLink activeClassName='Navbar-active' exact to='/'>Home</NavLink>
            <NavLink activeClassName='Navbar-active' exact to='/newword'>New Word</NavLink>
            <NavLink activeClassName='Navbar-active' exact to='/about'>About</NavLink>
         </div>
      )
   }
}

export default Navbar

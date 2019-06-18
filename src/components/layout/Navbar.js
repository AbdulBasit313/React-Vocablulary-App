import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../../styles/Navbar.css'


class Navbar extends Component {
   render() {
      return (
         <nav className='nav-wrapper teal lighten-2'>
            <div className='container'>
               <Link to='/' className="brand-logo">Logo</Link>
               <ul className='right'>
                  <li><NavLink activeClassName='Navbar-active' exact to='/'>Home</NavLink></li>
                  <li><NavLink activeClassName='Navbar-active' exact to='/newword'>New Word</NavLink></li>
                  <li><NavLink activeClassName='Navbar-active' exact to='/about'>About</NavLink></li>
               </ul>
            </div>
         </nav>
      )
   }
}

export default Navbar

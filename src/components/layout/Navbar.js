import React from 'react'
import { Link, NavLink } from 'react-router-dom'


const Navbar = () => {
   return (
      <nav className='nav-wrapper teal lighten-2'>
         <div className='container'>
            <Link to='/' className="brand-logo">Vocaby</Link>
            <ul className='right'>
               <li>
                  <NavLink activeClassName='Navbar-active' exact to='/'>
                     <i className="material-icons material-icon" style={iconStyle}>home</i>Home
                     </NavLink>
               </li>
               <li>
                  <NavLink activeClassName='Navbar-active' exact to='/newword'>
                     <i className="material-icons material-icon" style={iconStyle}>add_circle</i>New Word
                     </NavLink>
               </li>
               <li>
                  <NavLink activeClassName='Navbar-active' exact to='/about'>
                     <i className="material-icons material-icon" style={iconStyle}>email</i>About
                     </NavLink>
               </li>
            </ul>
         </div>
      </nav>
   )
}

const iconStyle = {
   display: 'inline',
   marginLeft: 15,
}

export default Navbar

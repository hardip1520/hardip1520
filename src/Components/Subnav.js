import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'

const Subnav = () => {
  return (
   <>
   <div className='sub-container'>
<div className='login-support'>
    <ul className='sub-login'>
        <li>
            <NavLink className='nav-form' to='/user'>Customer Login</NavLink>
        </li>
        <li>
            <NavLink className='nav-form' to='/agent'>Agent Login</NavLink>
        </li>
    </ul>
</div>
   </div>
   </>
  )
}

export default Subnav
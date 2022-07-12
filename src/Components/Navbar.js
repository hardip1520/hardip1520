import React from 'react'
import './Navbar.css'
import { useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

  const navigate = useNavigate();
  return (
   <>
   <div>
   <nav className="navbar">
        <div className="logo" onClick={()=>navigate("/")}>
          <h2>
            <span>R</span>EAL
            <span>S</span>URE
          </h2>
        </div>
        <div className="menu-NavLink">
          <ul className="nav-list">
            <li>
              <NavLink to='/'> Home </NavLink>
            </li>
            {/* <li>
              <NavLink to="Products">Products</NavLink>
            </li>
            <li>
              <NavLink to="about-us">About us</NavLink>
            </li>
            <li>
              <NavLink to="Contactus">Contact us</NavLink>
              
            </li> */}
          </ul>
        </div>

        <div className="social-NavLinks">
          
          <span className="my-shop"></span>
          <div className="cart" >
          {/* <span>
            <NavLink to="cart" className="cart-plus" onClick={showHideCart}><FaShoppingCart/></NavLink>
          </span> */}
         
        </div>
        </div>
      </nav>
   </div>
   </>
  )
}

export default Navbar
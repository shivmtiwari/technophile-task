import React from 'react'
import { NavLink } from 'react-router-dom'
import { AiOutlineHome, AiOutlineShoppingCart } from 'react-icons/ai'
import {RiAccountCircleLine} from 'react-icons/ri'
const Navbar = () => {
  return (
    <div className='NavWrapper'>
      <div className="Navbar">
        <NavLink to='/' className='NavItem' >
          <AiOutlineHome className='NavIcon' />
          <span>Home</span>
        </NavLink>
        <NavLink to='/cart' className='NavItem'>
          <AiOutlineShoppingCart className='NavIcon' />
          <span>Cart</span>
        </NavLink>
        <NavLink to='/account' className='NavItem' >
          <RiAccountCircleLine className='NavIcon' />
          <span>Account</span>
        </NavLink>
      </div>
    </div>
  )
}

export default Navbar
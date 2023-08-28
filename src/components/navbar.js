import React from 'react'
import '../styles/navbar.css'
import { IoSearch } from "react-icons/io5"
import { FiGlobe } from "react-icons/fi"
import { RxHamburgerMenu } from "react-icons/rx"
import { BsPersonCircle } from "react-icons/bs"

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <div>
        <img className='logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png' />
      </div>
      <div className='searchbox'>
        <p>Anywhere</p>
        <p>|</p>
        <p>Any Week</p> 
        <p>|</p>
        <p>Add Guests</p>
        <p><IoSearch className='icon' /></p>
      </div>

      <div className='box'>
        <div className='boxes'>
          <p>Airbnb your home</p>
        </div>

        <div className='boxes'>
          <FiGlobe className='globe' />
        </div>

        <div className='profilebox'>
          <RxHamburgerMenu className='menu' />
          <BsPersonCircle className='person' />
        </div>
      </div>
    </div>
  )
}

export default Navbar

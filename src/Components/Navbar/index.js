import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
const Navbar = () =>{
  return (
    <div><header className="header">

    <a href="#" className="logo">
        <img src="images/logo.png" alt=""/>
    </a>
        <nav className="navbar">
        <a> <Link to="/">home</Link></a>
        <a> <Link to="/about">about</Link></a>
        <a> <Link to="/menu">menu</Link></a>
        <a> <Link to="/contact">contact</Link></a>
    </nav>

    <div className="icons">
        <div className="fas fa-search" id="search-btn"></div>
        <div className="fas fa-shopping-cart" id="cart-btn"></div>
        <div className="fas fa-bars" id="menu-btn"></div>
    </div>

    <div className="search-form">
        <input type="search" id="search-box" placeholder="search here..."/>
        <label forhtml="search-box" className="fas fa-search"></label>
    </div>

 

</header>

        </div>
  )
}

export default Navbar
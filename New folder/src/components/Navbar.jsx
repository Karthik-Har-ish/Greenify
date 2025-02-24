import React from 'react'

const Navbar = () => {
  return (
    <nav className='navbar'>

        <div className="greenify-header-and-icon">
        <h1>Greenify</h1>
        
        <img className='logo' src="logo.png" alt="Logo" />
        </div>
        
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>

      <img className='login-icon' src="login.png" alt="login" />
    </nav>
  )
}

export default Navbar
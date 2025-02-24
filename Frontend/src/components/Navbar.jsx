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
          <a href="/home">Home</a>
        </li>
        <li>
          <a href="/leaderboard">Leaderboard</a>
        </li>
        <li>
          <a href="/scan">Scan</a>
        </li>
      </ul>

      <a href="/login"><img className='login-icon' src="login.png" alt="login" /></a>
    </nav>
  )
}

export default Navbar
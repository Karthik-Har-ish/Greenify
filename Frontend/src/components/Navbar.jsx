import React from 'react'

const Navbar = () => {
  return (
    <nav className='navbar'>

        <div className="greenify-icon">
        
        
        <img className='logo' src="logo.png" alt="Logo" />
        
        </div>
        
      <h1 className='greenify-header'>Greenify</h1>

      <div className="profile-and-options">
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

      <a href="/"><img className='login-icon' src="login.png" alt="login" /></a>
      </div>
      
    </nav>
  )
}

export default Navbar
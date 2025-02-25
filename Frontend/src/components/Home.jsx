import React from 'react'
import axios from 'axios';

const Home = () => {

  
  
  return (
    <>
    <h1 className="header" >Dashboard:</h1>
    <div className="cards">
        <div className='card'>
            {/* Amount of items of waste recycled */}
        </div>
        <div className='card'>
            {/* Monthwise statistics of recycling */}
        </div>
        <div className='card'>
            {/* Top contributors */}
        </div>
    </div>
    
    </>
  )
}

export default Home
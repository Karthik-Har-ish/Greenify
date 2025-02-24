import React from 'react'

const Leaderboard = () => {
  return (
    <div>
      <h1 className='header'>Leaderboard:</h1>
      {/* Add leaderboard data here */}

    <div className='leaderboard-container'>
        <div className='leaderboard-row leaderboard-header'>
            <div className='position'>Position</div>
            <div className='name'>Name</div>
            <div className='points'>Points</div>
        </div>
        <div className='leaderboard-row'>
            <div className='position'>Position</div>
            <div className='name'>Name</div>
            <div className='points'>Points</div>
        </div>
        <div className='leaderboard-row'>
            <div className='position'>Position</div>
            <div className='name'>Name</div>
            <div className='points'>Points</div>
        </div>
        <div className='leaderboard-row'>
            <div className='position'>Position</div>
            <div className='name'>Name</div>
            <div className='points'>Points</div>
        </div>
        <div className='leaderboard-row'>
            <div className='position'>Position</div>
            <div className='name'>Name</div>
            <div className='points'>Points</div>
        </div>
    </div>
    </div>
  )
}

export default Leaderboard
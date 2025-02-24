import axios from 'axios'
import React, { useState } from 'react'

const Leaderboard = () => {
  let [users,setUsers] = useState([])

  axios.get("http://localhost:3000/users")
  .then((res)=>{
    setUsers(res.data.users);
  })
  .catch((err)=>{
    console.log(err);
  })


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
        
        {users.map((user)=>{
          return(
            <div key={user.name} className='leaderboard-row leaderboard-header'>
            <div className='position'>1</div>
            <div className='name'>{user.userName}</div>
            <div className='points'>{user.points}</div>
        </div>
          )
        })}
    </div>
    </div>
  )
}

export default Leaderboard
import React from 'react'
import axios from 'axios';

const Home = () => {

  const [user,setUser]=React.useState("")

  React.useEffect(()=>{
    const id = localStorage.getItem("userId")
    axios.get("http://localhost:3000/profile/"+id)
    .then((res)=>{
      setUser(res.data.user)
    })
    .catch((err)=>{
      console.log(err)
    })
  },[])
  
  return (
    <>
    <h1 className='header'>Hello {user.userName}!</h1>
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
import Login from "./components/Login"
import Navbar from "./components/Navbar"
import Home from "./components/Home"

import { Routes,Route } from "react-router-dom"
import Leaderboard from "./components/Leaderboard"
function App() {

  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/leaderboard" element={<Leaderboard/>}></Route>
      </Routes>
    </>
  )
}

export default App

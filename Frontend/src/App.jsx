import Login from "./components/Login"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import React from "react"
import { Routes,Route } from "react-router-dom"
import Leaderboard from "./components/Leaderboard"
import ProtectedRoute from "./components/ProtectedRoute"
import Scan from "./components/Scan"
import Signup from "./components/Signup"
function App() {
  
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>

        
        <Route path="/home" element={<ProtectedRoute><Home/></ProtectedRoute>}></Route>
        <Route path="/leaderboard" element={<ProtectedRoute><Leaderboard/></ProtectedRoute>}></Route>
        <Route path="/scan" element={<ProtectedRoute><Scan/></ProtectedRoute>}></Route>
      </Routes>
    </>)
}

export default App

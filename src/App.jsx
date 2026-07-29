import { useState } from 'react'
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home"
import Navbar from "./components/common/Navbar"


const App = () => {
  console.log("app")

  return (
    <>
      <div className="w-full min-h-screen bg-black flex flex-col font-inter overflow-x-hidden">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  )
}

export default App

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoadingPage from './routes/LoadingPage'
import Home from './Home'
import Basic from './routes/Basic'
import Dot from './routes/Dot'
import Gsap from './routes/Gsap/Gsap'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/loading" element={<LoadingPage/>}/>
        <Route path="/basic" element={<Basic/>}/>
        <Route path="/dot" element={<Dot/>}/>
        <Route path="/gsap" element={<Gsap/>}/>
      </Routes>
    </>
  )
}

export default App;
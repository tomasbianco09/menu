import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Nosotros from './components/Nosotros/Nosotros'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'


const App = () => {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<Nosotros />} />
      </Routes>
      {/* <Nosotros/> */}
      {/* <Home/> */}
      <Footer/>
    </BrowserRouter>
  )
}

export default App
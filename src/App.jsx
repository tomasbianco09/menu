import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Nosotros from './components/Nosotros/Nosotros'
import Footer from './components/Footer/Footer'


const App = () => {
  return (
    <BrowserRouter>
      <NavBar/>
      <Nosotros/>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Nosotros from './components/Nosotros/Nosotros'


const App = () => {
  return (
    <BrowserRouter>
      <NavBar/>
      <Nosotros/>
      {/* <Home/> */}
    </BrowserRouter>
  )
}

export default App
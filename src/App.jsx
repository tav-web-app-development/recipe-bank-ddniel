import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Recipes from './components/Recipes'


function App() {

  return (
    <>
      <NavBar/>
      <Recipes />
      <Footer/>
    </>
  )
}

export default App

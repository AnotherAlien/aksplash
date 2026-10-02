import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar'
// import {Secnavbar} from './components/secnavbar'
import Canvas from './components/canvas'
import Login from './components/login'
import Register from './components/register'
import Dashboard from './components/dashboard'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Canvas />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </>
  )
}

export default App

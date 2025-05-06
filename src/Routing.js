import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Authenticate from './Practice session 1/Authenticate'
import Welcome from './Practice session 1/Welcome'

function Routing() {
  return (
    <div>

    <Routes>
        <Route  path='/' element={<Authenticate/>}/>
        <Route path='Welcome' element={<Welcome/>}/>
    </Routes>
    </div>
  )
}

export default Routing
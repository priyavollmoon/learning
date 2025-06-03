import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import LoginForm from './LoginForm'

function ApiRoute() {
  return (
    <Routes>
        <Route path='/'  element={<LoginForm/>}/>
        <Route path='/Home' element={<Home/>}/>
    </Routes>
  )
}

export default ApiRoute
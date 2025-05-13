import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Login'
import Dashboard from './Dashboard'
import ProtectedRouter from './ProtectedRouter'

function ProtectedRoute() {
  return (
    <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path='/DashBoard' element={<ProtectedRouter><Dashboard/></ProtectedRouter>}/>
        

    </Routes>
  )
}

export default ProtectedRoute
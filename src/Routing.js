import React, { Suspense } from 'react'
import { Route,  Routes } from 'react-router-dom';

function Routing() {
  const  LazyAuthenticate=React.lazy(()=>import('./Practice session 1/Authenticate'))
  const  LazyWelcome=React.lazy(()=>import('./Practice session 1/Welcome'))
  return (
    
<Suspense fallback={<div>Loading......</div>}>
    <Routes>
        <Route  path='/' element={<LazyAuthenticate/>}/>
        <Route path='welcome' element={<LazyWelcome/>}/>
    </Routes>

</Suspense>
  
    
  )
}

export default Routing
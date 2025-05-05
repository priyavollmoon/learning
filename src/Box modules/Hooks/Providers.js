import React, { useContext, useState } from 'react'
import { myContext } from './Mycontext'
import Hooks from './Hooks'

function Providers() {
    const [name,setName]=useState("rasika");
  return (
    <myContext.Provider value={{name,setName }}>
        <Hooks/>
    
    </myContext.Provider>
  )
}

export default Providers;
import React, { useContext, useState } from 'react'
import UserContext from '../UserContext'

function Profile() {
    
    const {userName,setUserName}=useContext(UserContext);
  return (
    <div>
        <h1>Hello ,{userName}</h1>
        <input  type='text' value={userName} placeholder='username' onChange={(e)=> setUserName(e.target.value)}/>
    </div>
  )
}

export default Profile
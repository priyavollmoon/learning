import React, { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

function Authenticate() {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const navigate=useNavigate();
    const handleLogin=()=>{
        console.log("data",email,password);
    if(email && password){
       navigate("/Welcome");
    }else{
        alert("give correct  email and password")
    }
    }
    
  return (
    <div>
        
        <input type='email' value={email} placeholder='email' onChange={(e)=>setEmail(e.target.value)}/>
        <input type='password' value={password} placeholder='password'onChange={(e)=>setPassword(e.target.value)}/>
         <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Authenticate

//   "email": "eve.holt@reqres.in",
//   "password": "cityslicka"
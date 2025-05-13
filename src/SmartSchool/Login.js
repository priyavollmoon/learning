import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import studentStore from './StudentStore';

const Login = () => {

    const [Username,setUsername]=useState("");
    const [Password,setPassword]=useState("");
    const navigate=useNavigate();
    if(!localStorage.getItem("data")){
     const data={
        Username:"riya",
        Password:"vino"   
    }
     const datas=localStorage.setItem("data",JSON.stringify(data));
    }

    const handleLogin=(e)=>{
    e.preventDefault();
        const details=JSON.parse(localStorage.getItem("data"));
        
        console.log("username",Username);
        console.log("Password",Password);
        if(details.Username === Username && details.Password === Password )
            console.log("in");
            alert("data matched");
             studentStore.login();
            navigate('/Dashboard');

    }
   
   
  return (
    <div className='text-center'>
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
            <input type='text' value={Username}  onChange={(e)=>setUsername(e.target.value)}/>
            <input  type='string' value={Password} onChange={(e)=>setPassword(e.target.value)}/>
        <button type='submit'>Login</button>
        </form>
    </div>
  )
}

export default Login
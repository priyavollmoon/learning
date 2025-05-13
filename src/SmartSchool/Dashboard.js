import React, { useState } from 'react'
import { json, useNavigate } from 'react-router-dom'
import studentStore from './StudentStore';
import { observer } from 'mobx-react-lite';

const Dashboard = observer(() => {
    const[name,setName]=useState("");
    const[id,setId]=useState("");
    const navigate=useNavigate();
const handleSubmit=(e)=>{
    
e.preventDefault();
    if(name && id){
     studentStore.addStudent(name,id);
     setName('');
     setId('');    
    }
}


const handleRemove=(studentId)=>{
    studentStore.removeStudent(studentId);
}
const handleLogout=()=>{
    studentStore.logOut();
    navigate('/');
}
    
  return (
    <div>
        <button onClick={handleLogout}>logOut</button>
        <form onSubmit={handleSubmit}>
            <input type='text' value={name} onChange={(e)=>setName(e.target.value)}/>
            <input type='text' value={id} onChange={(e)=>setId(e.target.value)}/>
        <button type='submit'>Add Student</button>
        </form>
        <table>
            <thead>
                <th>id</th>
                <th>name</th>
            </thead>
            <tbody>
                {studentStore.students.map((student)=>(
                <tr key={student.id}>
                    <td>{student.id}</td>
                    <td>{student.name}</td>
                    <td><button onClick={()=>handleRemove(student.id)}>Delete</button></td>

                </tr>
))}
            </tbody>
        </table>
    </div>
  )
}
)

export default Dashboard
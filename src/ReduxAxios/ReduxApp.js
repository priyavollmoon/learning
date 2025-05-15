import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addStudent, fetchStudent,updateStudent } from './studentSlice';

const ReduxApp = () => {
    const dispatch=useDispatch();
    const{data,loading,error}=useSelector((state)=>state.student);
    const [title,setTitle]=useState("");
    const [selectedId,setSelectedId]=useState(null);
   
    useEffect(()=>{
      dispatch(fetchStudent());
    },[dispatch])

    const handleSubmit=(e)=>{
        
        e.preventDefault();
        if(title.trim() === '') return;
        if(selectedId){
         dispatch(updateStudent({ id:selectedId, title}));
        }else{
             dispatch(addStudent({title}));

        }
        setTitle('');
        setSelectedId(null);
    }
    
      const handleUpdate = (id,title) => {
        console.log("item",id,title);
        setTitle(title);
        setSelectedId(id);
      
       
  };
  return (
    <div>
        {loading && <p>loading</p>}{error && <p>{error}</p>}
        <form onSubmit={handleSubmit}> 
            <input type='text' value={title} onChange={(e)=>setTitle(e.target.value)}/>
            <button type='submit'>{selectedId?"updateStudent":"addStudent"}</button>
            
        </form>
    
        <ul>
            {data.map((item)=>(
                <li key={item.id}>
                    {item.title}
                     <button onClick={()=>handleUpdate(item.id,item.title)}>Edit</button>
                     
                    
                </li>
            )
            )}
        </ul>
    </div>
  )
}

export default ReduxApp;
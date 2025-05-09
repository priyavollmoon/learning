import Item from "antd/es/list/Item";
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Welcome() {
  const [user, setUser] = useState([]);
  const [editedRow,setEditedRow]=useState(null);
const [editData,setEditData]=useState({});
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  const handleDelete=(id)=>{
    const updated=user.filter((item)=> item.id !== id);
    setUser(updated);
  }

   const handleEdit=(item)=>{
    setEditedRow(item.id);
    setEditData({name:item.name,email:item.email});
   }

   const handleSave=(id)=>{
    const savedData=user.map((data)=> data.id === id? {...data,...editData}:data)
    setUser(savedData);
    setEditedRow(null);
    setEditData({});
   }
   const handleCancel=()=>{
  setEditedRow(null);
  setEditData({});
   }
  return (
    <div className="bg-light vh-100">
      <h1 className="text-center text-bold">Table</h1>
      <table className="table table-hover table-success w-50 mx-auto mt-5">
      
        <thead>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Action</th>
        </thead>
        <tbody>
          {user &&
            user.map((item) => (
              <tr key={item.PostId}>
                <td>{item.id}</td>
                
                <td>{
                  editedRow === item.id ? (
                    <input type="text" value={editData.name} onChange={(e)=>setEditData({...editData,name:e.target.value})}/>
                  )
                :item.name
                }</td>
                <td>{
                editedRow === item.id ?(
                  <input type="text" value={editData.email}  onChange={(e)=>setEditData({...editData,email:e.target.value})}/>
                ):item.email
              
              }</td>
                <td>
                  {
                    editedRow === item.id ? (
                      <>
                      <button className="rounded btn btn-primary"  onClick={()=>handleSave(item.id)}>save</button>
                      <button className="rounded btn btn-secondary" onClick={handleCancel}>cancel</button>
                 
                </> ):
                (
               <>
                <button className="rounded btn btn-success" onClick={()=>handleEdit(item)}>Edit</button>
                <button className="rounded btn btn-danger" onClick={()=>handleDelete(item.id)}>Delete</button>
               </>

                )}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Welcome;

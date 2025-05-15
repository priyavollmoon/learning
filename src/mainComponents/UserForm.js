import React, { useState } from "react";

const UserForm = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
  });
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2></h2>
        <input type="text" value={data.name} onChange={(e)=>setData({...data,name:e.target.value})}/>
        <input type="email" value={data.email} onChange={(e)=>setData({...data,email:e.target.value})}/>
        <button type="submit"></button>
      </form>
    </div>
  );
};

export default UserForm;

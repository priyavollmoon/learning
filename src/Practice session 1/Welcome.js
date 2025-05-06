import Item from "antd/es/list/Item";
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Welcome() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);
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
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td><button className="rounded btn btn-success">Edit</button></td>
                <td><button className="rounded btn btn-danger">Delete</button></td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Welcome;

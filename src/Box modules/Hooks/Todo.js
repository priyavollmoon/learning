import React, { useEffect, useReducer, useState } from "react";

const Todos = [
  {
    id: 1,
    todo: "learning",
  },
  {
    id: 2,
    todo: "internship",
  },
  { id: 3, todo: "working projects" },
];

function todoReducer(state, action) {
  switch (action.type) {
    case "ADD-TODO":
      return [...state, { id: action.payload.id, todo: action.payload.todo }];
    case "EDIT-TODO":
        return state.map((item)=>
            item.id===action.payload.id ?{...item,todo:action.payload.todo}:item
        );
    case "DELETE-TODO":
        return state.filter((item)=> item.id !== action.payload.id);

    default:
      return state;
  }
}
function Todo() {
  const [state, dispatch] = useReducer(todoReducer, JSON.parse(localStorage.getItem("todos")) || Todos);
  const [id, setId] = useState("");
  const [todo, setTodo] = useState("");
  const [isEdit,setIsEdit]=useState(false);

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(state));
  },[state])

  const handleAddTodo = () => {
    if ( todo.trim() !== "") {
        if(isEdit){
            dispatch({
                type:"EDIT-TODO",
                payload:{id,todo}
            })
            setIsEdit(false)
        }else{
      dispatch({
        type: "ADD-TODO",
        payload: { id, todo },
      });
    }
      setId("");
      setTodo("");
      
    }
  };

  const handleEditTodo=(item)=>{
    setId(item.id);
    setTodo(item.todo);
    setIsEdit(true);
  }

  const handleDeleteTodo=(id)=>{
    dispatch({
        type:"DELETE-TODO",
        payload:{id}
    })

  }
  return (
    <div className="text-center d-flex flex-column align-items-center justify-content-center ">
      <h1 className="heading">todo-list</h1>
      <input
        type="number"
        placeholder="id"
        value={id}
        name="id"
        onChange={(e) => setId(Number(e.target.value))}
        className="form-control w-50 border rounded  p-10  my-3"
      />
      <input
        type="text"
        placeholder="task"
        value={todo}
        name="todo"
        onChange={(e) => setTodo(e.target.value)}
         className="form-control w-50 border rounded p-10"
      />

      <button onClick={handleAddTodo} className="btn btn-secondary w-30 bg-primary">addTodo</button>

      <table
        border="3"
        cellPadding="16"
        style={{ marginTop: "20px" }}
        className="table w-50 "
      >
        <thead>
          
            <th>Id</th>
            <th>Task</th>
            <th>Action</th>
          
        </thead>
        <tbody>
          {state.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.todo}</td>
              <td>
                <button onClick={()=>handleEditTodo(item)}  className="btn btn-primary border">Edit</button>
                <button onClick={()=>handleDeleteTodo(item.id)} className="btn btn-primary border">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
}

export default Todo;

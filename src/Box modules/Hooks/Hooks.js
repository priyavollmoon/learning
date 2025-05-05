import React, { useContext, useState } from 'react';
import { myContext } from './Mycontext';

function Hooks() {
  const { name, setName } = useContext(myContext);
  const [input, setInput] = useState("");

  const handleSave = () => {
    setName(input);     
    setInput("");      
  };

  return (
    <div>
      <h2>Hello, {name}</h2>
      <h3>Input value: {input}</h3>

      <input
        type='text'
        value={input}                       
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={handleSave}>Save</button>
    </div>
  );
}

export default Hooks;

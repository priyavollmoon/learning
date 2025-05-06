import React, { useContext, useState } from 'react';
import { AuthorizeContext, myContext, ThemeContext } from './Mycontext';

function Hooks() {
  const { name, setName } = useContext(myContext);
  const [input, setInput] = useState("");
  const {theme,toggleTheme}=useContext(ThemeContext);
  const {isLoggedIn,login,LogOut}=useContext(AuthorizeContext);

  

  const handleSave = () => {
    setName(input);     
    setInput("");      
  };

  return (
    <div>
      <header style={{
        backgroundColor: theme === 'light' ? '#eeeeee' : '#333',
        color: theme === 'light' ? '#000' : '#fff',
        padding: '10px'
      }}>
        <h1>current theme {theme}</h1>
        <button onClick={toggleTheme}>toggleButton</button>
        <button onClick={isLoggedIn? LogOut:login}>{isLoggedIn?'LogOut':'login'}</button>

      </header>
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

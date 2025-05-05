import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import Timer from './App';
import { BrowserRouter } from 'react-router-dom';
import Todo from './Box modules/Hooks/Todo';
import Hooks from './Box modules/Hooks/Hooks';
import Provider from './Box modules/Hooks/Providers';
import Providers from './Box modules/Hooks/Providers';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

   <StrictMode>
      
      <Todo/>
      {/* <Providers/> */}
    
   </StrictMode>
   

   
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


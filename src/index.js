import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import Timer from './App';
import { BrowserRouter } from 'react-router-dom';
import QuizApp from './Box modules/Hooks/QuizApp';
import UseReducer from './Box modules/Hooks/UseReducer';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

   <StrictMode>
      
      <UseReducer/>
      
    
   </StrictMode>
   

   
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


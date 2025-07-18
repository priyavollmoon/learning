import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./ReduxAxios/App/store";
import { BrowserRouter } from "react-router-dom";
import Hooks from "./Box modules/Hooks/Hooks";
import Providers from "./Box modules/Hooks/Providers";
import ThemeProvider from "./Box modules/Hooks/ThemeProvider";
import AuthorizeProvider from "./Box modules/Hooks/AuthorizeProvider";
import Authenticate from "./Practice session 1/Authenticate";
import Routing from "./Routing";
import Login from "./SmartSchool/Login";
import MainRoute from "./SmartSchool/MainRoute";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


ReactDOM.createRoot(document.getElementById("root")).render(
  // <Provider store={store}>
  //  <BrowserRouter>
  //  <App />
  //  </BrowserRouter>
  // </Provider>
  <React.StrictMode>
    <BrowserRouter>
      <App/>
       <ToastContainer position="top-right" autoClose={3000} />
    </BrowserRouter>
  </React.StrictMode>
  // <StrictMode>
  //  <Provider store={store}>
  //   <App/>
  //  </Provider>
  //  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

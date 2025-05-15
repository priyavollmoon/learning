import React from 'react';
import ProductList from './Components/productList';
import Cart from './Components/Cart';
import {Link, NavLink, Route, Routes} from "react-router-dom";
import { Flex, Layout } from 'antd';
import Login from './SmartSchool/Login';
import ProtectedRouter from './SmartSchool/ProtectedRouter';
import Dashboard from './SmartSchool/Dashboard';
import DefaultRoute from './SmartSchool/DefaultRoute';
import ReduxApp from './ReduxAxios/ReduxApp';
const { Header, Footer, Sider, Content } = Layout;



function App() {

  return (

    // <Routes>
    //   <Route path="/" element={<DefaultRoute />} />
      
    //   <Route path='/login' element={<Login/>}/>
  
    //   <Route path='/dashboard' element={<ProtectedRouter element={<Dashboard/>}/>}/>
  
    // </Routes>
    <ReduxApp/>
    
    
    
      
  );
}


export default App;

















// <Router>
    //   <Routes>
    //   <Route path="/" element={<TimerWrapper />} />
    //   <Route path="/usercontext" element={<UserContextWrapper />} />
    //   </Routes>
    // </Router>
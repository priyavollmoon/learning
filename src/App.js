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
import SideNav from './Form folder/SideNav';
import Navbar from './Form folder/Navbar';
import Routing from './Routing';
import ApiRoute from './Pages/ApiRoute';
import SynchroCom from './Demo/SynchroCom';
import AsynchroCom from './Demo/AsynchroCom';
const { Header, Footer, Sider, Content } = Layout;



function App() {

  return (
      <Routes>
        <Route path='/' element={<SynchroCom/>}/>
        <Route path='/asynchroCom' element={<AsynchroCom/>}/>

      </Routes>
    
      
  );
}


export default App;




// <Routes>
    //   <Route path="/" element={<DefaultRoute />} />
      
    //   <Route path='/login' element={<ProtectedRouter element={<Login/>}/>}/>
  
    //   <Route path='/dashboard' element={<ProtectedRouter element={<Dashboard/>}/>}/>
  
    // </Routes>
    // <ReduxApp/>
    // <Navbar/>
    // <Routing/>
    // <ApiRoute/>
{/* <Callback/> */}
  












// <Router>
    //   <Routes>
    //   <Route path="/" element={<TimerWrapper />} />
    //   <Route path="/usercontext" element={<UserContextWrapper />} />
    //   </Routes>
    // </Router>
import React from 'react';
import ProductList from './Components/productList';
import Cart from './Components/Cart';
import {Link, NavLink, Route, Routes} from "react-router-dom";
import { Flex, Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;


function App() {
   const headerStyle = {
  
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    gap: '30px',
    height: '64px',
    position: 'sticky',  
    top: 0,               
    zIndex: 1000, 
     boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)'
    
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '18px',
    justifyContent:'spacebetween',
  };

  const siderStyle = {
    paddingTop: '20px',
    backgroundColor: '#001529',
    color: 'white',
    textAlign: 'center',
  
    


  };

  const layoutStyle = {
    minHeight: '100vh',
  };

  return (
    
      <Layout style={layoutStyle}>
      <Sider  style={siderStyle}>
        Sider
      </Sider>
      <Layout>
        <Header style={headerStyle}>
        <nav>
         <NavLink to="/" style={{linkStyle}} className="ms-5"> ProductList</NavLink>
            <NavLink to="/Cart" style={{linkStyle}} className="ms-5">Cart </NavLink> 
        </nav>
                
        </Header>
        <Content style={{padding:'20px', margin:'20px'}}>
          <Routes>
            <Route path="/" element={<ProductList/>} />
            <Route path="/Cart" element={<Cart/>}/>
          </Routes>
         
          
          </Content>
      </Layout>
    </Layout>
      
  );
}


export default App;

















// <Router>
    //   <Routes>
    //   <Route path="/" element={<TimerWrapper />} />
    //   <Route path="/usercontext" element={<UserContextWrapper />} />
    //   </Routes>
    // </Router>
import React from 'react';
import {Button, Col, Flex, Layout, Row, Space}  from 'antd';
import {  Menu } from 'antd';
import { Link}from 'react-router-dom';
import {BrowserRouter as Router ,Route,Routes}from 'react-router-dom';
import Home from './Home';
import Products from './Products';
import Cart from './Cart';


function WelcomePage() {
  const { Header, Sider, Content, Footer } = Layout;
  return (
    
        <Layout style={{ minHeight: '100vh' }}>     
          <Sider collapsible>
            <Menu theme="dark" mode="inline" >
              <Menu.Item key="1"  >
                <Link  to="/Home">Home</Link>
              </Menu.Item>
              <Menu.Item key="2">
               <Link  to="/EmployeesDetails">EmployeesDetails</Link> 
              </Menu.Item>
              <Menu.Item key="3">
               <Link to="/EmployeesIncrement">EmployeesIncrement</Link> 
              </Menu.Item>
            </Menu>
          </Sider>
    
          <Layout>
            <Header style={{ backgroundColor: '#fff' }}>
              <h1>Header Content</h1>
            </Header>
    
          
            <Content style={{ margin: '24px 16px', padding: '24px', background: '#fff' }}>
            <Routes>
            <Route path="/"  element={<WelcomePage/>}/>
            <Route path="/Home" element={<Home />} />
            <Route path="/Products" element={<Products/>} />
            <Route path="/Cart" element={<Cart />} />  
            </Routes>           
            
          </Content>
            <Footer style={{ textAlign: 'center' }}>
              contact us:rasikapriyabsc@gmail.com
            </Footer>
          </Layout>
        </Layout>
        
        

  )
}

export default WelcomePage
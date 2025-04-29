import { Button, Col, List, Row, Typography } from "antd";
import React, { Component } from "react";

class UserContext extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
    
      
    };
  }

  increment = () => {
    this.setState({ time: this.state.time + 1 });
  };

  render() {

const {user}=this.props;
console.log("user",user);
const {name}=this.props;
console.log("name",name);


  
    // if (!Array.isArray(user) || user.length === 0) {
    //   return <div>No users to display</div>;  
    // }

    return (
      <div>
        <Row>
          <Col span={24} className="text-center">
            <h1>Lifecycle: {this.state.time}</h1>
            <h1>Props - Name: {this.props.name}</h1>  
            <h2>Props - Age: {this.props.age}</h2>  
            <Button onClick={this.increment} type="link">
              Time Increment
            </Button>
          </Col>
        </Row>

        <Row>
          <Col span={24}>
        
            <List
              bordered
              dataSource={user} 
              renderItem={(item) => (
    <List.Item key={item.id}><Typography.Text mark>{item.name}</Typography.Text> {item.email}</List.Item>
              )}
            />
          </Col>
        </Row>
      </div>
    );
  }
}

export default UserContext;

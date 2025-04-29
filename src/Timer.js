import { Component } from "react";
import UserContext from "./UserContext";
import { Link, NavLink } from "react-router-dom";
import { Col, Flex, Grid, Layout, List, Row, Space, Spin, Typography } from "antd";
import "bootstrap/dist/css/bootstrap.min.css";
class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user:[],
      loading:true,
      time: 0,
    };
  }

  componentDidMount() {
    console.log("enter ");
    this.Timer = setInterval(() => {
      this.setState((prevState) => ({ time: prevState.time + 1 }));
    }, 1000);

    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res)=>res.json())
    .then((data)=>{
      this.setState({user:data})
      console.log("data",data);
    })
    .catch((error)=>console.log("error  fetchingusers",error))
    this.setState({loading:false})
  }
 
  componentWillUnmount() {
    console.log("componentWillUnmount");
    clearInterval(this.Timer);
  }

  render() {
    const name="rasika";

    const {user,loading}=this.state;
    return (
      <div>
        <Row className="bg-dark text-white text-center border rounded">
          <Col span={24}>
            <h1>Class Component</h1>
          </Col>
        </Row>

        <Row style={{ textAlign: "center" }}>
          <Col span={24}>
            <h2>Time update: {this.state.time}</h2>

            <UserContext name={name} age={25}  user={user}/>

            <nav style={{ marginTop: "20px" }}>
              <NavLink
                to="/usercontext"
                style={{
                  textDecoration: "none",
                  fontSize: "18px",
                }}
              >
                Go to UserContext
              </NavLink>
            </nav>
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
export default Timer;

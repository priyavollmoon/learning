import { Button, Col, Input, List, Row } from "antd";
import "bootstrap/dist/css/bootstrap.min.css";
import { Component } from "react";
import "./Timer.css";

// //conditional rendaring  style

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
      time: 0,
      isActive: true,
      password: "",
      passwordList: [],
    };
  }

  componentDidMount() {
    console.log("enter ");
    // this.Timer = setInterval(() => {
    //   this.setState((prevState) => ({ time: prevState.time + 1 }));
    // }, 1000);

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ user: data });
        console.log("data", data);
      })
      .catch((error) => console.log("error  fetchingusers", error));
    
  }
  goToUserContext = () => {
    this.props.navigate("/usercontext", {
      state: {
        name: "Rasika",
        age: 25,
        user: this.state.user,
      },
    });
  };

  componentWillUnmount() {
    console.log("componentWillUnmount");
    clearInterval(this.Timer);
  }
  handleInputChange = (e) => {
    this.setState({ password: e.target.value });
  };

  handleButtonClick = () => {
    console.log("Password Stored in state:", this.state.password);
      localStorage.setItem("password",this.state.password);
    this.setState((prevState) => ({
      passwordList: [...prevState.passwordList, prevState.password],
      password: "",
    
    }));
  };

  const 
  render() {
    const buttonStyle = {
      backgroundColor: this.state.isActive ? "green" : "gray",
      color: "white",
      padding: "10px",
      borderRadius: "8px",
    };

    const { passwordList } = this.state;

    // react fragment
    return (
      <>
        <Row className="bg-dark text-white text-center border rounded">
          <Col span={24}>
            <h1>Class Component</h1>
          </Col>
        </Row>

        <Row style={{ textAlign: "center" }}>
          <Col span={24}>
            <h2>Time update: {this.state.time}</h2>
            <h3>state:{this.state.password}</h3>
            <Button style={buttonStyle} onClick={this.goToUserContext}>
              Go to UserContext123
            </Button>
            <Input
              type="password"
              value={this.state.password}
              onChange={this.handleInputChange}
              placeholder="Enter your password"
            />

            <Button
              type="primary"
              onClick={this.handleButtonClick}
              style={{ marginTop: "10px" }}
            >
              Submit
            </Button>
            <List
              bordered
              dataSource={passwordList}
              renderItem={(item) => <List.Item>{item}</List.Item>}
            />
          </Col>
        </Row>
      </>
    );
  }
}
export default Timer;

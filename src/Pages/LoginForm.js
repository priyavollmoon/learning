import { useNavigate } from "react-router-dom";
import  { useState } from "react";
import { Button, Form, Input } from "antd";


function LoginForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [token, setToken] = useState(null);



  const handleSubmit = (value) => {
    console.log("in");
    const  data={email,password};
    console.log("data",data);
    if(data !== ''){
      navigate("/Home")
    }

    
  };

  // 1.block scope
 
  {
    let age=25;
    const uname='riya';
    var tokensss=123;

     console.log("name",uname);
      console.log("age",age);
      console.log("token",tokensss);
  
  }
  
      console.log("token",tokensss);


//2.arrow function
  
  const handleClick=(girl)=>{
    console.log("arrow function:",girl)
  }


  //3.Template literals

  const third=(string)=>{
     const literals='template';
     console.log(`template literals assign  the ${literals} ${string}`)
  }
  console.log(`${third("design")},works well`)

  //4.default parameter

  const  fourth=(string="jane",expression="looks good")=>{
    console.log(`hi ${string},${expression}`)
  }
  fourth('mahi','looks verygood');//it can  be any js expression or function can be  a parameter.

  //Destructuring assignment
  const obj={name:'alex',age:'24'};;
  console.log("destructure",obj.age);

  //rest and spread opeartor
  //rest
  
  const [num1,...rest]=[1,2,4,5];
  console.log("rest",rest);

  const five=(a,b,c)=>{
    return a+b+c;
  }
  const numbers=[1,2,3];
  console.log("rest==",five(...numbers));

  //spread

  const arr1=[3,4,5,6];
  const arr2=[7,8,9];
  const arr=[...arr1,...arr2];
  console.log("spread",arr);
  console.log("concat", arr1.concat(arr2));

  //classes
  //split your code separate file

  //enhanced object literals
  
// variable declaration
var name = "Tike";
var color = "Black";
var age = 7;

var bark = function(){
    console.log("Woof Woof!!");
}
var anotherDog = {name, color, age, bark};
anotherDog.bark(); 
console.log("object",`hi i  am ${name},${age}year old color ${color},`)


//generators

  return (
    <>
    <button onClick={()=>handleClick('riya')}>click</button>
    <Form onFinish={handleSubmit}>
      <Form.Item
        label="Email"
        rules={[{ required: true, message: "Please input Email" }]}
      >
        <Input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
      </Form.Item>
      <Form.Item
        label="Password"
        rules={[{ required: true, message: "Please enter Password" }]}
      >
        <Input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Login
        </Button>
      </Form.Item>
    </Form>
    </>
  );
}

export default LoginForm;














// axios
//       .post("https://demoapi.orienseam.com/api/users/signin", {
//         email,
//         password,
//       })
//       .then((response) => {
//         const token = response.data.result.accessToken;
//         console.log("response1111", token);
//         setToken(token);
//         localStorage.setItem('token',token);

//         if (token) {
//           navigate("/UserPage");
//         }
//       })
//       .catch((error) => {
//         setError(error);
//         console.error(error);
//       // });
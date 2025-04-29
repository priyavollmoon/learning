 //js  basics
  //variable
  var name = "karthick";
  var name = "vino"; //re-declared,re-assined
  let age = 25; //re-assigned
  age = 26;
  const DOB = 1999; // couldn't  re-assigned,re-declared

  //conditional statements
  function checkOddEven(num) {
    if (num % 2 === 0) {
      console.log("even");
    } else {
      console.log("odd");
    }
  }
  checkOddEven(4);

  // Array methods
  //indexof,shift
  const namess = ["manoj", "renu", "karthick,manju"];
  const value = namess.indexOf("manoj");
  console.log("indexof", value);
  const shift = namess.shift();
  console.log("shift", shift);
  const unshift = namess.unshift("karthick");
  console.log("unshift", name);
  namess.forEach((name, index) => {
    console.log(`index:${index},name:${name}`);
  });

  //concat
  const fruits = ["banana", "kiwi"];
  const veg = ["beans", "carrot"];
  const results = fruits.concat(veg);
  console.log("concat", results);

  //map()
  const car = ["skoda", "maruthi"];
  const cars = car.map((car) => car);
  console.log("map", cars);

  //filter()
  const number = [1, 2, 3, 4, 5, 6];
  const filters = number.filter((num) => num % 2 === 0);
  console.log("filter", filters);

  //String methods
  //charAt,toUppercase,toLowercase,includes
  const username = ("vino", "kavi");
  const names = "rasika";
  const strings = username.charAt(3);
  console.log("charAt", strings);
  const toUppercase = username.toUpperCase();
  console.log("touppercase", toUppercase);
  const Lowercase = username.toLowerCase();
  console.log("tolowercase", Lowercase);
  const concat = names.concat(username);
  console.log(" string concat", concat);
  const includes = username.includes("kavi");
  console.log("includes", includes);

  //Arrow functions

  const a1 = (a, b, c) => {
    return a + b + c;
  };
  console.log(a1(1, 2, 3));

  //ternary operator
  const active = true;
  active ? console.log("active") : console.log("inactive");

  //spread operator

  const a = [1, 2, 3];
  const b = [4, 5, 6];
  const ab = [...a, ...b];
  console.log("ab", ab);

  //rest operator

  const c = (first, ...rest) => {
    return { first, rest };
  };
  console.log("numbers", c(1, 2, 3));

//   /check even or odd number
// const [number, setNumber] = useState(0);
// const [evenNumber, setEvenNumber] = useState("");

// const handleChange = (e) => {
//   setNumber((e.target.value));
// };
// const handleCheck = () => {
//   const value = number;
//   if (value % 2 === 0) {
//     setEvenNumber(value);
//   } else {
//     alert("its an odd number");
//   }
//   setNumber("");
// };
// <input type="number" value={number} onChange={handleChange} />
// <button onClick={handleCheck}>Check</button>
// <strong>{evenNumber}</strong>

//form
// const [data,setData]=useState({
//   username:"",
//   password:"",
// })

// const handleChange=(e)=>{
// const{name,value}=e.target;
// setData((preData)=>({...preData,[name]:value}))
// }
// const  handleSubmit=(e)=>{
//   e.preventDefault();
//   setData({username:"",password:""})
//  }

// <form onSubmit={handleSubmit}>
// <input type="string" value={data.username} name="username" onChange={handleChange} placeholder="username"/>
// <input type="password" value={data.password} name="password" onChange={handleChange} placeholder="password"/>
// <button>Submit</button>

  /* </form> */

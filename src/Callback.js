import React from "react";


const Callback = () => {
  //callback functions

//   const products = [
//     { name: "laptop", price: 500 },
//     { name: "mobile", price: 300 },
//     { name: "toy", price: 99 },
//   ];
//   function costly(products) {
//     return products.price > 100;
//   }

//   function medium(products) {
//     return products.price < 100;
//   }

//   function productFilter(products, callback) {
//     return products.filter(callback);
//   }

//   console.log("result", productFilter(products, costly));
//   console.log("m result", productFilter(products, medium));

  //fetch promise

  console.log("before  data fetch");

  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => {
      if (!res.ok) {
        throw new Error("Netork res is not  ok");
      }
      return res.json();
    })
    .then((data) => {
      console.log("fetchdata", data);
    })
    .catch((error) => {
      console.log("error  fetch", error);
    });

  console.log("afterfetch data");

  //async/await

  const fetchData = async function () {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      console.log("data", data);
    } catch (error) {
      console.log("error", error);
    }
  };
  fetchData();
  // ------------------------------------------------------------------------------

  //synchronous
  function testTwo() {
    console.log("sync 1");
    function inside(a, b) {
      const value = a + b;
      console.log("c", value);
      return value;
    }
    inside(3, 4);

    console.log("sync 3");
  }
  testTwo();
//   // ---------------------------------------------------------------------------------
  //asynhronous
  function test() {
    console.log("callback 1");

    setTimeout(() => {
      const mile = { one: "2km", two: "5km" };
      console.log("callback after 2  second", testOne(2, 3));
    }, 2000);
    console.log("callback 2");
    function testOne(b, c) {
      console.log("callback inside timeout");
      return b + c;
    }
  }
  test();


  return (
    <div>
        <ul className="list">
            <li >html</li>
            <li >css</li>
            <li >js</li>
            <li >react</li>
            <li >ant</li>

        </ul>
    </div>
  )
};

export default Callback;

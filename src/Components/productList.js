import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../Features/CartSlice";
import "bootstrap/dist/css/bootstrap.min.css";



function ProductList() {
    const [products,setProducts]=useState([]); 
    const dispatch = useDispatch();

     useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then((res)=>res.json())
        .then(data=> setProducts(data));
     },[])

  return (
    <div>
      <h2>Products</h2>
      {products.map((product) => (
        <div key={product.id}className="card shadow mt-3  border hover-card w-50 " >
          <img src={product.image} alt={product.title} width="100"  />
          <h4 >{product.title}</h4>
          <p >₹{product.price}</p>
          <button className="btn rounded btn-secondary w-50" onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;

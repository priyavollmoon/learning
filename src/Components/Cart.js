import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeCart,
  increase,
  decrease
  
} from "../Features/CartSlice";

function Cart() {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} >
            <img src={item.image} alt={item.title} width="100" />
            <h4 >{item.title}</h4>
            <p >Price: ₹{item.price}</p>
            <p >Quantity: {item.quantity}</p>
            <button  onClick={() => dispatch(removeCart(item.id))}>
              Remove
            </button>
            <button  onClick={() => dispatch(decrease(item.id))}>-</button>
            <button  onClick={() => dispatch(increase(item.id))}>+</button>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;

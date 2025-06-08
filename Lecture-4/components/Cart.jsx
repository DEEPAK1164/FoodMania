import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ItemList from './ItemList';
import { clearCart } from '../Slices/cartSlice';

const Cart = () => {
const cartItems=useSelector((store)=>store.cart.items);
console.log(cartItems);
const dispatch=useDispatch();
const handleClearCart=()=>{
    dispatch(clearCart())
}

  return (
    <div>
      <h1>Cart Page</h1>
      <div>
      <button onClick={handleClearCart}>
        Clear Cart
      </button>
        <ItemList items={cartItems}/>
      </div>
    </div>
  )
}

export default Cart;

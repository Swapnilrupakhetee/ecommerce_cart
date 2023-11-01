import React, { useContext } from 'react';
import { PRODUCTS } from '../../Products';
import { ShopContext } from '../../context/Shop_context';
import  {CartItem}  from './CartItem';
import '../cart/cart.css'
function Cart() {
  const{cartItems,getTotalCartAmount}=useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  return (
    <div className='cart'>
    <div><h1>Cart Items</h1></div>
    <div className='cartItems'>
      {PRODUCTS.map((product) =>{
        if(cartItems[product.id] !==0){
            return <CartItem data={product}/>
        }
      })}
    </div>
    <div className='checkout'>
      <p>Subtotal: ${totalAmount}</p>
      <button>Continue Shpopping</button>
      <button>Checkout</button>
    </div>
    </div>
  )
}

export default Cart;
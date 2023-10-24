import React, { createContext } from 'react';
import { PRODUCTS } from '../Products';
export const ShopContext=createContext(null)

const getDefaultCart = () =>{
  let cart={}
  for (let i=0; i < PRODUCTS.length+1;i++)
  {
    cart[i]=0;
  }
  return cart;
}

function Shop_context(props) {
  const[cartItems,setCartItems] = useState();

  const addToCart=(itemId) =>{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId] + 1}))


  }
  const removeFromCart=(itemId) =>{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId] - 1}))
  };
  const contextValue={cartItems,addToCart,removeFromCart}
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}

    </ShopContext.Provider>
    
  )
}

export default Shop-context;
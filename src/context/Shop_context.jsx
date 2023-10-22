import React, { createContext } from 'react'
import { PRODUCTS } from '../Products'
export const ShopContext=createContext(null)

const getDefaultCart = () =>{
  let cart={}
  for (let i=0; i < PRODUCTS.length;i++)
  {
    cart[i]=0;
  }
  return cart
}

function Shop_context(props) {
  const[cartItems,setCartItems] = useState();
  return (
    <ShopContext.Provider>
      {props.children}

    </ShopContext.Provider>
    
  )
}

export default Shop-context
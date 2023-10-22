import React, { createContext } from 'react'
export const ShopContext=createContext(null)

function Shop_context(props) {
  return (
    <ShopContext.Provider>
      {props.children}

    </ShopContext.Provider>
    
  )
}

export default Shop-context
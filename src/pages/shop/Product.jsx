import React, { useContext } from 'react'
import { ShopContext } from '../../context/Shop_context';

function Product(props) {
  const id = props.data.id;
  const productName = props.data.productName;
  const price = props.data.price;
  const productImage = props.data.productImage;

  const {addToCart,cartItems}=useContext(ShopContext);
  const cartItemAmount=cartItems[id];

  return (
    <div className='product'>
      <img src={productImage}/>
      <div className='description'>
        <b><p>{productName}</p></b>
        <p>$ {price}</p>
        </div>
        <button className='addToCartBttn' onClick={()=>addToCart(id)}>Add to Cart {cartItemAmount>0 && <>({cartItemAmount})</>}</button>
        
    </div>
  )
}

export default Product
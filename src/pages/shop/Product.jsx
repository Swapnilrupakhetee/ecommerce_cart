import React from 'react'

function Product(props) {
  const id = props.data.id;
  const productName = props.data.productName;
  const price = props.data.price;
  const productImage = props.data.productImage;

  return (
    <div className='product'>
      <img src={productImage}/>
      <div className='description'>
        <b><p>{productName}</p></b>
        <p>$ {price}</p>
        </div>
    </div>
  )
}

export default Product
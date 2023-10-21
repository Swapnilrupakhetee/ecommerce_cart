import React from 'react'

function Product(props) {
  const id = props.data.id;
  const productName = props.data.productName;
  const price = props.data.price;
  const productImage = props.data.productImage;

  return (
    <div>{productName} </div>
  )
}

export default Product
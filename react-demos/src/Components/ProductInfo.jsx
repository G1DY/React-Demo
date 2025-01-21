import React from 'react'

const ProductInfo = () => {
    const product = {
        name: "Laptop",
        price: 1200,
        availability: "In Stock",
    };
  return (
    <div>
      <p>The product is a {product.name}, worth ${product.price} and is {product.availability} </p>
    </div>
  )
}

export default ProductInfo

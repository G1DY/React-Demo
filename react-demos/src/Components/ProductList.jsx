import React from 'react'

const ProductList = () => {
    const products = [
        {id: 1, name: "Phone", price: "$699"},
        {id: 1, name: "Laptop", price: "$1200"},
        {id: 1, name: "Headphones", price: "$199"},
    ];
  return (
    <div>
        {products.map((p)=> (
            <div key={p.id}>
                <h1>ProductName: {p.name}</h1>
                <h1>ProductPrice: {p.price}</h1>
            </div>
        ))}   
    </div>
  );
};

export default ProductList

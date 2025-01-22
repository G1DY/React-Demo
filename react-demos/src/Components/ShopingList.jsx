import React, { useState } from 'react'

const ShopingList = () => {
    const [items, setItems] = useState([]);
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !quantity) return; 
        const newItem = {
            name,
            quantity: parseInt(quantity),
        };
        setItems((prevItem) => [...prevItem, newItem]);
        setName('');
        setQuantity('');
    };
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" name='name' placeholder='Add item name' onChange={(e) => setName(e.target.value)} value={name} />
            <input type="number" name='quantity' placeholder='Add item quantity' onChange={(e) => setQuantity(e.target.value)} value={quantity} />
            <button type='submit'>Add Item</button>
        </form>

    <ul>
        {items.map((item, index) => (
            <li key={index}>{item.name} Quantity: {item.quantity}</li>
        ))}
    </ul>
    </div>
  )
}

export default ShopingList
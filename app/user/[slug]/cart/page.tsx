'use client'
import React from "react";

interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
}

const CartPage: React.FC = () => {
    const [cartItems, setCartItems] = React.useState<CartItem[]>([]);

    const handleRemoveItem = (id: number) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    const handleQuantityChange = (id: number, quantity: number) => {
        setCartItems(cartItems.map(item => 
            item.id === id ? { ...item, quantity } : item
        ));
    };

    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        <div>
            <h1>Shopping Cart</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <ul>
                    {cartItems.map(item => (
                        <li key={item.id}>
                            <span>{item.name}</span>
                            <span>{item.price}</span>
                            <input 
                                type="number" 
                                value={item.quantity} 
                                onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                            />
                            <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
                        </li>
                    ))}
                </ul>
            )}
            <div>
                <h2>Total: ${getTotalPrice().toFixed(2)}</h2>
            </div>
        </div>
    );
};

export default CartPage;
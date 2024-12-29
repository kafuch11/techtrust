'use client'
import Link from "next/link";
import  CartCard  from "../../../ui/components/CartCard";
import React from "react";
import { CartHead } from "../../../ui/components/CartCard";

interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
}





const CartPage: React.FC = () => {
    const [cartItems, setCartItems] = React.useState<CartItem[]>([]);
    

    // const handleRemoveItem = (id: number) => {
    //     setCartItems(cartItems.filter(item => item.id !== id));
    // };

    // const handleQuantityChange = (id: number, quantity: number) => {
    //     setCartItems(cartItems.map(item => 
    //         item.id === id ? { ...item, quantity } : item
    //     ));
    // };

    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        <section className="w-full p-10">
            {cartItems.length === 0 && (<>
                <h1 className="text-3xl font-bold">Your Cart</h1>
                <div className="min-h-40 w-full h-max flex flex-col justify-evenly gap-1 my-5 p-5 items-center rounded-lg bg-black_grad_m">
<CartHead />

<CartCard />
<CartCard />
<CartCard />
<CartCard />
                </div>
                </>)}
            <div className="flex justify-center items-center flex-col gap-4">
                {cartItems.length === 0 ? (<>
                    <h1 className="text-2xl font-bold">Your cart is empty</h1>
                    <Link href={'/products'}><button onClick={()=> setCartItems([])} className="btn">Shop Now</button></Link>
                
                </>) : (<>
                
                    <h1>Pending Ammount: {getTotalPrice()}</h1>
                    <Link href={'/checkout'}><button className="btn">Proceed to Checkout</button></Link>
                </>)}
            </div>
        </section>
    );
};

export default CartPage;
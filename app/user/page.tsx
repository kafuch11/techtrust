'use client'
import Link from "next/link";
import CartCard from "../ui/components/CartCard";
import React from "react";
import { CartHead } from "../ui/components/CartCard";
import {  useCart } from "@/components/providers/CartProvider";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import { Product } from "../products/page";







const CartPage: React.FC = () => {
    const cartItems = useCart()
    const { isSignedIn, isLoaded, user } = useUser()
    

    const handleRemoveItem = (product: Product,qty:number) => {
        cartItems.removeFromCart(product,qty)
    };

    // const handleQuantityChange = (id: number, quantity: number) => {
    //     setCartItems(cartItems.map(item => 
    //         item.id === id ? { ...item, quantity } : item
    //     ));
    // };

    const getTotalPrice = () => {
        return cartItems.items.reduce((total, item) => total + item.product.price * item.count, 0);
    };

    return (
        <section className="w-full p-10">
            {isLoaded ? <>
            
            <div className="min-h-72 hidden md:grid grid-cols-[1fr_2fr] py-8 mb-10 ">
                <div className="h-full w-full aspect-square flex items-center justify-center">
                    <Image src={user?.imageUrl as string} height={200} width={200} alt={'avatar'} className="rounded-full h-full w-auto" />
                </div>
                <div className="w-full h-full flex flex-col items-start justify-center gap-2 pl-8 ">
                    <div className="text-3xl font-semibold">{user?.fullName}</div>
                    <div className="text-border_gray">{user?.emailAddresses.map(item => item.emailAddress)}</div>
                </div>
            </div>


                {cartItems.items.length !== 0 && (isSignedIn ? (<>
                    <h1 className="text-3xl font-bold">Your Cart</h1>
                    <div className="min-h-40 w-full h-max flex flex-col justify-evenly gap-1 my-5 p-5 items-center rounded-lg bg-black_grad_m">
                        <CartHead />
                        {
                            cartItems.items.map((item) => <div key={item.product.id} className="w-full"><CartCard product={item.product} count={item.count} handleRemove={()=>handleRemoveItem(item.product,item.count)} /></div>)
                        }

                    </div>
                </>) : (<>
                    <h1 className="text-3xl font-bold">Your Cart</h1>
                    <div className="min-h-40 w-full h-max flex flex-col justify-evenly gap-1 my-5 p-5 items-center rounded-lg bg-black_grad_m">
                        <CartHead />
                        {
                            cartItems.items.map((item) => <div key={item.product.id}><CartCard product={item.product} count={item.count} handleRemove={()=>handleRemoveItem(item.product,item.count)} /></div>)
                        }

                    </div>
                </>))}
                <div className="flex justify-center items-center flex-col my-16 gap-4">
                    {cartItems.items.length === 0 ? (<>
                        <h1 className="text-2xl font-bold">Your cart is empty</h1>
                        <Link href={'products'}><button className="btn">Shop Now</button></Link>

                    </>) : (<>

                        <h1>Pending Ammount: <span className="text-sale_green">${getTotalPrice()}</span></h1>
                        <Link href={'/checkout'}><button className="btn">Proceed to Checkout</button></Link>
                    </>)}
                </div></> : <>Loading...</>}
        </section>
    );
};

export default CartPage;
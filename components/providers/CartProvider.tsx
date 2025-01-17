'use client'

import { createContext, ReactNode, useContext, useState,useEffect } from "react";
import { Product } from "@/app/products/page";
import { useUser } from "@clerk/nextjs";
import {  setCart, updateCart, deleteCart, getCart } from "@/actions/add-to-cart";


export interface CartItem {
    product : Product;
    count:number;
}

interface CartContext {
    user:string;
    items : CartItem[];
    addToCart(product : Product,qty:number):void;
    removeFromCart(product : Product,qty:number):void;
}


const CartContext = createContext<CartContext>({user:'',items : [],addToCart () {},removeFromCart(){} })

const CartProvider = ({children}:{children: ReactNode}) => {
    
    const {isSignedIn, user} = useUser()
const [cartItems,setCartItems ] = useState<CartItem[]>([])
useEffect(() => {
 
    const fetchData = async ()=>{
        const initialdata  = await getCart(user?.fullName as string)
        setCartItems(initialdata.cartItem?initialdata.cartItem:[])
    }
    if(user){

        fetchData()
    }

}, [user])


    if(isSignedIn && user ){

        

    const addToCart =(product : Product,qty:number)=>{

            const oldCartItems = [...cartItems]
            const index = cartItems.findIndex(item =>(product.id === item.product.id))
            if(index === -1){
                oldCartItems.push({count:qty,product})
                setCart(user.fullName as string,oldCartItems)
            }else{
                oldCartItems[index].count += qty
                updateCart(user.fullName as string,oldCartItems)
            }
            setCartItems(oldCartItems)
        
    }
    const removeFromCart =(product : Product,qty:number)=>{
        
        const oldCartItems = [...cartItems]
        const index = cartItems.findIndex(item =>(product.id === item.product.id))
        if(index === -1){
            return
        }else{
            if(oldCartItems[index].count - qty == 0){

                oldCartItems.splice(index,1)
                deleteCart(user.fullName as string,index)
            }else{
                oldCartItems[index].count -= qty
                updateCart(user.fullName as string,oldCartItems)
            }

        }
        setCartItems(oldCartItems)
      

    }


  return (
    <CartContext.Provider value={{user:user.fullName as string,items: cartItems,addToCart,removeFromCart}}>{children}</CartContext.Provider>
  )
}else{


    

const addToCart =(product : Product,qty:number)=>{

        const oldCartItems = [...cartItems]
        const index = cartItems.findIndex(item =>(product.id === item.product.id))
        if(index === -1){
            oldCartItems.push({count:qty,product})
        }else{
            oldCartItems[index].count += qty
        }
        setCartItems(oldCartItems)
    
}
const removeFromCart =(product : Product,qty:number)=>{
    
    const oldCartItems = [...cartItems]
    const index = cartItems.findIndex(item =>(product.id === item.product.id))
    if(index === -1){
        return
    }else{
        if(oldCartItems[index].count - qty == 0){

            oldCartItems.splice(index)
        }else{
            oldCartItems[index].count -= qty
        }

    }
    setCartItems(oldCartItems)
  

}


return (
<CartContext.Provider value={{user:'user2233',items: cartItems,addToCart,removeFromCart}}>{children}</CartContext.Provider>
)
}
}

export default CartProvider;

export const useCart = ()=> useContext(CartContext)
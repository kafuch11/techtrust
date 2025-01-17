'use client'

import { useCart } from '@/components/providers/CartProvider'
import React from 'react'
import  { CartCardSm } from './CartCard'

const SideCart = () => {
    const {items,removeFromCart} = useCart()
  return (
    <div className='flex flex-col w-96 gap-1'>
      
      {items.map((item)=> (<div key={item.product.id}><CartCardSm product={item.product} count={item.count} handleRemove={()=>removeFromCart(item.product,item.count)} /></div>))}
      </div>
  )
}

export default SideCart

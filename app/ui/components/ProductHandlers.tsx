'use client'
import React from 'react'
import { Product } from '@/app/products/page'
import { useCart } from '@/components/providers/CartProvider'
import Link from 'next/link'

const ProductHandlers = ({item }:{item : Product}) => {
    const { addToCart} = useCart()
  return (
    <div className="flex my-4 px-2 justify-between items-center"><Link href={`/products/product/${item.id}`}><button className="btn">Buy Now</button></Link><button className="btn " onClick={()=> addToCart(item,1)}>Add to Cart</button></div>

  )
}

export default ProductHandlers;
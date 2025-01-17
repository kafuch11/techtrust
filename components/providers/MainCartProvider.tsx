
import React, { ReactNode } from 'react'
import {FC} from 'react'
import CartProvider from './CartProvider'

interface props {
    children : ReactNode
}

const MainCartProvider: FC<props> = ({children}) => {
  return (
    <CartProvider>{children}</CartProvider>
  )
}

export default MainCartProvider
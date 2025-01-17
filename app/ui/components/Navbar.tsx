'use client'

import { useState } from "react";
import Image from "next/image"
import Link from "next/link";
import {
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton,
    SignOutButton,
    SignUpButton
} from '@clerk/nextjs'
import SideCart from "./SideCart";
import {
    Sheet,
    SheetContent,
    
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"




const navigationObj = [
    {
        name: 'Home',
        href: '/'
    },
    {
        name: 'Products',
        href: '/products'
    },
    {
        name: 'Categories',
        href: '/categories'
    },
    {
        name: 'About',
        href: '/about'
    },
    {
        name: 'Contact Us',
        href: '/contact-us'
    },
]

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)

    return (
        <nav className={`z-50 nav h-[60px] relative`}>
            <div><Link href={'/'}>
                <Image src={'/logo/TechTrust.svg'} height={50} width={100} alt="logo" className="md:flex hidden" />
                <Image src={'/logo/logo.svg'} height={34} width={34} alt="logo" className="md:hidden flex" />
            </Link></div>
            <div className="nav-ul">
                {navigationObj.map(({ name, href }, index) => (
                    <Link key={index} href={href}><div className="nav-li md:flex hidden">{name}</div></Link>
                ))}
            </div>
            <div className="gap-3 items-center text-[14px] text-nowrap sm:text-16 md:flex hidden">

                <SignedOut>



                    <div className="btn "><SignUpButton /></div>
                    <div className="hover:underline transition-all cursor-pointer"><SignInButton /></div>

                </SignedOut>
                <SignedIn>
                    <SignOutButton >
                        <button className="btn">Sign Out</button>
                    </SignOutButton>
                    <UserButton />
                    <Sheet>
                        <SheetTrigger><Image src={'/icons/cart.svg'} alt="cart" height={40} width={40} /></SheetTrigger>
                        <SheetContent className="bg-black_grad_e px-0 border-none text-[#ffffff]">
                            <SheetHeader>
                                <SheetTitle className="text-[#ffffff] px-8 py-6 flex justify-between items-center"><div>Your Cart:</div><Link href={'/user'} className=" underline">show more</Link></SheetTitle>
                                    <SideCart />
                               
                            </SheetHeader>

                        </SheetContent>
                    </Sheet>
                </SignedIn>

            </div>
            <div onClick={() => setShowMenu(prev => !prev)} className="md:hidden flex cursor-pointer">
                {showMenu ?
                    <Image src={'/icons/cross.svg'} height={34} width={34} alt="menu" /> :
                    <Image src={'/icons/menu.svg'} height={34} width={34} alt="menu" />
                }
            </div>
            <div className={` ${showMenu ? 'flex' : 'hidden'} flex-col absolute top-full text-xl right-2 w-max px-10 py-8 rounded-xl h-max text-[#ffffff] bg-black_grad_m z-50 md:hidden`}>
                <div className="flex flex-col">
                    {navigationObj.map(({ name, href }, index) => (
                        <Link key={index} href={href} onClick={() => setShowMenu(false)}><div className="nav-li">{name}</div></Link>
                    ))}
                </div>
                <div className="flex  gap-3 items-center text-[14px] text-nowrap sm:text-16 mt-8" suppressHydrationWarning>
                    <SignedOut >



                        <div suppressHydrationWarning className="btn text-sm"><SignUpButton /></div>
                        <div className=" btn text-sm"><SignInButton /></div>

                    </SignedOut>
                    <SignedIn>
                        <SignOutButton >
                            <button className="btn text-sm">Sign Out</button>
                        </SignOutButton>
                        <UserButton />

                    </SignedIn>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
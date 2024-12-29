import Image from "next/image"
import Link from "next/link";


const navigationObj = [
    {
        name:'Home',
        href:'/'
    },
    {
        name:'Products',
        href:'/products'
    },
    {
        name:'Categories',
        href:'/categories'
    },
    {
        name:'About',
        href:'/about'
    },
    {
        name:'Contact Us',
        href:'/contact-us'
    },
]

const Navbar = () => {
    const signedIn = false;
  return (
    <nav   className={`z-50 nav h-[60px] relative`}>
        <div><Link href={'/'}>
            <Image  src={'/logo/TechTrust.svg'} height={50} width={100} alt="logo" className="md:flex hidden" />
            <Image src={'/logo/logo.svg'} height={34} width={34} alt="logo" className="md:hidden flex"/>
        </Link></div>
        <div className="nav-ul">
            {navigationObj.map(({name,href},index)=>(
                <Link  key={index} href={href}><div className="nav-li md:flex hidden">{name}</div></Link>
            ))}
        </div>
        <div className="gap-3 items-center text-[14px] text-nowrap sm:text-16 md:flex hidden">
            {signedIn?(
            <>
            </>
        ):(
            <>
            <Link href={'/sign-up'}><div className="btn ">Sign Up</div></Link>
            <Link href={'/sign-in'}><div className="hover:underline transition-all cursor-pointer">Login</div></Link>
        </>
    )
            }</div>
            <div className="md:hidden flex">
                <Image src={'/icons/menu.svg'} height={34} width={34} alt="menu"/>
            </div>
    </nav>
  )
}

export default Navbar
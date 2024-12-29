import Link from "next/link";

export default function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {  
    
    return (
        <section className="min-h-screen ">
        <nav className="h-16 pl-5 w-full flex gap-3 justify-start items-center">
            {[{text:'Dashboard',href:'/admin'},{text:'Products',href:'/admin/products'},{text:'Orders',href:'/admin/orders'},{text:'Customers',href:'/admin/customers'},{text:'Shippings',href:'/admin/shipings'}].map(({text,href},index) => (<div key={index} className=" ps-2"><Link href={href}>{text}</Link></div>))}
        </nav>{children}
        </section>

  )
}



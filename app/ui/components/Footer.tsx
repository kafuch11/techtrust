import Copier from "./Copier"
import { Share_Tech } from "next/font/google"
import Image from "next/image"

const shareTech = Share_Tech({
    weight : ['400'],
    subsets : ['latin']
    
  })

const Footer = () => {
    return (
        <>
        <section className={`${shareTech.className} border-t border-border_gray space-c min-h-80 p-4 w-full grid  grid-cols-2 md:grid-cols-[1fr_1fr_1fr_1fr] gap-4`}>
            <div className="flex flex-col items-start justify-start space-y-4 col-span-1 ">
                <h1 className={`${shareTech.className} md:text-5xl text-2xl w-full text-start`}><span className="text-logo_blue"> Tech</span><span className="text-logo_green">Trust</span></h1>
                <div className="flex gap-2">
                    <div className=" h-20 w-16 flex items-center justify-center cursor-pointer"><Image src={'/icons/mail.svg'} alt="icons" height={100} width={100}/></div>
                    <div className=" h-20 w-16 flex items-center justify-center cursor-pointer"><Image src={'/icons/Twitter.svg'} alt="icons" height={100} width={100}/></div>
                    <div className=" h-20 w-16 flex items-center justify-center cursor-pointer"><Image src={'/icons/Facebook.svg'} alt="icons" height={100} width={100}/></div>
                </div>
                <div className="flex md:flex-row flex-col p-0 justify-center md:items-center items-start gap-2">
                    <Copier text='imakafeelahmedch@gmail.com'/>
                     <div>iamkafeelahmed@gmail.com</div>
                </div>
                <div className="flex md:flex-row flex-col p-0 justify-center md:items-center items-start gap-2">
                    <Copier text="+923488480058" />
                    <div className="">+92 348 8480058</div>
                </div>
            </div>
            <div className="flex flex-col gap-2 justify-start items-end md:items-start mt-20 text-xl">
                <div>Home</div>
                <div>About</div>
                <div>Contact Us</div>
                <div>Help</div>
            </div>
            <div className="flex flex-col gap-2 justify-start items-start mt-20 text-xl">
                <div>Products</div>
                <div>Categories</div>
                <div>Featured</div>
                <div>Sales</div>
            </div>
            <div className="flex flex-col gap-2 justify-start md:items-start items-end mt-20 text-xl">
                <div>Privacy Policy</div>
                <div>Terms of Service</div>
                <div>FAQ</div>
                <div>Support</div>
            </div>
        </section>
        <p className="md:text-xl text-sm text-center"> Kafeel Ahmed CH | All Rights Reserved &copy; 2024</p>
        </>
    )
}

export default Footer;
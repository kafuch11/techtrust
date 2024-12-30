import { Share_Tech } from "next/font/google"
import Image from "next/image"


const shareTech = Share_Tech({
  weight : ['400'],
  subsets : ['latin']
  
})

const Hero = () => {
  return (
    <section className="hero -z-20 space-c md:pl-8 p-2 items-center md:items-start">
        <h1 className={`${shareTech.className} hero-head`}>Welcome to 
            <span className="text-logo_blue"> Tech</span>
        <span className="text-logo_green">Trust</span>
           <span className=" wave-hand">👋</span>
        </h1>
        <h2 className="hero-sub-head">
            Offering Tech of your choice.
        </h2>
        <h3 className="hero-para ">Get hands on deals in exclusive computer products</h3>
        <button className="btn mt-5  md:mt-8">Shop Now</button>
        <div className="hero-image">
            <Image src={'/ui/hero/hero-1.png'} width={600} height={500} alt="background image" className="w-full md:hidden flex"/>
            <Image src={'/ui/hero/hero-2.png'} width={900} height={800} alt="background image" className="w-full md:flex hidden"/>
        </div>
    </section>
  )
}

export default Hero
'use client'
import Image from "next/image"
import { useState, useEffect } from "react"
import { featuredProducts } from "@/app/constants"


const Product = ({translate} : {translate : number}) => {
    useEffect(() => {
      
    }, [translate])
    


    return (
        <>
            {featuredProducts.map(({ id, name, description, price, image }) => (
                <div key={id} className={`featured-card absolute  min-h-full min-w-full transition-transform duration-500 ${translate<id?'-translate-x-full':translate>id?'translate-x-full':'translate-x-0'} mt-4`}>
                    <div className="flex md:h-full h-1/2  md:max-w-[60%] max-w-full items-start flex-col justify-start md:justify-end">

                        <div className="featured-card-name">
                        {name}
                        </div>
                        <div className="featured-card-desc md:flex hidden">{description}</div>
                    </div>
                    <div className="flex flex-col justify-end gap-3">
                        <div className="md:hidden flex featured-card-desc">{description}</div>
                        <div className="text-sale_green md:text-3xl">${price}</div>
                        
                        </div>
                    <div className="absolute top-0 left-0 -z-10  h-full w-full overflow-hidden rounded-md  bg-transparent flex items-center justify-center">
                        <Image src={image} alt="featured" height={500} width={600} className="md:h-full md:w-auto h-auto w-full mx-auto  " />
                    </div>
                </div>
            ))}
        </>
    )
}


const Featured = () => {
    const [onScreen, setOnScreen] = useState(0);


    return (
        <section className="w-full relative  space-c md:min-h-[90vh]">
            <div className="section-head">Featured</div>
            <div className="w-full h-max flex relative justify-center items-center">
                <div onClick={() => setOnScreen(prev => prev == 0 ? 4 : prev - 1)} className="h-max w-fit relative  cursor-pointer"><Image src={'/icons/go_left.svg'} alt="left" height={100} width={100} /></div>
                <div className="w-full relative min-h-[350px] max-h-max h-[50vh] flex  overflow-hidden">
                        <Product translate={onScreen} />
                </div>
                <div onClick={() => setOnScreen(prev => prev == 4 ? 0 : prev + 1)} className="h-max w-fit cursor-pointer"><Image src={'/icons/go_right.svg'} alt="right" height={100} width={100} /></div>
            </div>
            <div className="w-full h-20 flex justify-around items-center">
                <div className="flex gap-3 items-center">
                    {[0, 1, 2, 3, 4].map((item) => (
                        <div key={item} onClick={() => setOnScreen(item)} className={`${onScreen === item ? 'bg-featured_dot_active' : 'bg-featured_dot_unactive'} h-5 w-5 relative  rounded-full cursor-pointer`}></div>
                    ))}
                </div>
                <div className="flex gap-3 items-center">
                    <button className="btn">Buy Now</button>
                    <button className="btn">Add to Cart</button>
                </div>
            </div>
        </section>
    )
}

export default Featured
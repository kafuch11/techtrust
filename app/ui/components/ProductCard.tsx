import Image from "next/image"

const ProductCard = ({products}:{products:{name:string,sale:number,price:number,expiry_date:string,image:string,discount:number}}) => {
    const {name,sale,price,expiry_date,image} = products
  return (
    <div className="h-96 w-80 relative -z-20 flex  flex-col justify-between rounded-md gray-gradient  backdrop-blur-md">
        <Image src={image} alt='product' height={100} width={130} className="rounded-img" />
        <div className="h-full w-full flex flex-col justify-evenly pl-3  ">
            <div className="md:text-3xl text-xl text-hero_head">{name}</div>
            <div className="md:text-2xl text-lg text-transparent bg-clip-text bg-gradient-to-l from-featured_prod_head_s to-featured_prod_head_e  ">50% OFF</div>
            <div className="md:text-2xl text-lg flex gap-3 p-1"><span className="text-sale_red"><del>${sale}</del></span><span className="text-sale_green">${price}</span></div>
            <div className="w:full self-end pr-3 text-border_gray">Till {expiry_date}</div>
        </div>
    </div>
  )
}

export default ProductCard
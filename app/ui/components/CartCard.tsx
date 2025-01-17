import { Product } from "@/app/products/page"
import Image from "next/image"
import Link from "next/link"

export const CartHead = () => {
    return (
        <div className="w-full h-10 grid grid-cols-[4fr_4fr_1fr_1fr_1fr_1fr_2fr] border-b-2 pb-5 gap-4">
            <div className=" h-full flex justify-start items-center">
                <h1>Product</h1>
            </div>
            <div className=" h-full flex justify-start pl-5 items-center">
                <h1>Description</h1>
            </div>
            <div className=" h-full flex relative left-10 items-center">
                <h1>Price</h1>
            </div>
            <div className=" h-full flex relative  left-7 items-center">
                <h1>Quantity</h1>
            </div>
            <div className=" h-full flex relative left-6 items-center">
                <h1>Status</h1>
            </div>
            
        </div>
    )
}


export const CartCardSm = ({product,count,handleRemove}:{product:Product,count:number,handleRemove:()=>void}) => {

    return (
      <div className="w-full h-20 max-w-full grid grid-cols-[2fr_2fr_1fr_1fr_1fr]   rounded-[5px] bg-black_grad_s ">
          <div className="w-auto h-full flex justify-center items-center px-1 py-2 relative">

              <Image
              src="/ui/deals/image.png"
              height={300}
              width={600}
              alt="Product Image"
              className="rounded-lg h-16 w-auto"
              
              />
              
          </div>
          <div className="h-full w-full flex flex-col justify-center items-start px-2 gap-1">
                
                <Link href={`/`}><h1 className="text-md font-semibold">{product.name}</h1></Link>
              
          </div>
          <div className="flex flex-col justify-center items-center gap-1 text-sm">
            <div>Price</div>
              <p className="text-sm text-sale_green">{product.price}</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-1 text-sm">
            <div>Count</div>
            <div>

              {count}
            </div>
          </div>
          
          <div className="flex justify-center items-center px-1">
          
              <button onClick={()=> handleRemove()} className="btn text-sm py-1 px-2">Remove</button>
          </div>
         
          
      </div>
    )
  }


const CartCard = ({product,count,handleRemove}:{product:Product,count:number,handleRemove:()=>void}) => {
  return (
    <div className="w-full h-40 flex justify-between items-center py-5 border-b-2 gap-4">
        <div className="w-1/4 h-full relative">
            <Image
            src="/ui/deals/image.png"
            height={300}
            width={600}
            alt="Product Image"
            className="rounded-lg h-full w-auto"
            
            />
        </div>
        <div className="h-full w-1/4 flex flex-col justify-start items-start pt-7 gap-1">
           
                <h1 className="text-lg font-bold">{product.name}</h1>
                <p className="text-sm">{product.description}</p>
            
        </div>
        <div>
            <p className="text-2xl text-sale_green">{product.price}</p>
        </div>
        <div>
            {count}
        </div>
        <div>
            Pending
        </div>
        <div>
            <button className="btn">Details</button>
        </div>
        <div>
            <button onClick={()=> handleRemove()} className="btn">Remove</button>
        </div>
       
        
    </div>
  )
}

export default CartCard
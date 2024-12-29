import Image from "next/image"

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


const CartCard = () => {
  return (
    <div className="w-full h-40 flex justify-between items-center py-5 border-b-2 gap-4">
        <div className="w-1/4 h-full relative">
            <Image
            src="/ui/deals/image.png"
            layout="fill"
            objectFit="cover"
            alt="Product Image"
            className="rounded-lg"
            
            />
        </div>
        <div className="h-full w-1/4 flex flex-col justify-start items-start pt-7 gap-1">
           
                <h1 className="text-lg font-bold">Laptop X49</h1>
                <p className="text-sm">Super high performance laptops For Gaming</p>
            
        </div>
        <div>
            <p className="text-2xl text-sale_green">$200</p>
        </div>
        <div>
            1
        </div>
        <div>
            Pending
        </div>
        <div>
            <button className="btn">Details</button>
        </div>
        <div>
            <button className="btn">Remove</button>
        </div>
       
        
    </div>
  )
}

export default CartCard
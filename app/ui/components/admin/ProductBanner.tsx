import Image from "next/image"

const ProductBanner = () => {
    return (
        <div className="min-h-20 w-full flex justify-between p-2 items-center rounded-xl bg-featured_dot_unactive">
            <div className="flex justify-start items-start gap-2 h-full">

                <div className="relative h-16 w-24 rounded-[10%] overflow-hidden border">
                    <Image src={'/ui/deals/image.png'} alt='product image' fill />


                </div>
                <div className="flex flex-col items-start justify-center relative top-2 h-full ">

                <h1 className="text-lg ">
                    Laptop X47 1Tb
                </h1>
                <p className="text-sm text-border_gray">High Speed Gaming PC</p>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center h-full">
                <h1 className="text-lg ">Invetory</h1>
                <div className="text-sm text-border_gray">70</div>
            </div>
            <div className="flex flex-col justify-center items-center h-full">
                <h1 className="text-lg ">Sale</h1>
                <div className="text-sm text-border_gray">$1,000.00</div>
            </div>
            <div className="flex flex-col justify-center items-center h-full">
                <h1 className="text-lg ">Price</h1>
                <div className="text-sm text-border_gray">$500.00</div>
            </div>
            <div>
                <button className="btn">Details</button>
            </div>
        </div>
    )
}

export default ProductBanner
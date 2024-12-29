import Image from "next/image"

const OrdersCard = () => {
    return (
        <div className="w-full max-w-[1000px] mx-auto h-max min-h-40 rounded-[10px] p-4 bg-redish_white text-black_grad_e grid grid-rows-2 grid-cols-2">
            <div className="w-full h-full flex justify-start items-center gap-2">
                <div className="h-16 w-16 rounded-full overflow-hidden relative">
                    <Image src={'/images/users/profile.png'} alt="user image" fill />
                </div>
                <div>
                    <div className="text-2xl font-semibold">Kafeel Ahmed <span className="text-sm text-black_grad_m">AJK</span></div>
                    <div className="text-sm text-black_grad_m">iamkafeelahmedch@gmail.com</div>
                </div>
            </div>
            <div className="flex items-center justify-end gap-2 w-full">
                <div className="flex flex-col justify-center items-end">
                    <div className="text-2xl font-semibold">Laptop i13</div>
                    <div className="text-lg text-black_grad_m">$200</div>
                </div>
                <div className="h-16 w-24 rounded-[4px] overflow-hidden relative">
                    <Image src={'/ui/deals/image.png'} alt="laptop image" fill />
                </div>
            </div>
            <div className="w-full flex justify-around items-center px-4 col-span-2 pt-4">
                <div className="flex justify-center items-center gap-2 flex-col">
                    <div className="font-semibold text-lg">quantity</div>
                    <div className="text-xl ">1</div>
                </div>
                <div className="flex justify-center items-center gap-2 flex-col">
                    <div className="font-semibold text-lg">price</div>
                    <div className="text-xl ">$200</div>
                </div>
                <div className="flex justify-center items-center gap-2 flex-col">
                    <div className="font-semibold text-lg">delivery charges</div>
                    <div className="text-xl ">$2</div>
                </div>
                <div className="flex justify-center items-center gap-2 flex-col">
                    <div className="font-semibold text-lg">sum</div>
                    <div className="text-xl ">$202</div>
                </div>
<div className=" flex gap-8 items-center h-20 ">

                <div className="btn text-redish_white text-sm w-max h-max ">Accept</div>
                <div className="btn text-redish_white text-sm h-max w-max ">Regect</div>
</div>
            </div>

        </div>
    )
}

export default OrdersCard
import Avatar from "../avatar"


const CustomersCard = () => {
  return (
    <div className="grid grid-rows-1 grid-cols-[2fr_4fr_1fr] rounded-xl text-[#000000] bg-redish_white min-h-16 w-full ">
        <div className="h-full w-full flex justify-start items-center gap-2 ">
            <div className="p-2 "><Avatar className="h-12 "/></div>
            <div>
                <div className="font-semibold text-xl">Kafeel Ahmed <span className="text-sm text-black_grad_m font-normal pl-2">AJK</span></div>
                <div className="text-sm text-black_grad_m">iamkafeelahmedch@gmail.com</div>
            </div>
        </div>
        <div className="w-full h-full flex justify-around items-center">
            <div className="flex flex-col justify-center items-center gap-1">
                <div className="text-sm ">Orders:</div>
                <div className="text-lg">2</div>
            </div>
            <div className="flex flex-col justify-center items-center gap-1">
                <div className="text-sm ">Payments:</div>
                <div className="text-lg">1</div>
            </div>
            <div className="flex flex-col justify-center items-center gap-1">
                <div className="text-sm ">Pendings:</div>
                <div className="text-lg">0</div>
            </div>
            
        </div>
        <div className=" flex gap-8 items-center h-20 justify-end p-2 ">

                <div className="btn text-redish_white text-sm w-max h-max ">Block</div>
                <div className="btn text-redish_white text-sm h-max w-max ">Delete</div>
</div>

    </div>
  )
}

export default CustomersCard
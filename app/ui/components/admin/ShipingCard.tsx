import Image from "next/image"



const ShipingCard = () => {
  return (
    <div className="w-full  mx-auto h-max min-h-40 rounded-[10px] p-4 bg-redish_white text-black_grad_e grid grid-rows-[1fr_4fr] grid-cols-[2fr_1fr] gap-2">
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
                        <div className="text-lg text-black_grad_m">1<span className="px-3 ">.</span>$200</div>
                    </div>
                    <div className="h-16 w-24 rounded-[4px] overflow-hidden relative">
                        <Image src={'/ui/deals/image.png'} alt="laptop image" fill />
                    </div>
                </div>
                <div className="border w-full h-full grid grid-cols-3 grid-rows-2 gap-2">
                    <div className="w-full h-full  flex flex-col justify-center items-center gap-2">
                        <div className="text-lg text-black_grad_s">paid:</div>
                        <div className="text-xl text-[#000000]">$50</div>
                    </div>
                    <div className="w-full h-full  flex flex-col justify-center items-center gap-2">
                        <div className="text-lg text-black_grad_s">remaining:</div>
                        <div className="text-xl text-[#000000]">$150</div>
                    </div>
                    <div className="w-full h-full  flex flex-col justify-center items-center gap-2">
                        <div className="text-lg text-black_grad_s">location:</div>
                        <div className="text-xl text-[#000000]">Ratnoi</div>
                    </div>
                    <div className="w-full h-full  flex flex-col justify-center items-center gap-2">
                        <div className="text-lg text-black_grad_s">distance:</div>
                        <div className="text-xl text-[#000000]">50km</div>
                    </div>
                    <div className="w-full h-full  flex flex-col justify-center items-center gap-2">
                        <div className="text-lg text-black_grad_s">covered:</div>
                        <div className="text-xl text-[#000000]">20km</div>
                    </div>
                    <div className="w-full h-full  flex flex-col justify-center items-center gap-2">
                        <div className="text-lg text-black_grad_s">status:</div>
                        <div className="text-xl text-[#00ff00]">travel</div>
                    </div>
                </div>
                <div className="h-full w-full p-2">
                    <div className="h-full w-full rounded-xl bg-logo_blue"></div>
                </div>
                
    
            </div>
  )
}

export default ShipingCard
import Image from "next/image"


const ReviewsCard = ({...props}) => {
  const {name,role,rating,text} = props;
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-full h-max min-h-52 max-w-[400px] rounded-md gray-gradient   grid grid-rows-[4fr_9fr]">
        <div className=" h-full w-full grid grid-cols-2 grid-rows-1  px-4">
          <div className="h-full w-full flex justify-start items-center  gap-2">
            <div className="w-10 h-10 relative bg-btn_blue_s rounded-full overflow-hidden">
              <Image src={'/images/users/profile.png'} fill alt="stars"/>
              </div>
            <div className=" h-10 overflow-hidden flex flex-col  justify-center items-start">
            <p className=" h-max relative top-1">{name}</p>
              <p className=" h-max text-sm text-border_gray">{role}</p>
              </div>
          </div>
          <div className="flex gap-1 justify-end h-full w-full items-center  ">
            {[1,2,3,4,5].map((rate,index)=>(

            <Image key={index} src={rate <= rating?'/icons/filled_star.svg':'/icons/hollow_star.svg'} width={20} height={20} alt="stars" />
            ))}
            </div>
        </div>
        <div className=" h-full w-full p-4 flex justify-center items-center">
          <div className=" h-full w-full text-lg">
{text}          </div>
        </div>
      </div>

    </div>
  )
}

export default ReviewsCard
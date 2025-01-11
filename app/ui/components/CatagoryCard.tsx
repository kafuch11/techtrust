import Image from "next/image"
import Link from "next/link"


const CatagoryCard = ({image,name}:{image:string,name:string}) => {
  
  return (
    <Link href={`/products?category=${name}`}>
    <div className="h-full w-full  flex justify-center items-center">
    <div className=" h-max w-max max-h-96 rounded-lg overflow-hidden gray-gradient grid grid-rows-[3fr_1fr]">
      <div className=" overflow-hidden flex justify-center items-center"><Image src={image} height={300} width={500} alt="Laptop" /></div>
      <div className=" font-semibold flex items-center justify-center md:text-4xl text-xl">{name}</div>
    </div>
  </div>
    </Link>
  )
}

export default CatagoryCard
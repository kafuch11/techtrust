'use client'
import Image from "next/image"
import { useState } from "react"

const Copier = ({text}:{text: string}) => {
    const [link, setLink] = useState('/icons/copy.svg')
   const handleClink = ()=> {
    setLink('/icons/tick.svg')
    window.navigator.clipboard.writeText(text);
    setTimeout(() => {
        setLink('/icons/copy.svg')
    }, 2000);

}
  return (
                         <div onClick={handleClink} className=" h-max w-max flex items-center justify-center cursor-pointer"><Image src={link} alt="icons" height={20} width={20}/></div> 

  )
}

export default Copier
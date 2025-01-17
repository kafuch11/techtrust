import React from 'react'
import { Skeleton } from "@/components/ui/skeleton"


const Loading = () => {
  return (
<section className=" space-c md:pl-8 p-2 flex flex-col items-center md:items-start">
        <Skeleton className={`bg-black_grad_m rounded-lg w-1/2 h-20`}/>
        
        <Skeleton className="bg-black_grad_m rounded-lg w-2/3 h-16 mt-4"/>
        <Skeleton className="bg-black_grad_m rounded-lg w-16 h-10 mt-5"/>
        
    </section>
  )
}

export default Loading
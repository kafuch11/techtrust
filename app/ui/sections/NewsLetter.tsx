'use client'
import { useState } from "react"
import { useForm } from "react-hook-form";
import { newsLetter } from "@/actions/news-letter";


const NewsLetter = () => {
  interface IFormInput {
    email: string;
  }


  const [show, setShow] = useState(true)
  const { register, handleSubmit, formState:{errors}, reset } = useForm<IFormInput>()
  

  const onSubmit = async (e : IFormInput)=>{
    reset()
    const response = await newsLetter(e.email)
    if(response?.success){
      setShow(false)
    }

  }

  return (
    <section className=' space-c min-h-96 flex justify-center items-center gap-4 flex-col'>
       
            
            <h1 className='section-head'>Get the Latest Tech News and Offers!</h1>
            {show?<>
            <p className='md:text-xl text-lg'>Sign up to receive exclusive discounts, product updates, and special offers.</p>
            <form onSubmit={handleSubmit(onSubmit)}><div className='flex flex-col gap-3 py-10'>

                <input type="email" {...register('email',{required : 'Email is Required'})} placeholder='Email...' className='h-12 min-w-[30vw] px-3 border-border_gray border-2 border-solid bg-black_grad_m rounded-md' />
                {errors.email?.type === 'required' && <p role="alert" className="text-sale_red">Email is required</p>}

                <button className='btn'>Join Us</button>
            </div></form>
            </>:<p className='md:text-xl text-lg'>Thanks for signing Up to our News Letter. Now You would get notified about all the new updates.</p>
          }
    </section>
  )
}

export default NewsLetter
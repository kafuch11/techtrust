'use client'

import Image from "next/image"
import {  useRef, useState } from "react"
import { rate } from "@/actions/rating"
import { useForm, SubmitHandler } from "react-hook-form"


const Rating = () => {
    const [rated, setRated] = useState(3)
    const realRating = useRef(0)
    const [clicked, setClicked] = useState(false)
    const [btnClicked, setBtnClicked] = useState(false)
    const { register, handleSubmit, formState:{errors}, reset } = useForm()

    interface IFormInput {
        email: string;
        
      }

    const onSubmit: SubmitHandler<IFormInput> = data => {
        reset();
        setBtnClicked(true)
        rate(data.email,realRating.current)
        
    };


    const handleRating = (item: number) => {
        if (!clicked) {

            realRating.current = item

        }

        setClicked(true)
    }
    return (
        <section className="w-full min-h-96 h-max py-36 flex flex-col gap-12 justify-center items-center">
            <div className=" border-sale_red h-full w-full flex justify-center items-center">
                <h1 className="section-head p-0 h-max w-full flex justify-center">Rate my Web</h1>
            </div>
            <div className={` h-max w-full  ${btnClicked ? 'hidden' : 'flex'} justify-center items-center gap-3`}>
                {[1, 2, 3, 4, 5].map((item) => (
                    <Image onClick={() => handleRating(item)} onPointerEnter={() => clicked || setRated(item)} onPointerLeave={() => clicked || setRated(3)} key={item} className="h-[10vw] w-auto cursor-pointer" src={clicked ? (item <= realRating.current ? '/icons/filled_star.svg' : '/icons/hollow_star.svg') : (item <= rated ? '/icons/filled_star.svg' : '/icons/hollow_star.svg')} width={20} height={20} alt="stars" />
                ))}
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="flex justify-center items-center gap-3 flex-col">

                <input type="email" {...register("email",{required:'Email Required'})} placeholder="Email..." className={`btn border-border_gray border-solid border-2 from-black_grad_s to-black_grad_m transition-all duration-300 ${clicked ? `${btnClicked && ' hidden '}` : ' hidden text-transparent bg-transparent from-transparent to-transparent '} `} />
                {errors.email?.type === 'required' && <p role="alert" className="text-sale_red">Email is required</p>}

                <button  type="submit" className={`btn transition-all duration-300 ${clicked ? `${btnClicked && ' hidden '}` : ' hidden text-transparent bg-transparent from-transparent to-transparent '} `}>Confirm</button>
            </form>
            <div className={` h-max w-full md:text-2xl text-lg ${btnClicked ? 'flex' : 'hidden'} justify-center items-center gap-3`}>
                Thanks For Rating Us!
            </div>

        </section>
    )
}

export default Rating;




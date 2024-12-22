
const NewsLetter = () => {
  return (
    <section className=' space-c min-h-96 flex justify-center items-center gap-4 flex-col'>
       
            
            <h1 className='section-head'>Get the Latest Tech News and Offers!</h1>
            <p className='md:text-xl text-lg'>Sign up to receive exclusive discounts, product updates, and special offers.</p>
            <div className='flex flex-col gap-3 py-10'>
                <input type="text" placeholder='Email...' className='h-12 min-w-[30vw] px-3 border-border_gray border-2 border-solid bg-black_grad_m rounded-md' />
                <button className='btn'>Join Us</button>
            </div>
    </section>
  )
}

export default NewsLetter
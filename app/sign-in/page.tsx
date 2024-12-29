import Link from "next/link"



const Page = () => {
  return (
    <section className="h-max w-full flex justify-center items-center py-10">
        <div className="min-h-96 min-w-52 w-max h-max py-8 px-10 rounded-lg border border-border_gray flex flex-col justify-evenly items-center">
            <h1 className="text-4xl py-4 font-bold text-center">Sign In</h1>
            <form action={async (e : FormData)=>{
                'use server'
                console.log(e)
            }}>
                <div className="flex flex-col w-72 gap-4">
                    
                    <div>
                        <h2 className="h-10 text-xl pl-1 py-2 font-medium">Email:</h2>
                        <input type="text" name="email" placeholder="example@email.com" className="w-72 h-10 rounded-md border border-border_gray  bg-black_grad_m pl-3 text-sm stroke-none " />
                    </div>
                    <div>
                        <h2 className="h-10 text-xl pl-1 py-2 font-medium">Password:</h2>
                        <input type="text" name="password" placeholder="Aa@1" className="w-72 h-10 rounded-md border border-border_gray  bg-black_grad_m pl-3 text-sm stroke-none " />
                    </div>
                    
                    <div className="flex justify-center items-center"><button type="submit" className="btn text-center">Sign In</button>                     </div>

                </div>
            </form>
            <div className="pt-8">
                <p className="text-sm">Don&apos;t have an account? <Link href={'/sign-up'}><span className="text-logo_blue underline cursor-pointer">Sign Up</span></Link></p>
            </div>
        </div>
    </section>
  )
}

export default Page
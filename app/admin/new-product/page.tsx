import Input from "@/app/ui/components/admin/Input"



const Page = () => {
    return (
        <div className="w-full h-full min-h-screen ">

            <div className="flex flex-col h-max px-4 py-8 gap-4 md:w-[90%] rounded-xl justify-evenly items-center border mx-auto">
                <h1 className="font-semibold text-2xl pb-8">Create New Product :</h1>
                <form className="w-full flex gap-10 flex-col justify-evenly items-center " action={async (e: FormData) => {
                    'use server'
                    // await fetch('/api/admin/products',{
                    //     method:'POST',
                    //     body: JSON.stringify({
                    //         name:e.get('name')
                    //     })
                    // })
                    console.log(e)
                }}>
                    <Input text="Product Name :" name="name" required={true} placeholder="e.g. Laptop Piato..."/>
                    <Input text="Description :" name="description" required={true} placeholder="e.g. High speed Laptop..."/>
                    <Input text="Category :" name="category" required={true} placeholder="e.g. Laptop..."/>
                    <Input text="Brand :" name="brand" required={true} placeholder="e.g. Dell..."/>
                    <Input text="Price ($) :" name="price" required={true} type="number" placeholder="e.g. 100..."/>
                    <Input text="Sale ($) :" name="sale" required={true} type="number" placeholder="e.g. 30..."/>
                    <Input text="Image (Link) :" name="image" required={true} placeholder="e.g. /..."/>
                    <Input text="Expiry Date (Link) :" required={true} name="expiry_date" placeholder="e.g. dd/mm/yyyy..."/>
                    <div className="flex w-full items-center justify-center gap-20 my-5">
                        <button className="btn" type="submit">Submit</button>
                        <button className="btn">Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    )
}



export default Page;
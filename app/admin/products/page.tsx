import SideBar from "@/app/ui/components/SideBar"
import ProductCard from "@/app/ui/components/ProductCard"
import { products } from "@/app/constants"


const Page = () => {
    return (
        <section className="min-h-screen w-full relative flex">
            <div className="relative w-3/5 h-screen">

                <SideBar />
            </div>
            <div className="flex flex-wrap gap-5 p-5">

                {products.map((item, index) => (
                    <div key={index} className="h-max w-max ">
                        <div className="rounded-xl overflow-hidden">

                        <ProductCard products={item} />
                        </div>
                        <div className="w-full flex justify-between py-2 px-4">
                            <button className="btn">Remove </button><button className="btn">Edit </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Page
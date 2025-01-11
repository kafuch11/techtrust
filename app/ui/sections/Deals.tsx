
import Link from "next/link";
import ProductCard from "../components/ProductCard"
// import { getProducts } from "@/actions/products";
import { products } from "@/app/constants";

const Deals = async () => {
// let products: Array<{ id: number, name: string; sale: number; price: number; expiry_date: string; image: string; discount: number; }> = []

    // await getProducts('All', { min: 0, max: 10000 }, []).then((data) => products = data)

    return (
        <section className="space-c min-h-96 w-full">

            <h1 className="section-head">Deals</h1>
            <div className=" max-w-full max-h-fit overflow-x-scroll animated-scroll">


                <div className={`h-max min-w-full w-max ease-linear  flex gap-3 md:p-10 p-4 transition-transform duration-150 `}>
                    {products.map((item) => (
                        <div key={item.id} className={` transition-all duration-500`}>

                            <ProductCard products={item} />
                            <div className="flex my-4 px-2 justify-between items-center"><Link href={`/products/product/${item.id}`}><button className="btn">Buy Now</button></Link><button className="btn ">Add to Cart</button></div>
                        </div>

                    ))}
                </div>
            </div>
        </section>
    )
}

export default Deals
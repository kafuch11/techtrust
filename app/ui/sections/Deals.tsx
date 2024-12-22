
import ProductCard from "../components/ProductCard"
import { products } from '../../constants/index'

const Deals = () => {
    

   
    return (
        <section className="space-c min-h-96 w-full">

            <h1 className="section-head">Deals</h1>
            <div className=" max-w-full max-h-fit overflow-x-scroll animated-scroll">
                

                <div  className={`h-max min-w-full w-max ease-linear  flex gap-3 md:p-10 p-4 transition-transform duration-[170s] `}>
                    {products.map((item) => (
                        <div key={item.id} className={` transition-all duration-500`}>

                            <ProductCard products={item} />
                            <div className="flex my-4 px-2 justify-between items-center"><button className="btn">Buy Now</button><button className="btn ">Add to Cart</button></div>
                        </div>

                    ))

                    }
                </div>
            </div>
        </section>
    )
}

export default Deals
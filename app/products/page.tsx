import SideBar from "../ui/components/SideBar"
import Featured from "../ui/sections/Featured"
import ProductCard from "../ui/components/ProductCard"
import { products } from "../constants"

const Page = () => {
  return (
    <main className='relative flex  '>
      <div className="w-64 ml-3 h-full min-h-screen  bg-gray-100">

        <SideBar />
      </div>
      <section className="w-5/6 h-full min-h-screen  ">
        <div>

          <Featured />
        </div>
        <div className="w-full h-full flex flex-wrap p-4 gap-8">
          {products.map((item) => (
            <div key={item.id} className={` transition-all duration-500`}>

              <ProductCard products={item} />
              <div className="flex my-4 px-2 justify-between items-center"><button className="btn">Buy Now</button><button className="btn ">Add to Cart</button></div>
            </div>

          ))

          }
        </div>
      </section>
    </main>
  )
}

export default Page;
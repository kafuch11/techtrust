'use client'


import SideBar from "../ui/components/SideBar"
import Featured from "../ui/sections/Featured"
import ProductCard from "../ui/components/ProductCard"
import { useState, useEffect } from "react";
import { getProducts } from "@/actions/products";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Link from "next/link";

const Page =  () => {

const router = useSearchParams()
  const  category  = router.get('category');
  const [products, setProducts] = useState<Array<{id:number,name: string, sale: number, price: number, expiry_date: string, image: string, discount:number}>>([]);
  const [selectedBrand, setSelectedBrand] = useState<Array<string>>([])
  const [show, setShow] = useState(true)
  const [showFilter, setShowFilter] = useState(false)
  const [minPrice, setMinPrice] = useState('0');
  const [maxPrice, setMaxPrice] = useState('10000');
  const [selectedCategory, setSelectedCategory] = useState(category?category:'All')


  
  

  useEffect(() => {
    async function fetchData() {
    await getProducts(selectedCategory, { min: parseInt(minPrice), max: parseInt(maxPrice) }, selectedBrand).then((data) => {
      setProducts(data)
    })}
    fetchData()
  
    
  }, [selectedCategory, minPrice, maxPrice, selectedBrand])
  

  return (
    <main className='relative flex  '>
      <div className="w-64 ml-3 h-full min-h-screen hidden md:flex  bg-gray-100">
        <SideBar 
          selectedBrand={selectedBrand as Array<string>} 
          setSelectedBrand={setSelectedBrand} 
          minPrice={minPrice} 
          setMinPrice={setMinPrice} 
          maxPrice={maxPrice} 
          setMaxPrice={setMaxPrice} 
          selectedCategory={selectedCategory} 
          setSelectedCategory={setSelectedCategory} 
        />
      </div>




      <div className=" md:hidden w-40 h-10  ">
        <Image src={'/icons/go_left.svg'} alt='filter' height={30} width={30} className={`md:hidden fixed right-6 top-16 cursor-pointer z-30 ${showFilter? 'flex':'hidden'}`} onClick={()=> setShowFilter(prev => !prev)}/>
        <Image src={'/icons/filter.svg'} alt='filter' height={30} width={30} className={`md:hidden fixed right-6 top-16 cursor-pointer z-30 ${showFilter? 'hidden':'flex'}`} onClick={()=> setShowFilter(prev => !prev)}/>
      </div>
      
      
      <div className={`w-64 ml-0 h-max md:hidden absolute block bg-black_grad_m  transition-transform duration-300 z-30 ${showFilter? 'translate-x-0':'-translate-x-[105%]'}`}>
        <SideBar 
          selectedBrand={selectedBrand as Array<string>} 
          setSelectedBrand={setSelectedBrand} 
          minPrice={minPrice} 
          setMinPrice={setMinPrice} 
          maxPrice={maxPrice} 
          setMaxPrice={setMaxPrice} 
          selectedCategory={selectedCategory} 
          setSelectedCategory={setSelectedCategory} 
        />
      </div>
      



      <section className={`md:w-5/6 w-full  h-full min-h-screen relative z-0  `}>
        {(minPrice && maxPrice && selectedCategory == 'All' && selectedBrand.length == 0 && show) && <div className={`relative `}>
          <button className={`absolute top-0  right-10 cursor-pointer z-30`} onClick={()=> setShow(false)}><Image src={'/icons/cross.svg'} alt='cross' height={25}  width={25}/></button>
          <Featured />
        </div>}
        <Suspense fallback={<p>Loading...</p>}>

        <div className="w-full h-full flex flex-wrap md:p-4 p-0 md:flex-row flex-col md:gap-8">
          {products.map((item) => (
            <div key={item.id} className={` transition-all duration-500 `}>

              <ProductCard products={item} />
              <div className="flex my-4 px-2 justify-between items-center"><Link href={`/products/product/${item.id}`}><button className="btn">Buy Now</button></Link><button className="btn ">Add to Cart</button></div>
            </div>

))

}
        </div>
</Suspense>
      </section>
    </main>
  )
}

export default Page;
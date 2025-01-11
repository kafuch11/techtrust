import ProductCard from "@/app/ui/components/ProductCard";
import Image from "next/image";
import Link from "next/link";
// import { products } from "@/app/constants";



interface Product {
    id: string,
    image: string,
    name: string,
    sale: number,
    price: number,
    expiry_date: string,
    discount: number,
    brand: string,
    category: string,
    description: string
}

const Page = async ({ params }: { params: Promise<{ id: number }> }) => {
    const url = process.env.NEXT_PUBLIC_API_URL;
    const id = (await params).id;
    const product: Product = await fetch(`${url}/user/products/product?id=${id}`).then(res => res.json()).then(res => res.data)
    const products: Array<Product> = await fetch(`${url}/user/products?category=${product.category}`).then(res => res.json()).then(res => res.data)
    return (
        <section className="w-full h-full ">
            <div className="w-full min-h-96 grid grid-cols-2">
                <div className="w-full p-2 ">
                    <div className="w-full rounded-[10px] overflow-hidden h-max ">
                        <Image src={product.image} alt='main image' height={300} width={600} className="w-full h-auto" />
                    </div>
                    <div className="h-32 w-full flex p-2 gap-3 justify-start items-center">
                        <Image src={product.image} alt='main image' height={300} width={600} className="w-auto h-full rounded-[10px]" />
                        <Image src={product.image} alt='main image' height={300} width={600} className="w-auto h-full rounded-[10px]" />
                        <Image src={product.image} alt='main image' height={300} width={600} className="w-auto h-full rounded-[10px]" />

                    </div>
                </div>
                <div className="w-full flex flex-col gap-5 justify-center items-start h-full p-10 pl-12">
                    <div className="section-head pl-0">{product.name}</div>
                    <div className="">
                        <p className="text-lg">
{product.description}
                        </p>
                    </div>
                    <div className="w-full h-40 gap-10 flex justify-start items-center ">
                        <button className="btn">Buy Now</button>
                        <button className="btn">Add to Cart</button>
                    </div>
                </div>
            </div>
            <div className="w-full min-h-80 h-max p-10">
                <h1 className='section-head pl-0 md:text-4xl'>Specifications:</h1>
                <div className="pl-10 text-lg my-8">
                    <ul>
                        <li className=" list-disc">Processor: Intel Core i7</li>
                        <li className=" list-disc">RAM: 16GB DDR4</li>
                        <li className=" list-disc">Storage: 512GB SSD</li>
                        <li className="list-disc">Graphics: NVIDIA GeForce GTX 1650</li>
                        <li className="list-disc">Display: 15.6&quot; Full HD</li>
                        <li className="list-disc">Battery Life: Up to 10 hours</li>
                    </ul>
                </div>
            </div>
            <div className="w-full min-h-80 h-max p-10">
                <h1 className='section-head pl-0 md:text-4xl my-8'>For You:</h1>
                <div className=" max-w-full max-h-fit overflow-x-scroll animated-scroll">


                    <div className={`h-max min-w-full w-max ease-linear  flex gap-3 md:p-10 p-4 transition-transform duration-150 `}>
                        {products.map((item) => (
                            <div key={item.id} className={` transition-all duration-500`}>

                                <ProductCard products={item} />
                                <div className="flex my-4 px-2 justify-between items-center"><Link href={`/products/product/${item.id}`}><button className="btn">Buy Now</button></Link><button className="btn ">Add to Cart</button></div>
                            </div>

                        ))

                        }
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Page;
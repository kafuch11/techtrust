'use client'

import SideBar from "@/app/ui/components/SideBar";
import ProductCard from "@/app/ui/components/ProductCard";
import { useEffect, useState } from "react";
import { getProducts } from "@/actions/products";

const Page = () => {
    const [products, setProducts] = useState<Array<{ id: number, name: string, sale: number, price: number, expiry_date: string, image: string, discount: number }>>([]);

    const [minPrice, setMinPrice] = useState('0');
    const [maxPrice, setMaxPrice] = useState('10000');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedBrand, setSelectedBrand] = useState<Array<string>>([]);



    useEffect(() => {
        getProducts(selectedCategory, { min: parseInt(minPrice), max: parseInt(maxPrice) }, selectedBrand).then((data) => {
            setProducts(data)
        })


    }, [selectedCategory, minPrice, maxPrice, selectedBrand])


    return (
        <section className="min-h-screen w-full relative flex">
            <div className="relative w-3/5 h-screen">

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
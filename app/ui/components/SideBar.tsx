'use client'

import Image from "next/image"
import { useState } from "react"


const categoriesList = [
  {
    id: 1,
    name: 'All',
  },
  {
    id: 2,
    name: 'Computers',
  },
  {
    id: 3,
    name: 'Laptops',
  },
  {
    id: 4,
    name: 'Phones',
  },
  {
    id: 5,
    name: 'Peripherals',
  },
]


const sortList = [
  {
    id: 1,
    name: 'Price: Low to High',
  },
  {
    id: 2,
    name: 'Price: High to Low',
  },
 
]

const brandList = [
  {
    id: 1,
    name: 'Nokia',
  },
  {
    id: 2,
    name: 'Apple',
  },
  {
    id: 3,
    name: 'Dell',
  },
  {
    id: 4,
    name: 'HP',
  },
  {
    id: 5,
    name: 'Samsung',
  },
]



const SideBar = () => {
  const [selectedCategory, setSelectedCategory] = useState(1)
  const [selectedCategoryHidden, setSelectedCategoryHidden] = useState(true)
  const [selectedSort, setSelectedSort] = useState(1)
  const [selectedSortHidden, setSelectedSortHidden] = useState(true)
  const [price, setPrice] = useState(0)
  const [priceTranslate, setPriceTranslate] = useState(false)
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(10000);
  const [selectedBrandHidden, setSelectedBrandHidden] = useState(true)
  const [selectedBrand, setSelectedBrand] = useState<Array<string>>([])

const deleteBrand = (id:number,arr: Array<string>) => {
  const newArr = arr.filter((_,index) => index !== id)
  return newArr
}



  return (
    <section className='w-64 bg-[#030303] border-r border-black_grad_e h-screen md:flex hidden absolute z-0 top-0 left-0  flex-col justify-start items-start p-4 gap-4 '>
      <div className='border-solid bottom-2 border-b py-5 border-border_gray sidebar-inner flex justify-start items-center  gap-1'>
        <div className="h-10 w-10  rounded-full bg-black_grad_m">
          <Image src="/images/users/profile.png" height={20} width={20} alt="profile" className="h-full w-full object-cover rounded-full" />

        </div>
        <div className="pl-2">
          <div className="text-md">Kafeel Ahmed</div>
          <div className="text-xs text-border_gray">iamkafeelahmedch@gmail.com</div>
        </div>

      </div>
      <div className='sidebar-inner flex flex-col justify-evenly items-start gap-2 relative'>
        <h1 className="text-lg">Categories</h1>
        <div className="h-8 w-32  rounded-full flex items-center justify-between px-3 bg-deal_card_m cursor-pointer relative">
          {categoriesList.map(({ id, name }) => id === selectedCategory && <span key={id} className="text-white">{name}</span>)}
          <span className={`text-white ${selectedCategoryHidden ? '' : ' rotate-90 '}`} onClick={() => setSelectedCategoryHidden(prev => !prev)}><Image src={'/icons/go_right.svg'} height={16} width={16} alt="icons" /></span>
          <div className={`${selectedCategoryHidden ? ' hidden ' : ' flex '} flex-col absolute z-10 top-full  left-1/2 bg-white border border-border_gray   w-32 `}>
            {categoriesList.map(({ id, name }) => (
              <span key={id} onClick={() => { setSelectedCategory(id); setSelectedCategoryHidden(true) }} className={`text-white w-full bg-[#ffffff] text-black_grad_s px-2 `}>{name}</span>

            ))}
          </div>
        </div>
      </div>
      <div className=' overflow-hidden sidebar-inner h-28 flex flex-col justify-evenly items-start gap-2'>
        <div className="flex justify-between items-center w-full">

          <h1 className="text-lg">Price </h1>
          <div className="flex justify-between items-center gap-2">
            <div className={`${priceTranslate?'scale-110':''} cursor-pointer`} onClick={()=> setPriceTranslate(false)}><Image src={'/icons/go_left.svg'} alt="icons" height={20} width={20} /></div>
            <div className={`${priceTranslate?'':'scale-110'} cursor-pointer`} onClick={()=> setPriceTranslate(true)}><Image src={'/icons/go_right.svg'} alt="icons" height={20} width={20} /></div>
          </div>
        </div >
        <div className={` flex flex-col transition-transform duration-300 ${priceTranslate?'translate-x-full':' translate-x-0'} justify-between items-center w-full text-[10px]`}>
          <div className="flex justify-between items-center w-full text-[12px]">

            <div>Min: $0</div>
            <div>Max: $100000</div>
          </div>
          <div className="w-full">
            <input
              type="range"
              min={0}
              max={10000}
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full"
            />
            <div style={{ position: 'relative', left: `calc(${price}) / 10000 * 100%` }}>${price}</div>

          </div>

        </div>
        <div className={`flex flex-col transition-transform duration-300 gap-2 px-2  relative -translate-y-full ${!priceTranslate?'-translate-x-full':'translate-x-0'} text-[12px]`}>
            <label className="flex justify-between  gap-1">
              Min Price:
              <input
                type="number"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                className="border p-1 w-1/2 text-[#ffffff] bg-black_grad_m"
              />
            </label>
            <label className="flex justify-between  gap-1">
              Max Price:
              <input
                type="number"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                className="border p-1 w-1/2 text-[#ffffff] bg-black_grad_m"
              />
            </label>
          </div>
      </div>
      <div className="w-full sidebar-inner flex flex-col justify-evenly items-start gap-1"> 
        <h1 className="text-lg">Brands</h1>
        <div className="min-h-6 h-max p-2 w-full  rounded-lg flex items-center justify-between px-1 bg-[#ffffff11] border mt-1 cursor-pointer relative">
          <span className="text-white flex gap-1 flex-wrap">
            {selectedBrand.length !== 0?selectedBrand.map(( name,id) =>  <div key={id}  className="text-white flex gap-2 h-full rounded-full border text-[10px] px-2"><p>{name}</p><span onClick={()=> { setSelectedBrand((e)=> deleteBrand(id,e))}}>x</span></div>):'All'}

          </span>
          <span className="text-white" onClick={()=> setSelectedBrandHidden(prev => !prev)}>+</span>
        <div className={`${selectedBrandHidden ? ' hidden ' : ' flex '}  flex-col absolute z-10 top-full  left-1/2 bg-white border border-border_gray   w-32 `}>
            {brandList.map(({ id, name }) => (
              <span key={id} onClick={() => { setSelectedBrand(selectedBrand.includes(name)?[...selectedBrand]:[...selectedBrand,name]); setSelectedBrandHidden(true) }} className={`text-white w-full bg-[#ffffff] text-black_grad_s px-2 `}>{name}</span>
              
            ))}
            </div>
          </div>
      </div>
      <div className='sidebar-inner flex flex-col justify-evenly items-start gap-2 relative'>
        <h1 className="text-lg">Sort By</h1>
        <div className="min-h-8 h-max w-full  rounded-full flex items-center justify-between px-3 bg-deal_card_m cursor-pointer relative">
          {sortList.map(({ id, name }) => id === selectedSort && <span key={id} className="text-white">{name}</span>)}
          <span className={`text-white ${selectedSortHidden ? '' : ' rotate-90 '}`} onClick={() => setSelectedSortHidden(prev => !prev)}><Image src={'/icons/go_right.svg'} height={16} width={16} alt="icons" /></span>
          <div className={`${selectedSortHidden ? ' hidden ' : ' flex '} flex-col absolute z-10 top-full  left-1/2 bg-white border border-border_gray   w-32 `}>
            {sortList.map(({ id, name }) => (
              <span key={id} onClick={() => { setSelectedSort(id); setSelectedSortHidden(true) }} className={`text-white w-full bg-[#ffffff] text-black_grad_s px-2 `}>{name}</span>

            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SideBar
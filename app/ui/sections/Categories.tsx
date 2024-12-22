import CatagoryCard from "../components/CatagoryCard"


const Categories = () => {
  return (
    <section className="min-h-[500px] space-c w-full ">
      <h1 className="section-head">Shop By Categories</h1>
      <div className="grid md:grid-cols-2 grid-cols-1 md:m-10 m-2  md:gap-7 gap-3 justify-center items-center">
        
       
        <CatagoryCard name="Laptops" image="/ui/categories/Laptop.png" />
        <CatagoryCard name="Computers" image="/ui/categories/Computer.png" />
        <CatagoryCard name="Accessories" image="/ui/categories/Accessories.png" />
        <CatagoryCard name="Periphrels" image="/ui/categories/Periphrels.png" />

      </div>
    </section>
  )
}

export default Categories
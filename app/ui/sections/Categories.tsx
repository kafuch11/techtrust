import CatagoryCard from "../components/CatagoryCard"
import { getCategory } from "@/actions/category"



const Categories = async () => {
  let categories : Array<{name: string, image:string}> = []
  getCategory().then(data => categories = data)

  return (
    <section className="min-h-[500px] space-c w-full ">
      <h1 className="section-head">Shop By Categories</h1>
      <div className="grid md:grid-cols-2 grid-cols-1 md:m-10 m-2  md:gap-7 gap-3 justify-center items-center">
        {
          categories.map(({name,image},index)=>(
            <CatagoryCard key={index} name={name} image={image} />
          ))
        }
       

      </div>
    </section>
  )
}

export default Categories
import CatagoryCard from "../components/CatagoryCard"

const url = process.env.BASE_URL

const Categories = async () => {
    const categories : Array<{name:string,image:string}> = await fetch(`${url}/api/user/products/categories`).then(res => res.json()).then(data => data.data)

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
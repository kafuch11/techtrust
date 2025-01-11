import ReviewsCard from "../components/ReviewsCard";
import { getReview } from "@/actions/review";

const Reviews = async () => {
  const review : Array<{name:string,role:string,rating:number,text:string,image:string}> = await getReview()
  return (
    <section className="space-c min-h-96">
      <h1 className="section-head ">Reviews</h1>
      <div className="w-full h-full my-4 grid md:grid-cols-2 grid-cols-1 gap-8">
        {review.map(({name,role,rating,text,image},index)=>(<ReviewsCard name={name} role={role} rating={rating} text={text} image={image} key={index} />))}
        
      </div>
    </section>
  )
}

export default Reviews;
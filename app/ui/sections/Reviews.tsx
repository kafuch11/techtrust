import ReviewsCard from "../components/ReviewsCard";
const Reviews = () => {
  return (
    <section className="space-c min-h-96">
      <h1 className="section-head ">Reviews</h1>
      <div className="w-full h-full my-4 grid md:grid-cols-2 grid-cols-1 gap-8">
        <ReviewsCard />
        <ReviewsCard />
        <ReviewsCard />
        <ReviewsCard />
      </div>
    </section>
  )
}

export default Reviews;
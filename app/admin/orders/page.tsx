import OrdersCard from "@/app/ui/components/admin/OrdersCard"


const Page = () => {
  return (
    <section className="w-full min-h-screen p-5 flex flex-col justify-start items-start gap-5">
        <h1 className="section-head p-0">
            Orders
        </h1>
        <div className="w-full h-full flex flex-col gap-4 justify-center items-center">
            <OrdersCard />
            <OrdersCard />
            <OrdersCard />
        </div>
    </section>
  )
}

export default Page
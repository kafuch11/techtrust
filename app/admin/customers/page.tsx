import CustomersCard from "@/app/ui/components/admin/CustomersCard"

const Page = () => {
  return (
    <section className="w-full min-h-screen p-5 flex flex-col justify-start items-start gap-5">
        <h1 className="section-head pl-0">Customers</h1>
        <div className="h-full w-full flex justify-center items-center gap-4 flex-col">
            <CustomersCard />
            <CustomersCard />
            <CustomersCard />
            <CustomersCard />
            <CustomersCard />
            <CustomersCard />
        </div>
</section>
  )
}

export default Page
import { Chart } from "../../components/Chart"
import AdminCard from "../../components/admin/admin-card"
import ProductBanner from "../../components/admin/ProductBanner"


const Dashboard = () => {
    return (
        <section className="h-full w-full flex  items-start gap-4 p-4">
            <div>

                <AdminCard />
            </div>
            <div className="w-full flex flex-col gap-16 items-center justify-start ">
                <div className=" w-full max-w-[800px]">


                    <Chart />
                </div>

                {/* 
####################################################
#####################################################
users info
*/}
                <div className="w-full min-h-32 flex max-w-[800px] justify-around items-center rounded-2xl  bg-black_grad_s">
                    {[{ text: 'users', number: 200 }, { text: 'products', number: 28 }, { text: 'perchase', number: 20 }, { text: 'repeats', number: 8 }].map(({ text, number }, index) => (
                        <div key={index} className="flex flex-col items-center justify-center gap-2 h-full w-max">
                            <div className="text-3xl text-sale_green ">{number}</div>
                            <div className="text-lg text-[#ffffff]">{text}</div>
                        </div>
                    ))}
                </div>
                {/*
 ###############################################
sales info

 */}

                <div className="w-full min-h-32 flex flex-col max-w-[800px] justify-around items-center rounded-2xl  bg-black_grad_s">
                    <div className=" w-full min-h-32 flex justify-around items-center ">
                        {[{ text: 'visits', number: 200 }, { text: 'sales', number: 28 }, { text: 'profit', number: 20 }, { text: 'comp orders', number: 9 }, { text: 'pend orders', number: 25 }].map(({ text, number }, index) => (
                            <div key={index} className="flex flex-col items-center justify-center gap-2 h-full w-max">
                                <div className="text-lg text-[#ffffff]">{text}</div>
                                <div className="text-lg text-sale ">{number}</div>
                            </div>
                        ))}
                    </div>
                    <div className="w-full p-5 pl-10 text-2xl flex flex-col justify-start items-start gap-4">
                        <h1>
                            Top Products
                        </h1>
                        <div className="w-full flex flex-col justify-center items-center gap-4">
                            <ProductBanner />
                            <ProductBanner />
                            <ProductBanner />
                            <ProductBanner />
                            
                        </div>
                        <div className="h-7"></div>
                        <div className="w-full h-max underline text-center">View More</div>
                    </div>
                </div>
                {/*
 ###############################################
top products info

 */}

            </div>
        </section>
    )
}

export default Dashboard
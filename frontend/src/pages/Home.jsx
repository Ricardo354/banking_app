import Navbar from "../components/Navbar";
import { LtIcon, GtIcon, AddIcon } from "../components/Icons";


// add brilho no Add Card
// add brilho nas setinha   
const Home = () => {

    const mockTransaction = [
        { Description: "Guitarra", Category: "Transfer", Price: 2000.00 },
        { Description: "Sanduiche pra Cecilia", Category: "Transfer", Price: 30.00 },
        { Description: "Uber", Category: "Transfer", Price: 30.00 },
        { Description: "Sorvete pra Cecilia", Category: "Transfer", Price: 16.00 },
    ]

    return (
        <>
            <div className="h-screen flex flex-row bg-zinc-800 bg-zinc-950">
                <Navbar />
                <div className="flex flex-col h-screen w-screen">
                    <div className="mt-20 ml-14 rounded-3xl bg-card-black w-[40%] h-[45%]">
                        <h1 className="w-[100%] ml-3 font-oswald text-white flex flex-row items-center text-3xl p-8">
                            My card
                            <button className="mt-[1%] bg-zinc-950 rounded-full w-7 ml-3 h-7">
                                <LtIcon className="w-6 fill-neutral-600" />
                            </button>
                            <button className="mt-[1%] bg-zinc-950 rounded-full w-7 ml-2  h-7">
                                <GtIcon className="w-6 fill-neutral-600 ml-[10%]" />
                            </button>


                            <div className="ml-[50%] flex items-center cursor-pointer">
                                <button className="mt-1 bg-zinc-950 rounded-full w-8 h-8 flex items-center justify-center">
                                    <AddIcon className="w-6 stroke-neutral-600" />
                                </button>
                                <h1 className="font-raleway mt-1 ml-1 text-xl text-blue-500">
                                    Add Card
                                </h1>
                            </div>
                        </h1>


                        <div className="flex flex-row  mr-1 m-8 mt-0 mb-0 h-[69%]">
                            <div className="flex justify-center items-center p-2 rounded-3xl w-[90%] bg-gradient-to-r from-sky-800 via-sky-900 to-sky-950 text-white">
                                card + card info
                            </div>
                            <div className="flex flex-col min-w-[30%]">
                                <div className="flex flex-col justify-center items-center h-[50%] mr-4 ml-4 mb-6 rounded-2xl bg-zinc-950 text-white p-2 w-[80%]">
                                    transfer
                                </div>
                                <div className="flex flex-col justify-center items-center h-[50%] mr-4 ml-4 rounded-2xl bg-zinc-950 text-white p-2 w-[80%] ">
                                    pay bill
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5 ml-14 rounded-3xl w-[40%] h-[46%]">
                        <h1 className="ml-3 font-oswald text-white flex flex-row items-center text-3xl p-8">
                            Recent Transactions
                            <button className="text-blue-500 font-raleway text-2xl ml-[49%]">
                                See All
                            </button>
                        </h1>

                        <div className="flex flex-col gap-y-6">
                            {mockTransaction.map((transaction) =>

                                <div className="flex justify-between text-white w-[90%] h-14 ml-[7%]">
                                    <div className="border border-zinc-900 rounded-xl w-[10%] h-30">
                                    </div>

                                    <h1 className="flex-1 font-raleway -mt-1 ml-2 p-2 text-xl truncate">
                                        {transaction.Description}
                                        <p className="ml-[1%] text-sm">{transaction.Category}</p>
                                    </h1>
                                    
                                    <h1 className="font-oswald ml-[30%] mr-3  text-md text-white">
                                        {transaction.Category === "Transfer" ? "-" : "+"} R$ {transaction.Price.toFixed(2)}
                                    </h1>

                                </div>
                            )}
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;
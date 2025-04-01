import Navbar from "../components/Navbar";
import { LtIcon, GtIcon, AddIcon } from "../components/Icons";


// add brilho nas setinha
//add bolinhas no card
// bigger width   
const Home = () => {

    const mockTransaction = [
        { Description: "Guitarra", Category: "Transfer", Price: 2000.00 },
        { Description: "Sanduiche pra Cecilia", Category: "Transfer", Price: 30.00 },
        { Description: "Uber", Category: "Transfer", Price: 30.00 },
    ]

    return (
        <>
            <div className=" min-h-[calc(100vh+170px)] flex flex-row bg-zinc-800 bg-zinc-950">
                <Navbar />
                <div className="flex flex-col w-screen">
                    <div className="mt-5 ml-20 rounded-l-3xl bg-card-black w-[40%] h-[37%]">
                        <h1 className="whitespace-nowrap ml-3 font-oswald text-white flex  items-center text-3xl p-8">
                            My card
                            <button className="mt-[1%] bg-zinc-950 rounded-full w-7 ml-3 h-7">
                                <LtIcon className="w-6 fill-neutral-600" />
                            </button>
                            <button className="mt-[1%] bg-zinc-950 rounded-full w-7 ml-2  h-7">
                                <GtIcon className="w-6 fill-neutral-600 ml-[10%]" />
                            </button>


                            <div className="ml-[49%] flex items-center cursor-pointer ">
                                <button className="mt-1 bg-zinc-950 rounded-full w-8 h-8 flex items-center justify-center">
                                    <AddIcon className="w-6 stroke-neutral-600" />
                                </button>
                                <h1 className="relative transition-all duration-300transition-all duration-300
    before:content-[''] before:absolute before:inset-0 before:rounded-md before:blur-md before:opacity-0
    before:transition-opacity before:duration-300 before:bg-blue-500
    hover:before:opacity-50 hover:text-blue-300
    before:content-[''] before:absolute before:inset-0 before:rounded-md before:blur-md before:opacity-0
    before:transition-opacity before:duration-300 before:bg-blue-500
    hover:before:opacity-50 hover:text-blue-300 font-raleway mt-1 ml-1 text-xl text-blue-500 ">
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
                    <div className="mt-5 ml-20 rounded-3xl w-[40%] ">
                        <h1 className="whitespace-nowrap font-oswald text-white flex flex-row  text-3xl p-5 ml-2">
                            Recent Transactions
                            <button className="relative transition-all duration-300transition-all duration-300
    before:content-[''] before:absolute before:inset-0 before:rounded-md before:blur-md before:opacity-0
    before:transition-opacity before:duration-300 before:bg-blue-500
    hover:before:opacity-50 hover:text-blue-300
    before:content-[''] before:absolute before:inset-0 before:rounded-md before:blur-md before:opacity-0
    before:transition-opacity before:duration-300 before:bg-blue-500
    hover:before:opacity-50 hover:text-blue-300 font-raleway mt-[1%] ml-[50%] text-xl text-blue-500">
                                See All
                            </button>
                        </h1>

                        <div className="flex flex-col gap-y-3 ">
                            {mockTransaction.map((transaction) =>

                                <div className="flex justify-between text-white w-[80%] h-14 ml-[5%]">
                                    <div className="border border-zinc-900 rounded-xl w-[11%] h-30">
                                    </div>

                                    <h1 className="flex-1 font-raleway -mt-1 ml-1 p-2 text-xl truncate">
                                        {transaction.Description}
                                        <p className="ml-[1%] text-sm">{transaction.Category}</p>
                                    </h1>

                                    <h1 className="-mr-14  font-oswald mt-2 text-md text-white">
                                        {transaction.Category === "Transfer" ? "-" : "+"} R$
                                        {transaction.Price.toFixed(2)}
                                    </h1>

                                </div>
                            )}
                        </div>


                    </div>
                    <div className="py-12 p-5  ml-20 rounded-l-3xl w-[40%] h-[37%]">
                        <h1 className="whitespace-nowrap font-oswald text-white flex flex-row  text-3xl p-3 ml-1">
                            My Savings
                            <button className="relative transition-all duration-300transition-all duration-300
    before:content-[''] before:absolute before:inset-0 before:rounded-md before:blur-md before:opacity-0
    before:transition-opacity before:duration-300 before:bg-blue-500
    hover:before:opacity-50 hover:text-blue-300
    before:content-[''] before:absolute before:inset-0 before:rounded-md before:blur-md before:opacity-0
    before:transition-opacity before:duration-300 before:bg-blue-500
    hover:before:opacity-50 hover:text-blue-300 font-raleway mt-[1%] ml-[68%] text-xl text-blue-500">
                                See All
                            </button>
                        </h1>
                        <div className="w-[90%] ml-8 flex flex-col ">
                            <div className="p-7  justify-center flex flex-col rounded-lg mt-2 bg-card-black h-32">
                                <div className="-mt-6 flex flex-row items-center">
                                    <div className="bg-zinc-950 flex items-center justify-center w-12 h-12  border border-zinc-900 rounded-lg ">
                                        🖥️
                                    </div>
                                    <h1 className="text-white font-oswald ml-4 text-xl truncate">
                                        My Dream PC
                                    </h1>
                                    <button className="absolute ml-[25%] bg-zinc-950 rounded-full w-6 h-7">
                                        <GtIcon className="w-6 fill-neutral-600" />
                                    </button>
                                </div>

                            </div>
                            


                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;
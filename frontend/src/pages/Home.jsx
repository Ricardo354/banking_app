import Navbar from "../components/Navbar";
import { LtIcon, GtIcon } from "../components/Icons";

const Home = () => {
    return (
        <>
            <div className="h-screen flex flex-row bg-zinc-800 bg-zinc-950">
                <Navbar />
                <div className="flex flex-col h-screen w-screen">
                    <div className="mt-20 ml-14 rounded-3xl bg-card-black w-[40%] h-[45%]">
                        <h1 className="ml-3 font-oswald text-white flex flex-row items-center text-3xl p-8">
                            My card
                            <button className="mt-[1%] bg-zinc-950 rounded-full w-7 ml-3 h-7">
                                <LtIcon className="w-6 fill-neutral-600" />
                            </button>
                            <button className="mt-[1%] bg-zinc-950 rounded-full w-7 ml-2  h-7">
                                <GtIcon className="w-6 fill-neutral-600 ml-[10%]" />
                            </button>
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
                    <div className="border border-white mt-5 ml-14 rounded-3xl w-[40%] h-[46%]"></div>
                </div>
            </div>
        </>
    )
}

export default Home;
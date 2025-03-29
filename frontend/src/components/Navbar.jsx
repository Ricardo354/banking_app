import { useState } from "react";
import walletIcon from "../assets/wallet.png";
import { HomeIcon, TransactionIcon, creditCardIcon, paymentsIcon} from "./Icons";

// ajeitar o ngç do stroke dinamismo

const menuItems = [

    { Nome: "Home", Icon: HomeIcon },
    { Nome: "Transactions", Icon: TransactionIcon },
    { Nome: "Cards" , Icon: creditCardIcon},
    { Nome:  "Payments", Icon: paymentsIcon}
]

const Navbar = () => {

    const [selected, setSelected] = useState("Home");

    return (
        <>
            <div className="flex flex-col items-center bg-zinc-900 min-h-screen max-w-[15%] gap-x-3 border-r-2 border-zinc-800">
                <div className="mt-3 gap-x-1 flex flex-row">
                    <img src={walletIcon} alt="wallet_icon" className="w-12 h-12 my-5" />
                    <h1 className="py-[19%] text-blue-500 font-fredoka text-2xl">
                        R1 Banking
                    </h1>
                </div>

                <div className="gap-y-4 flex flex-col mt-[23%]">
                    {menuItems.map((item) => (
                        <div className="cursor-pointer flex mr-20 ml-10">
                            <item.Icon className={`w-8 h-14 stroke-[1.5]${selected === item.Nome ? "fill-white stroke-white" : "fill-zinc-600 stroke-zinc-600 "}`} />
                            <h1 className={`ml-2 mt-4 text-xl ${selected === item.Nome ? "text-white" : "text-zinc-600"}`} onClick={() => setSelected(item.Nome)}>
                                {item.Nome}
                            </h1>
                        </div>
                    ))}

                </div>

            </div>


        </>
    )
}

export default Navbar;
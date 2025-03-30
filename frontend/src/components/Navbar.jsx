import { useState } from "react";
import walletIcon from "../assets/wallet.png";
import { HomeIcon, TransactionIcon, creditCardIcon, paymentsIcon, recipientIcon, settingsIcon } from "./Icons";

// ajeitar o ngç do stroke dinamismo

const menuItems = [

    { Nome: "Home", Icon: HomeIcon },
    { Nome: "Transactions", Icon: TransactionIcon },
    { Nome: "Cards", Icon: creditCardIcon },
    { Nome: "Payments", Icon: paymentsIcon },
    { Nome: "Recipients", Icon: recipientIcon },
    { Nome: "Settings", Icon: settingsIcon }
]

const Navbar = () => {

    const [selected, setSelected] = useState("Home");

    return (
        <>
            <div className="flex flex-col items-center bg-zinc-900 min-h-screen max-w-[15%] gap-x-3 border-r-2 border-zinc-800">
                <div className="mt-3 gap-x-1 flex flex-row mr-6">
                    <img src={walletIcon} alt="wallet_icon" className="w-12 h-12 my-5" />
                    <h1 className="py-[19%] text-blue-500 font-fredoka text-2xl">
                        R1 Banking
                    </h1>
                </div>
                <div className="gap-y-6 flex flex-col mt-[23%]">
                    {menuItems.map((item) => (
                        <>
                            <div className="flex flex-row cursor-pointer flex mr-20 ml-10" onClick={() => setSelected(item.Nome)}>
                                <item.Icon className={`w-8 h-14 ${selected === item.Nome ? "fill-white" : "fill-zinc-600"}`} />
                                <h1 className={`ml-2 mt-4 text-xl ${selected === item.Nome ? "text-white" : "text-zinc-600"}`}>
                                    {item.Nome}
                                </h1>
                                {selected === item.Nome && (
                                    <svg className="left-0 absolute -translate-x-[55%] fill-blue-600" viewBox="0 40 60 50" width={55} height={55}>
                                        <rect rx="10" ry="10" x="50" y="5" width="40" height="40" transform="rotate(45)" />
                                    </svg>
                                )}

                            </div>
                        </>
                    ))}
                    <div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;
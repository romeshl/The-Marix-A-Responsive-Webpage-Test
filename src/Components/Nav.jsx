import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { PiMatrixLogoFill } from "react-icons/pi";
import { useState, useEffect } from "react";


export default function Nav() {
    const [nav, setNav] = useState(false);

    useEffect(() => {
        window.addEventListener("resize", () => {
            if (window.innerWidth > 767) {
                setNav(false);
            }
        })
    }, []);

    const toggleMenu = () => {
        setNav(!nav);
    }

    return (

        <div className="relative z-10 font-mono select-none flex justify-between items-center uppercase  p-6  max-w-[1200px] mx-auto h-[100px]  text-green-500">
            <div className="flex items-center gap-2  text-green-400">

                <h1 className="font-Matrix text-4xl [text-shadow:_3px_1px_0_rgb(0_255_0_/_30%)] pl-5">The Matrix</h1>
            </div>

            <ul className="hidden md:flex justify-evenly items-center h-[90px] gap-[20px] cursor-pointer text-gray-300">
                <li className="text-center ease-in-out duration-200 border-green-950 hover:text-lg hover:text-green-300">Home</li>
                <li className="text-center ease-in-out duration-200 border-green-950 hover:text-lg hover:text-green-300">About</li>
                <li className="text-center ease-in-out duration-200 border-green-950 hover:text-lg hover:text-green-300">Contact</li>
                <li className="text-center py-3 w-[90px] rounded-xl ease-in-out duration-200 border
                     bg-black border-green-300 cursor-pointer hover:text-black hover:text-lg hover:border-green-300 hover:bg-green-500">Login</li>
            </ul >
            <div className="block cursor-pointer md:hidden" onClick={toggleMenu}>
                {!nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
            </div>
            <div className={nav ? "absolute z-10 top-[65px] right-0 ease-in-out duration-300 bg-black  uppercase rounded-xl opacity-70 border-2 border-green-950"
                : "absolute right-0 top-[-500px] ease-in-out duration-300 border-2  border-green-950"}>
                <ul className="flex flex-col  justify-center items-center px-5 py-3 cursor-pointer  text-gray-300"  >
                    <li className="text-center py-3 w-[120px] border-b-[2px] ease-in-out duration-200 border-green-950 hover:text-lg hover:text-green-300">Home</li>
                    <li className="text-center py-3 w-[120px] border-b-[2px] ease-in-out duration-200 border-green-950 hover:text-lg hover:text-green-300">About</li>
                    <li className="text-center py-3 w-[120px] border-b-[2px] ease-in-out duration-200 border-green-950  hover:text-lg hover:text-green-300">Contact</li>
                    <li className="text-center py-3 w-[90px] border rounded-lg ease-in-out duration-200 mt-2
                     bg-black border-green-300 cursor-pointer hover:text-black hover:text-lg hover:border-green-300 hover:bg-green-500">Login</li>
                </ul >
            </div>
        </div>

    )
}
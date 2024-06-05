import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState, useEffect } from "react";
import Overlay from "./Overlay";

export default function Nav() {
    const [nav, setNav] = useState(false);

    const [startOverlay, setStartOverlay] = useState(false);
    const [Clicked, setClicked] = useState("");

    const ToggleOverlay = () => {
        setStartOverlay(!startOverlay);
    }

    const HandleClick = (e) => {
        console.log(e.target.innerText)
        setClicked(e.target.innerText);
        ToggleOverlay();
        setNav(false);

    }


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
        <>
            <div className="relative z-10 select-none flex justify-between items-center self-end uppercase  p-2  max-w-[1200px] mx-auto h-[100px]  text-green-500
            md:p-6">
                <div className="flex items-center gap-2  text-green-400">

                    <h1 className="font-serif text-4xl [text-shadow:_3px_1px_0_rgb(0_255_0_/_30%)] pl-5">The Matrix</h1>
                </div>

                <ul className="font-mono font-bold hidden  h-[90px]
             md:flex md:justify-evenly md:items-center  md:gap-[20px] cursor-pointer text-gray-300">
                    <li className="text-center ease-in-out duration-200 border-green-950 
                hover:scale-105 hover:text-green-300" onClick={HandleClick}>Home</li>
                    <li className="text-center ease-in-out duration-200 border-green-950 
                hover:scale-105 hover:text-green-300" onClick={HandleClick}>About</li>
                    <li className="text-center ease-in-out duration-200 border-green-950 
                hover:scale-105 hover:text-green-300" onClick={HandleClick}>Contact</li>
                    <li className="text-center py-3 w-[90px] rounded-xl ease-in-out duration-200 border
                     bg-black border-green-300 cursor-pointer
                      hover:text-black hover:scale-105 hover:border-green-300 hover:bg-green-500"
                        onClick={HandleClick}>Login</li>
                </ul >
                <div className="block cursor-pointer 
            md:hidden" onClick={toggleMenu}>
                    {!nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
                </div>
            </div>

            <div className={nav ? "absolute z-20 top-[65px] right-0 ease-in-out duration-300 bg-black  uppercase rounded-xl opacity-80 border-2 border-green-950"
                : "absolute right-0 top-[-500px] ease-in-out duration-300 border-2  border-green-950"}>
                <ul className="font-mono font-bold flex flex-col  justify-center items-center px-5 py-3 cursor-pointer  text-gray-300"  >
                    <li className="text-center py-3 w-[120px] border-b-[2px] ease-in-out duration-200 border-green-950 
                    hover:scale-105 hover:text-green-300" onClick={HandleClick}>Home</li>
                    <li className="text-center py-3 w-[120px] border-b-[2px] ease-in-out duration-200 border-green-950 
                    hover:scale-105 hover:text-green-300" onClick={HandleClick}>About</li>
                    <li className="text-center py-3 w-[120px] border-b-[2px] ease-in-out duration-200 border-green-950 
                    hover:scale-105 hover:text-green-300" onClick={HandleClick}>Contact</li>
                    <li className="text-center py-3 w-[90px] border rounded-lg ease-in-out duration-200 mt-2
                     bg-black border-green-300 cursor-pointer
                     hover:text-black hover:scale-105 hover:border-green-300 hover:bg-green-500"
                        onClick={HandleClick}>Login</li>
                </ul >
            </div>
            <Overlay isOpen={startOverlay} onClose={ToggleOverlay} opacity={60}>
                <h3 className="p-6 text-green-300 font-mono uppercase font-bold">You clicked: {Clicked}</h3>
            </Overlay>

        </>

    )
}
// loads icons to be used in the mobile nav menu
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState, useEffect } from "react";
import Overlay from "./Overlay";

export default function Nav() {
    // sets and checks the status of the mobile nav menu
    const [nav, setNav] = useState(false);

    // set the status of the overlay
    const [startOverlay, setStartOverlay] = useState(false);

    // holds the text of the clicked link
    const [Clicked, setClicked] = useState("");

    // turns on or off the overlay
    const ToggleOverlay = () => {
        setStartOverlay(!startOverlay);
    }

    // handles clicked links
    const HandleClick = (e) => {
        console.log(e.target.innerText)
        setClicked(e.target.innerText);
        ToggleOverlay();
        setNav(false);
    }

    // adds an eventlistener to check the width of the window. This will close the mobile nav element if it's displays when width is adjusted
    useEffect(() => {
        window.addEventListener("resize", () => {
            if (window.innerWidth > 767) {
                setNav(false);
            }
        })
    }, []);

    // turns the mobile nav menu on and off
    const toggleMenu = () => {
        setNav(!nav);
    }

    return (
        <>
            {/* div holding nav bar components */}
            <div className="relative z-10 select-none flex justify-between items-center self-end uppercase  p-2  max-w-[1200px] mx-auto h-[100px]  text-green-500
            md:p-6">
                {/* title of the web page */}
                <div className="flex items-center gap-2  text-green-400">
                    <h1 className="font-serif text-4xl [text-shadow:_3px_1px_0_rgb(0_255_0_/_30%)] pl-5">The Matrix</h1>
                </div>
                { /* displays the menu if the screen width over 768px otherwise hides it. */}
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
                {/* displays icon when the screen width is less that 768px and toggles between Menu icon and close icon */}
                <div className="block cursor-pointer 
            md:hidden" onClick={toggleMenu}>
                    {!nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
                </div>
            </div>

            {/* displays and hides nav menu for medium and smaller devices */}
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
            {/* this overlay is used the display what links are clicked */}
            <Overlay isOpen={startOverlay} onClose={ToggleOverlay} opacity={70}>
                <h3 className="p-6 text-green-300 font-mono uppercase font-bold">You clicked: {Clicked}</h3>
            </Overlay>
        </>
    )
}
import { useState } from "react";
import Overlay from "./Overlay";

export default function Footer() {
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
    const Links = [
        {
            Title: "Links - A",
            Links: ["Link - A - 1", "Link - A - 2", "Link - A - 3", "Link - A - 4", "Link - A - 5"]
        },
        {
            Title: "Links - B",
            Links: ["Link - B - 1", "Link - B - 2", "Link - B - 3", "Link - B - 4", "Link - B - 5"]
        },
        {
            Title: "Links - C",
            Links: ["Link - C - 1", "Link - C - 2", "Link - C - 3", "Link - C - 4", "Link - C - 5"]
        }
    ]

    return (
        <>
            <div className="select-none font-mono flex flex-wrap justify-evenly gap-[20px] w-[85%] max-w-[1200px] 
        m-auto mt-[30px] [background-color:rgb(3_7_18_/_70%)] border-[1px] border-green-950 px-10
        rounded-t-3xl py-[50px] uppercase">
                {Links.map((link, index) => {
                    return (
                        <div className=" w-[60%] relative opacity-100 z-10
                    md:w-[45%]
                    lg:w-[30%]">
                            <h3 className="text-green-200 font-bold text-lg text-center" key={index}>{link.Title}</h3>
                            <ul className="cursor-pointer text-center">
                                {link.Links.map((url, i) => {
                                    return (
                                        <li className="text-green-300 py-2
                                    hover:scale-105 hover:text-green-200" key={i} onClick={HandleClick}>
                                            {url}
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    )
                })}
            </div>
            <Overlay isOpen={startOverlay} onClose={ToggleOverlay}>
                <h3 className="p-6 text-green-300 font-mono uppercase font-bold">You clicked: {Clicked}</h3>
            </Overlay>
        </>
    )
}
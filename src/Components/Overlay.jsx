
// image for closing x symbol
import { AiOutlineClose } from "react-icons/ai";

// Overlay component to display Login/Signup and message box
export default function Overlay({ isOpen, onClose, children, opacity = 100 }) {
    return (
        <>
            {/* Displays the component when isOpen is true*/}
            {isOpen && (
                <div>
                    {/* Background of the overlay */}
                    <div className={`opacity-${opacity} w-screen h-screen fixed top-0 left-0 cursor-pointer z-20 backdrop-blur-xl`} onClick={onClose} />
                    {/* Overlay container */}
                    <div className="bg-gray-950 opacity-70 fixed top-0 right-0 bottom-0 left-0 p-5 m-auto w-fit h-fit z-30 border-[1px] rounded-xl border-green-400 ">
                        {/* div holding the close image */}
                        <div >
                            <AiOutlineClose size={25}
                                className="border-0 absolute right-[15px] top-[15px]  cursor-pointer text-green-400"
                                onClick={onClose}
                            />
                        </div>
                        {/* components and elements to be displayed */}
                        {children}
                    </div>
                </div>
            )}
        </>
    );
}


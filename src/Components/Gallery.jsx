import PhotoCard from "./PhotoCard";

// left and right icons
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

import { useState } from "react";
import Overlay from "./Overlay";

// loads images in to variables from the gallery
import Matrix1 from "/gallery/Matrix-image1.jpg"
import Matrix2 from "/gallery/Matrix-image2.jpg"
import Matrix3 from "/gallery/Matrix-image3.jpg"
import Matrix4 from "/gallery/Matrix-image4.jpg"
import Matrix5 from "/gallery/Matrix-image5.jpg"
import Matrix6 from "/gallery/Matrix-image6.jpg"
import Matrix7 from "/gallery/Matrix-image7.jpg"
import Matrix8 from "/gallery/Matrix-image8.jpg"
import Matrix9 from "/gallery/Matrix-image9.jpg"
import Matrix10 from "/gallery/Matrix-image10.jpg"

export default function Gallery() {

    // this object contains all the images and their details
    const PhotoGallery = [
        {
            image: Matrix1,
            title: "Neo and Agent Smith shoot-off",
            description: "The Matrix (1999)"
        },
        {
            image: Matrix2,
            title: "Neo shooting.",
            description: "The Matrix (1999)"
        },
        {
            image: Matrix3,
            title: "Look at this spoon...",
            description: "The Matrix (1999)"
        },
        {
            image: Matrix4,
            title: "Morpheus calling...",
            description: "The Matrix (1999)"
        }, {
            image: Matrix5,
            title: "I know Kung-fu.",
            description: "The Matrix (1999)"
        },
        {
            image: Matrix6,
            title: "Red pill or the blue pill?",
            description: "The Matrix (1999)"
        }, {
            image: Matrix7,
            title: "Neo meets Morpheus.",
            description: "The Matrix (1999)"
        },
        {
            image: Matrix8,
            title: "Glitch in the Matrix.",
            description: "The Matrix (1999)"
        }, {
            image: Matrix9,
            title: "Waiting for that call...",
            description: "The Matrix (1999)"
        },
        {
            image: Matrix10,
            title: "The control panel.",
            description: "The Matrix (1999)"
        },
    ]

    // this is the state for the overlay start and end
    const [startOverlay, setStartOverlay] = useState(false);

    // this hold the index of the clicked photo
    const [ClickedIndex, setClickedIndex] = useState(0);

    // turns on and off the overlay
    const ToggleOverlay = () => {
        setStartOverlay(!startOverlay);
    }

    // update the index of the clicked photo and turn on the overlay
    const handleClick = (index) => {
        setClickedIndex(index);
        ToggleOverlay();
    }

    // moves to the previous photo
    const ShowPhotosBack = () => {
        if (ClickedIndex >= 1) {
            setClickedIndex(ClickedIndex - 1);
        }
    }

    // moves to the next photo
    const ShowPhotosForward = () => {
        if (ClickedIndex < PhotoGallery.length - 1) {
            setClickedIndex(ClickedIndex + 1);
        }
    }
    return (
        <>
            { /* This div holds the photos in PhotoCards */}
            <div className="select-none w-[85%] max-w-[1200px] px-4 pt-2 m-auto mt-[30px] h-[420px] 
                [scrollbar-color:rgb(50_255_0_/10%)_rgb(3_7_18_/90%)] overflow-auto flex flex-wrap justify-between gap-3 shadow-2xl">
                
                {/* Maps the photos and details from PhotoGallery object */}
                {PhotoGallery.map((photo, index) => (
                    <PhotoCard key={index} image={photo.image} title={photo.title} description={photo.description} clicked={() => handleClick(index)} />
                ))}
            </div>
            {/* Enlarges the clicked photo on the PhotoCard and displays on the overlay  */}
            <Overlay isOpen={startOverlay} onClose={ToggleOverlay} >
                <div className="flex mt-[40px] items-center justify-between select-none">
                    <AiFillCaretLeft size={50} className="text-green-300 hover:text-green-500 cursor-pointer" onClick={ShowPhotosBack} />
                    <img src={PhotoGallery[ClickedIndex].image} alt="" className="border-[1px] border-green-950 rounded-lg w-[85%]" />
                    <AiFillCaretRight size={50} className="text-green-300  hover:text-green-500 cursor-pointer" onClick={ShowPhotosForward} />
                </div>
                <div className="flex flex-col items-center justify-center mt-[10px] font-mono">
                    <p className="text-lg font-bold text-green-300">{PhotoGallery[ClickedIndex].title}</p>
                    <p className="text-green-300">{PhotoGallery[ClickedIndex].description}</p>
                </div>
            </Overlay>
        </>
    )

}
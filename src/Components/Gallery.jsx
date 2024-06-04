import PhotoCard from "./PhotoCard";

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

    return (
        <div className="select-none w-[85%] max-w-[1200px] pt-2 m-auto mt-[30px] h-[420px] 
        [scrollbar-color:rgb(3_7_18_/90%)_rgb(50_255_0_/10%)] overflow-auto flex flex-wrap justify-center gap-3 shadow-2xl">
            { PhotoGallery.map((photo, index) => (
                <PhotoCard key={index} image={photo.image} title={photo.title} description={photo.description} />
            )) }
  
        </div>
    )

}
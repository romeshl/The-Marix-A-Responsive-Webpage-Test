import PhotoCard from "./PhotoCard";

import Matrix1 from "../../public/gallery/Matrix-image1.jpg"
import Matrix2 from "../../public/gallery/Matrix-image2.jpg"
import Matrix3 from "../../public/gallery/Matrix-image3.jpg"
import Matrix4 from "../../public/gallery/Matrix-image4.jpg"
import Matrix5 from "../../public/gallery/Matrix-image5.jpg"
import Matrix6 from "../../public/gallery/Matrix-image6.jpg"
import Matrix7 from "../../public/gallery/Matrix-image7.jpg"
import Matrix8 from "../../public/gallery/Matrix-image8.jpg"
import Matrix9 from "../../public/gallery/Matrix-image9.jpg"
import Matrix10 from "../../public/gallery/Matrix-image10.jpg"

export default function Gallery() {
    
    return (
        <div className="w-[85%] max-w-[1200px] m-auto mt-[30px] flex flex-wrap justify-center gap-5 shadow-2xl">
            <PhotoCard image={Matrix1} />
            <PhotoCard image={Matrix2} />       
            <PhotoCard image={Matrix3} />
            <PhotoCard image={Matrix4} />
            <PhotoCard image={Matrix5} />
            <PhotoCard image={Matrix6} />
            <PhotoCard image={Matrix7} />
            <PhotoCard image={Matrix8} />
            <PhotoCard image={Matrix9} />
            <PhotoCard image={Matrix10} />
        </div>
    )

}
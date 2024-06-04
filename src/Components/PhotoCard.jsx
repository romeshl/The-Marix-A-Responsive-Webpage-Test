
export default function PhotoCard({image, title, description}) {
    return (
        <div className="w-[90%] p-1 border-[1px] border-green-950 rounded-xl ease-in-out duration-300
        xl:w-[32%]
        lg:w-[30%]
        md:w-[45%]
        hover:scale-105 hover:bg-green-500 hover:shadow-inner hover:ease-in-out hover:duration-300">
            <img src={image} alt={title} className="w-full h-full object-cover object-center rounded-xl" />
        </div>
    )
}
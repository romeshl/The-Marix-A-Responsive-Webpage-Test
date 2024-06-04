
export default function PhotoCard({image, title, description}) {
    return (
        <div className="font-mono text-[11px] uppercase flex flex-col w-[90%] p-1 border-[1px] border-green-950 rounded-xl ease-in-out duration-300
        xl:w-[32%]
        lg:w-[30%]
        md:w-[45%]
        hover:scale-105 hover:bg-green-900 hover:shadow-inner hover:ease-in-out hover:duration-300">
            <img src={image} alt={title} className="w-full h-[90%] object-cover object-center rounded-xl" />
            <p className="text-green-300"><span className="text-green-400 font-bold ">Title:</span> {title}</p>
            <p className="text-green-300"><span className="text-green-400 font-bold ">Description:</span> {description}</p>
        </div>
    )
}
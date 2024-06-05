

export default function PhotoCard({ image, title, description, clicked}) {

    return (
        <div className="font-mono text-[11px] uppercase flex flex-col w-[99%] p-1 border-[1px] border-green-950 rounded-xl ease-in-out duration-300
                xl:w-[32%]
                lg:w-[32%]
                md:w-[49%]
                hover:scale-105 hover:bg-green-300 hover:shadow-inner hover:ease-in-out hover:duration-300 hover:cursor-pointer"
        onClick={clicked}>
            <img src={image} alt={title} className="w-full h-[90%] object-cover object-center rounded-xl" />
            <p className="text-green-800"><span className="text-green-800 font-bold ">Title:</span> {title}</p>
            <p className="text-green-800 "><span className="text-green-800 font-bold ">Description:</span> {description}</p>
        </div>
    )
}
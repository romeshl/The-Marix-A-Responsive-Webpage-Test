export default function Footer() {

    const Links = [
        {
            Title: "Links - A",
            Links: ["Link - 1", "Link - 2", "Link - 3", "Link - 4", "Link - 5"]
        },
        {
            Title: "Links - B",
            Links: ["Link - 1", "Link - 2", "Link - 3", "Link - 4", "Link - 5"]
        },
        {
            Title: "Links - C",
            Links: ["Link - 1", "Link - 2", "Link - 3", "Link - 4", "Link - 5"]
        }
    ]

    return (
        <div className="select-none font-mono flex flex-wrap justify-evenly gap-[20px] w-[85%] max-w-[1200px] 
        m-auto mt-[30px] [background-color:rgb(3_7_18_/_70%)] border-[1px] border-green-950 px-10
        rounded-t-3xl py-[50px] uppercase">
            {Links.map((link, index) => {
                return (
                    <div className=" w-[60%] relative opacity-100 z-10 w-[150px]
                    md:w-[45%]
                    lg:w-[30%]">
                        <h3 className="text-green-200 font-bold text-lg text-center" key={index}>{link.Title}</h3>
                        <ul className="cursor-pointer text-center">
                            {link.Links.map((url, i) => {
                                return (
                                    <li className="text-green-300 py-2
                                    hover:scale-105 hover:text-green-200" key={i}>
                                        {url}
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                )
            })}
        </div>
    )
}
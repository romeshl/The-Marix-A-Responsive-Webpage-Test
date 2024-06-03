import { ReactTyped } from "react-typed";


export default function Hero() {
    return (
        <div className="relative z-9 text-center w-[80%] mx-auto text-white uppercase text-4xl font-Matrix [text-shadow:_3px_1px_0_rgb(0_255_0_/_30%)]">
            <ReactTyped strings={[`Ever have that feeling where you’re not sure if you’re awake or dreaming?” - Neo`, "My Name is Romesh Lankathilaka"]}
                typeSpeed={50} fadeOut={true} fadeOutDelay={700} backDelay={3000} loop />
        </div>
    )

}
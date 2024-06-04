import { useState } from "react";
import { ReactTyped } from "react-typed";
import Overlay from "./Overlay";


export default function Hero() {

    const [InputText, setInputText] = useState("");
    const [startOverlay, setStartOverlay] = useState(false);


    // Quotes to be displayed in the hero section
    const MatrixQuotes = [
        `“Ever have that feeling where you’re not sure if you’re awake or dreaming?”`,
        `“Do you believe in fate, Neo?”`,
        `“The Matrix is everywhere. It’s all around us.”`,
        `"A déjà vu is usually a glitch in the Matrix. It happens when they change something."`,
        `“Remember, all I’m offering is the truth. Nothing more."`,
        `“You hear that Mr. Anderson? That is the sound of inevitability!"`,
        `“There is no spoon.”`,
        `“What are you trying to tell me? That I can dodge bullets?”`,
        `“To deny our own impulses is to deny the very thing that makes us human.”`,
        `“What’s really going to bake your noodle later on is, would you still have broken it if I hadn’t said anything?”`,
        `“The body cannot live without the mind.”`,
        `“Shoot, shoot now, if you don't, he'll kill us both.”`,
        `“I do not believe it to be a matter of hope, it is simply a matter of time.”`,
        `“What do all men with power want? More power”`,
        `“I know Kung Fu!”`,
        `"Neo, Morpheus sacrificed himself so we could get you out. There is no way you're going back in."`,
        `“I don’t like the idea that I’m not in control of my own life.”`,
        `“Choice is an illusion created between those with power and those without.”`,
        `“You have to understand, most people are not ready to be unplugged.”`,
        `“Never send a human to do a machine's job.”`,
        `“You have to let it all go, Neo. Fear, doubt, and disbelief. Free your mind.”`,
        `“Dodge this.`,
        `“I know you're out there. I can feel you now. I know that you're afraid... you're afraid of us. You're afraid of change.”`,
        `“What happened happened and couldn’t have happened any other way.”`,
        `“All of our lives, we have fought this war.”`,
        `“If I were you, I would hope we don't meet again.”`,
        `“Go ahead, Shoot. The best thing about being me, is there so many mes!”`,
        `“He's doin' his Superman thing.”`,
        `"I have dreamed a dream, but now that dream is gone from me.”`,
        `“I envy you. But such a thing is not meant to last.”`,
        `“Trinity. I know you can hear me. I'm never letting go. I can't. I just love you too damn much.”`,
        `“I wish you could see yourself, Mr. Anderson. Blind Messiah, helpless. Pathetic.”`,
        `“If that's true, then I've made a mistake, and you should kill me now.”`,
        `“Why, Mr. Anderson? Why? Why do you persist?”`,
        `“The program Smith has grown beyond your control…You cannot stop him... but I can.”`,
        `“I think you're gonna have to drive.”`,
        `“There are only two possible explanations: either no one told me, or no one knows.”`,
        `"You wanna make a deal? How about this? You give me Neo or we all die, right here, right now."`,
        `“I have imagined this moment for a long time. Is it real?”`,
    ];

    const ToggleOverlay = () => {
        setStartOverlay(!startOverlay);
    }

    const handleChange = (e) => {
        setInputText(e.target.value);
    }

    const handleEnter = (e) => {
        e.preventDefault();
        ToggleOverlay();
    }

    return (
        <>
        <div className="relative z-10 font-mono mt-[20px] w-[90%] mx-auto text-green-200 uppercase [text-shadow:_4px_2px_0_rgb(0_255_0_/_30%)]
         lg:flex lg:justify-between lg:mt-[50px]">
            <div className="flex items-center h-40 text-xl text-center 
            sm:2xl
            md:text-3xl
            lg:text-4xl lg:text-left lg:w-[70%]" >
                <ReactTyped strings={MatrixQuotes}
                    typeSpeed={60} shuffle={true} backSpeed={30} backDelay={5000} loop className="py-auto" />
            </div>
            <form className="flex justify-center  gap-2 
            lg:flex-col lg:w-[25%] lg:items-center">
                    <input type="text" placeholder="Search The Matrix" className="w-[40%] text-center border border-green-500 bg-gray-200
                lg:w-[80%] text-gray-950" onChange={handleChange} required={true} />
                <button type="submit" onClick={handleEnter} className="w-[40%] border border-green-800 rounded-md px-10 py-1
                lg:w-[80%]
                 hover:bg-green-500 hover:text-black uppercase" >Enter</button>
            </form>
            </div>
            <Overlay isOpen={startOverlay} onClose={ToggleOverlay}>
                <h3 className="p-6 text-green-300 font-mono uppercase font-bold">You searched for : {InputText ? InputText: "Nothing."}</h3>
            </Overlay>
        </>
    )

}
import  imgOne  from "../images/desktop/image-interactive.jpg"
import  imgPhoneOne  from "../images/mobile/image-interactive.jpg"
const w =window.innerWidth > 768
export default function () {
   

    return(
        <div className=" md:flex  px-10 py-16  md:px-20 md:py-40 justify-center md:items-center">
            <img src={w ? imgOne : imgPhoneOne} className=" m-auto md:m-0 w-2/3" ></img>
            <div className=" md:w-1/2 w-full md:mt-48  p-16  pb-0 bg-white md:text-sm text-2xl " style={{ transform: w ? "translateX(-130px)" : "translateX(0px)" }}>
               <h1 className=" md:text-5xl font-semibold text-center uppercase mb-4 md:text-left md:font-extralight"> The leader in interactive VR</h1>
               <p className=" text-gray-400 text-center text-xs md:text-left">  Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.</p>
            </div>
        </div>
    )
}
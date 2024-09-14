import  imgOne  from "../images/desktop/image-interactive.jpg"

export default function () {
    return(
        <div className=" flex  pr-20 pl-20 pt-40 pb-40 justify-center items-end">
            <img src={imgOne } className=" w-2/3"></img>
            <div className=" w-1/2 p-16  pb-0 bg-white text-sm " style={{transform:"translateX(-130px)"}}>
               <h1 className=" text-5xl uppercase mb-4 font-extralight"> The leader in interactive VR</h1>
               <p className=" text-gray-400 ">  Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.</p>
            </div>
        </div>
    )
}
export default function ({src,tital}) {
    return(
        <div className="crtionBox relative cursor-pointer ">
        <img src={src} className=" w-full"></img>
        <h1 className=" text-3xl pl-10 max-w-12  text-white font-extralight absolute"> {tital} </h1>
        </div>
    )
}
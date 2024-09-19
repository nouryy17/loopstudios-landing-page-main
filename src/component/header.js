import img from "../images/logo.svg"
import "../style/HEADER.sass"
export default function () {
    return (
        <header className="  px-10 md:px-20">
          <div className=" flex justify-between  pt-3 pb-3 h-20 items-center "> 
          <img src={img} className=" w-fit"></img>
            <nav className=" flex-1">
                <ul className=" md:flex  md:djustify-end ">
                      <li className=" lg:mr-16 "><a className=" text-white cursor-pointer ">About</a></li>
                      <li className=" lg:mr-16 "><a className=" text-white cursor-pointer ">Careers </a></li>
                      <li className=" lg:mr-16 "><a className=" text-white cursor-pointer ">Events </a></li>
                      <li className=" lg:mr-16 "><a className=" text-white cursor-pointer ">Products </a></li>
                      <li className=" lg:mr-16 "><a className=" text-white cursor-pointer ">Support </a></li>
                </ul>
            </nav>
            <span className=" md:hidden ">
            <svg width="20" className=" cursor-pointer activ absolute" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M17.778.808l1.414 1.414L11.414 10l7.778 7.778-1.414 1.414L10 11.414l-7.778 7.778-1.414-1.414L8.586 10 .808 2.222 2.222.808 10 8.586 17.778.808z" fill="#FFF" fill-rule="evenodd"/></svg>
            <svg width="24" className=" cursor-pointer absolute" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="#FFF" fill-rule="evenodd"><path d="M0 0h24v2H0zM0 7h24v2H0zM0 14h24v2H0z"/></g></svg>

            </span>
          </div >
          <div className="title m-auto md:m-0 md:flex md:justify-start items-center md:max-w-lg flex">
               <h1 className=" text-white font-light  outline p-5  text-5xl uppercase md:text-6xl">Immersive experiences that deliver </h1>
          </div>
        </header>
    )
}
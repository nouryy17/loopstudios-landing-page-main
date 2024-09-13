import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faBars} from "@fortawesome/free-solid-svg-icons"
import { faXmark} from "@fortawesome/free-solid-svg-icons"
import img from "../images/logo.svg"
import "../style/HEADER.sass"
export default function () {
    return (
        <header className="  pr-20 pl-20">
          <div className=" flex justify-between  pt-3 pb-3 h-20 items-center "> 
          <img src={img} className=" w-fit"></img>
            <nav className=" flex-1">
                <ul className=" flex  justify-end ">
                      <li className=" lg:mr-16 "><a className=" text-white cursor-pointer hover:underline  ">About</a></li>
                      <li className=" lg:mr-16 "><a className=" text-white cursor-pointer hover:underline  "> Careers </a></li>
                      <li className=" lg:mr-16 "><a className=" text-white cursor-pointer hover:underline  "> Events </a></li>
                      <li className=" lg:mr-16 "><a className=" text-white cursor-pointer hover:underline  "> Products </a></li>
                      <li className=" lg:mr-16 "><a className=" text-white cursor-pointer hover:underline  "> Support </a></li>
                </ul> 
            </nav>
            <span className=" md:hidden">
            <FontAwesomeIcon icon={faBars}  className=" absolute"/>
            <FontAwesomeIcon icon={faXmark} className=" absolute" />
            </span>
          </div >
          <div className=" flex justify-start items-center max-w-xl">
               <h1 className=" text-white outline p-10 font-bold text-6xl">Immersive experiences that deliver </h1>
          </div>
        </header>
    )
}
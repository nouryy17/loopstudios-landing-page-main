import CRTIONBOX from "./crtionBox"
import "../style/cretionPart.sass"
import imgOne from "../images/desktop/image-deep-earth.jpg"
import imgTow from "../images/desktop/image-night-arcade.jpg"
import imgThree from "../images/desktop/image-soccer-team.jpg"
import imgFour from "../images/desktop/image-grid.jpg"
import imgFaif from "../images/desktop/image-from-above.jpg"
import imgSxe from "../images/desktop/image-pocket-borealis.jpg"
import imgSven from "../images/desktop/image-curiosity.jpg"
import imgEt from "../images/desktop/image-fisheye.jpg"
export default function () {
    return (
        <div className=" p-20">
            <div className=" flex justify-between mb-4">
                <h1 className=" text-5xl uppercase font-extralight ">  Our creations </h1>
                <button class=" mr-5 uppercase text-gray-700 px-10 py-1 border-x-2 border-y-2 border-gray-800"> see all</button>
            </div>
            <div className=" grid lg:grid-cols-4 gap-2">
                <CRTIONBOX src={imgOne} tital={"Deep earth"}></CRTIONBOX>
                <CRTIONBOX src={imgTow} tital={" Night arcade"}></CRTIONBOX>
                <CRTIONBOX src={imgThree} tital={"  Soccer team VR"}></CRTIONBOX>
                <CRTIONBOX src={imgFour} tital={" The grid"}></CRTIONBOX>
                <CRTIONBOX src={imgFaif} tital={"From up above VR "}></CRTIONBOX>
                <CRTIONBOX src={imgSxe} tital={"Pocket borealis"}></CRTIONBOX>
                <CRTIONBOX src={imgSven} tital={"The curiosity"}></CRTIONBOX>
                <CRTIONBOX src={imgEt} tital={"Make it fisheye"}></CRTIONBOX>
            </div>

        </div>
    )
}
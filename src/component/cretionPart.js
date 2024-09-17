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
import imgphoneOne from "../images/mobile/image-deep-earth.jpg"
import imgphoneTow from "../images/mobile/image-night-arcade.jpg"
import imgphoneThree from "../images/mobile/image-soccer-team.jpg"
import imgphoneFour from "../images/mobile/image-grid.jpg"
import imgphoneFaif from "../images/mobile/image-from-above.jpg"
import imgphoneSxe from "../images/mobile/image-pocket-borealis.jpg"
import imgphoneSven from "../images/mobile/image-curiosity.jpg"
import imgphoneEt from "../images/mobile/image-fisheye.jpg"
const w = window.innerWidth > 1000
console.log(w)
export default function () {
    return (
        <div className=" p-20">
            <div className=" flex justify-between mb-4">
                <h1 className=" text-5xl uppercase font-extralight ">  Our creations </h1>
                <button class=" mr-5 uppercase text-gray-700 px-10 py-1 border-x-2 border-y-2 border-gray-800"> see all</button>
            </div>
            <div className=" grid  lg:grid-cols-4 gap-2">
                <CRTIONBOX src={w ? imgOne  : imgphoneOne } tital={"Deep earth"}></CRTIONBOX>
                <CRTIONBOX src={w ? imgTow  : imgphoneTow } tital={" Night arcade"}></CRTIONBOX>
                <CRTIONBOX src={w ? imgThree  : imgphoneThree } tital={"  Soccer team VR"}></CRTIONBOX>
                <CRTIONBOX src={w ? imgFour  : imgphoneFour } tital={" The grid"}></CRTIONBOX>
                <CRTIONBOX src={w ? imgFaif  : imgphoneFaif } tital={"From up above VR "}></CRTIONBOX>
                <CRTIONBOX src={w ? imgSxe  : imgphoneSxe } tital={"Pocket borealis"}></CRTIONBOX>
                <CRTIONBOX src={w ? imgSven  : imgphoneSven } tital={"The curiosity"}></CRTIONBOX>
                <CRTIONBOX src={w ? imgEt  : imgphoneEt } tital={"Make it fisheye"}></CRTIONBOX>
            </div>

        </div>
    )
}
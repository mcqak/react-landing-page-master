import ShapedButton from "../common/ShapedButton/ShapedButton";
import React from "react";
import "./SecondImageCropping.css"
import frame from "../../assets/images/Frame.png"

export default function SecondImageCropping() {
    return <div className={"secondCroppingWrapper"}>
        <div className={"secondCroppingContent"}>
            <div className={"secondCroppingImageContainer"}>
                <img src={frame} alt={"Frame"}/>
            </div>
            <div className={"secondCroppingContentTitle"}>
                <h3>Intelligent</h3>
                <h2>Intelligent Image Cropping - Automatic & Accurate</h2>
                <p>With our built-in intelligent image cropping technology, generate creative variants on demand with
                    elements that stay focused, clear, and original in all sizes you want.</p>
                <ShapedButton/>
            </div>
        </div>
    </div>
}

import ShapedButton from "../common/ShapedButton/ShapedButton";
import React from "react";
import "./ImageCropping.css"
import vectorArrow from "../../assets/images/VectorArrow.png"
import frame from "../../assets/images/Frame.png"

export default function ImageCropping() {
    return <div className={"croppingWrapper"}>
        <div className={"croppingContent"}>
            <div className={"croppingContentTitle"}>
                <h3>Intelligent</h3>
                <h2>Intelligent Image Cropping - Automatic & Accurate</h2>
                <p>With our built-in intelligent image cropping technology, generate creative variants on demand with
                    elements that stay focused, clear, and original in all sizes you want.</p>
                <ShapedButton/>
            </div>
            <div className={"croppingArrowImageContainer"}>
                <img src={vectorArrow} alt={"Arrow"}/>
            </div>
            <div className={"croppingImageContainer"}>
                <img src={frame} alt={"Frame"}/>
            </div>
        </div>
    </div>
}

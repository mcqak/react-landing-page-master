import React from "react";
import "./BrandCircle.css"
import ecoBrandImage from "../../../../assets/images/ecosystem-image-1.svg"

export default function BrandCircle(props) {
    return <div className={"brandCircleContainer"}>
        <img src={ecoBrandImage} alt={"brand"}/>

        <div className={props.classStyle}>
            <h3>Centralized Brand Assets</h3>
        </div>
    </div>
}

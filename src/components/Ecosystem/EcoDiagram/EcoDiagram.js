import React from "react";
import "./EcoDiagram.css"
import BrandCircle from "./BrandCircle/BrandCircle";
import ecoMainIcon from "../../../assets/images/EcoMainIcon.png"

export default function EcoDiagram() {
    return <div className="ecoContainer">
        <div className="sideElems">
            <BrandCircle classStyle={"topVector"}/>
            <BrandCircle classStyle={"topVector"}/>
            <BrandCircle classStyle={"centerVector"}/>
            <BrandCircle classStyle={"bottomVector"}/>
            <BrandCircle classStyle={"bottomVector"}/>
        </div>
        <div className="mainCircle">
            <img src={ecoMainIcon} alt={"EcoIcon"}/>
        </div>
        <div className="sideElems last">
            <BrandCircle classStyle={"topVector"}/>
            <BrandCircle classStyle={"topVector"}/>
            <BrandCircle classStyle={"centerVector"}/>
            <BrandCircle classStyle={"bottomVector"}/>
            <BrandCircle classStyle={"bottomVector"}/>
        </div>
    </div>
}

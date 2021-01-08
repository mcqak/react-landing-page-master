import React from "react";
import {ShapedButtonBlue} from "../common/ShapedButton/ShapedButton";
import "./Portfolio.css"
import PortfolioCard from "./PortfolioCard/PortfolioCard";
import backImg from "../../assets/images/image 17.png"
import backImg2 from "../../assets/images/image 15.png"
import backImg3 from "../../assets/images/image 14.png"


export default function Portfolio(){
    return <div className={"portfolioWrapper"}>
        <div className={"portfolioTitle"}>
            <h2>Portfolio</h2>
            <h1>Case studies</h1>
        </div>
        <div className={"portfolioCards"}>
            <PortfolioCard url={backImg}/>
            <PortfolioCard url={backImg2}/>
            <PortfolioCard url={backImg3}/>
        </div>
        <ShapedButtonBlue/>
    </div>
}

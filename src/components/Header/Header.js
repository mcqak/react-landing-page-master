import React from "react";
import "./Header.css"
import Navigation from "../Navigation/Navigation";
import mediaImg from "../../assets/images/MediaPlayer.png"
import mediaPlay from "../../assets/images/icon-play.png"
import ShapedButton from "../common/ShapedButton/ShapedButton";

export default function Header() {
    return <div>
        <div className={"wrapper"}>
            <Navigation/>
            <div className={"mainTitleContainer"}>
                <h2>Way beyond ad optimization</h2>
                <h1>Build For Exponential Business Growth</h1>
                <ShapedButton/>
            </div>
            <div className={"flexMediaWrapper"}>
                <div className={"mediaBlock"}>
                    <img src={mediaImg} alt={"Media"} style={{width:"100%", backgroundSize:"cover"}}/>
                    <img src={mediaPlay} alt={"Play"} className={"playIcon"}/>
                </div>
            </div>
        </div>
    </div>
}

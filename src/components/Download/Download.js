import React from "react";
import "./Download.css"
import image from "../../assets/images/Asset 1@4x.png"
import downloadIcon from "../../assets/images/Download.png"

export default function Download() {
    return <div className={"downloadWrapper"}>
        <div className={"downloadContainer"}>
            <div>
                <img src={image} alt={"Logo"}/>
            </div>
            <div className={"downloadTitle"}>
                <h1>Create Efficient Workflows </h1>
                <p>Share, track, review and approve all activities in one place. Customize workflows and take quick
                    decisions to eliminate process bottlenecks, and swiftly complete tasks.</p>
            </div>
            <div className={"downloadIconBox"}>
                <img src={downloadIcon} alt={"Download"}/>
                <p>Download</p>
            </div>
        </div>
    </div>
}

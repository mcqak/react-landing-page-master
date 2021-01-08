import React from "react";
import "./EmailBox.css"


export default function EmailBox() {
    return <div className={"emailWrapper"}>
        <div className={"emailContent"}>
            <div className={"emailTitle"}>
                <h1>Technology That Intelligently Understands Your Creatives</h1>
                <h2>Store, Create, Collaborate & Enhance Your Creatives - All From One Tool</h2>
            </div>
            <div className={"emailField"}>
                <input type="text" placeholder="Enter Your Email address"/>
                <button type="submit">Book a demo</button>
            </div>
        </div>
    </div>
}

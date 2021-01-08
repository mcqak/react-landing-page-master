import React from "react";
import "./Testimonials.css"
import bankIcon from "../../assets/images/image 13.png"

export default function Testimonials() {
    return <div className={"testimonialsWrapper"}>
        <div className={"testimonialsContainer"}>
            <div className={"testimonialsTitle"}>
                <h3>Testimonials</h3>
                <h1>5000+ happy clients all around the world</h1>
            </div>
            <div className={"testimonialsBox"}>
                <img src={bankIcon} alt={"Bank"}/>
                <p>“We used to manually work on creatives for campaigns in all sizes and languages in Photoshop – the
                    entire process would take four designers one week. Now with Pyxis, we can get the same amount done
                    with just one designer in 3 days!</p>
                <h3>- Sherley, Creative Manager, HDFC Bank.</h3>
            </div>
        </div>
    </div>
}

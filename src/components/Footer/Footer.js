import React from "react";
import "./Footer.css"
import logo from "../../assets/images/coloredLogo.png"
export default function Footer() {
    return <div className={"footerWrapper"}>
        <div className={"footerContent"}>
            <img src={logo} alt={"Logo"}/>
            <div className={"textContainer"}>
                <h1>DAM</h1>
                <h2>Brand Guidelines</h2>
                <h2>Smart Creative Automatic</h2>
                <h2>Collaboration & Creative Approvals</h2>
            </div>
            <div className={"textContainer"}>
                <h1>Resources</h1>
                <h2>Blog</h2>
                <h2>Success Stories</h2>
                <h2>Whitepapers</h2>
            </div>
            <div className={"textContainer"}>
                <h1>About Us</h1>
                <h2>Founder</h2>
                <h2>Invester</h2>
                <h2>Client</h2>
            </div>
            <div className={"textContainer"}>
                <h1>Help & Contact</h1>
                <h2>Contact Us</h2>
                <h2>help@pyxispm.com</h2>
            </div>
            <div className={"textContainer"}>
                <h3>Subscribe</h3>
                <h2>Sign up with your email address to receivenews and updates.</h2>
            </div>
        </div>
        <div className={"footerCopy"}>
            <p>© 2020 Aiquire.Inc. All Copyrights reserved.</p>
        </div>
    </div>
}

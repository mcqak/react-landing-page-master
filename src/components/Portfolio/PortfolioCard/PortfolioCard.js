import React from "react";
import "../Portfolio.css"
import statusBar from "../../../assets/images/statusBar.png"

export default function PortfolioCard(props){
    return <div className={"portfolioCardContainer"} style={{backgroundImage: `url("${props.url}")`}}>
        <img src={statusBar} alt={"statusBar"}/>
        <h3>Far far away, behind the word mountains</h3>
        <button>Continue Reading</button>
    </div>

}

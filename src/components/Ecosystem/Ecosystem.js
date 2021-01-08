import React from "react";
import "./Ecosystem.css"
import EcoDiagram from "./EcoDiagram/EcoDiagram";
import EcoTitle from "./EcoTitle/EcoTitle";
import EcoCard from "./EcoCard/EcoCard";
import cardImg1 from "../../assets/images/Screenshot 2020-11-13 at 6.29 1.png"
import cardImg2 from "../../assets/images/Screenshot 2020-11-13 at 6.29 2.png"
import cardImg3 from "../../assets/images/Screenshot 2020-11-13 at 6.29 3.png"

export default function Ecosystem() {
    return <div className={"ecoWrapper"}>
        <EcoTitle />
        <div className={"ecoDiagramContainer"}>
            <EcoDiagram/>
        </div>
        <div className={"ecoCardsContainer"}>
            <EcoTitle />
            <div className={"ecoCardsList"}>
                <EcoCard image={cardImg3}/>
                <EcoCard image={cardImg1}/>
                <EcoCard image={cardImg2}/>
                <EcoCard image={cardImg3}/>
                <EcoCard image={cardImg1}/>
                <EcoCard image={cardImg2}/>
            </div>
        </div>
    </div>
}

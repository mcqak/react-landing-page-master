import React from "react";
import "../Ecosystem.css"

export default function EcoCard(props) {
    return <div className={"ecosystemCard"}>
        <h3>Lead Generation</h3>
        <img src={props.image} alt={"card"}/>
    </div>
}

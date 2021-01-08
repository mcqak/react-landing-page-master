import React from "react";
import "../StorageReality.css"
import cardIcon from "../../../assets/images/cardIcon.svg";


export default function StorageRealityCard(props) {
    return <div className={"storageRealityCardContainer"}>
        <img src={cardIcon} alt={"icon"}/>
        <h2>{props.procent}</h2>
        <p>{props.description}</p>
    </div>
}

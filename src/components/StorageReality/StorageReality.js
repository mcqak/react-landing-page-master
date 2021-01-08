import React from "react";
import "./StorageReality.css"
import StorageRealityCard from "./StorageRealityCard/StorageRealityCard";


export default function StorageReality() {
    return <div className={"storageRealityWrapper"}>
        <div className={"storageRealityTitle"}>
            <h1>The Storage Reality of Organizations</h1>
        </div>
        <div className={"storageRealityCards"}>
            <StorageRealityCard procent={"21%"} description={"Files are not protected in anyway"}/>
            <StorageRealityCard procent={"41%"} description={"Companies have 1000+ sensitive folders open to all"}/>
            <StorageRealityCard procent={"10K+"} description={"Files are lost on team systems"}/>
        </div>
    </div>
}

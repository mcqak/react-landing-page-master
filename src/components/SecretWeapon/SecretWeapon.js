import React from "react";
import "./SecretWeapon.css"
import SecretWeaponCard from "./SecretWeaponCard/SecretWeaponCard";


export default function SecretWeapon(props){
    return <div className={"secretWeaponWrapper"}>
        <div className={"secretWeaponTitle"}>
            <h1>The secret weapon of 30,000+ advertisers</h1>
        </div>
        <div className={"secretWeaponCards"}>
            <div className={"secretCardRow"}>
                <SecretWeaponCard shadowBox={props.shadowBox}/>
                <SecretWeaponCard shadowBox={props.shadowBox}/>
                <SecretWeaponCard shadowBox={props.shadowBox}/>
                <SecretWeaponCard shadowBox={props.shadowBox}/>
            </div>
            <div className={"secretCardRow"}>
                <SecretWeaponCard shadowBox={props.shadowBox}/>
                <SecretWeaponCard shadowBox={props.shadowBox}/>
                <SecretWeaponCard shadowBox={props.shadowBox}/>
                <SecretWeaponCard shadowBox={props.shadowBox}/>
            </div>
        </div>
    </div>

}

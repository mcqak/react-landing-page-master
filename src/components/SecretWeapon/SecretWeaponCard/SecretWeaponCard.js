import React from "react";
import "../SecretWeapon.css"
import cardIcon from "../../../assets/images/cardIcon.svg"

export default function SecretWeaponCard(props) {
    return <div className={props.shadowBox? "secretWeaponCardContainer CardShadow" : "secretWeaponCardContainer"}>
        <img src={cardIcon} alt={"icon"}/>
        <h2>SMB</h2>
        <p>An affordable solution for scaling any business</p>
    </div>
}

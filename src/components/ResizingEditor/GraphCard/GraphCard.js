import React from "react";
import "../ResizingEditor.css"

export default function GraphCard(props) {

    let Images = props.images.map(el => (<img src={el.src}  alt={"graph"} key={el.key}/>));

    return <div className={"graphCard"}>
        {Images}
    </div>
}

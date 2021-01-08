import {Button} from "react-bootstrap";
import React from "react";
import "./ShapedButton.css"


export default function ShapedButton(){
    return <Button className={"shapedButton"}>Book A Demo</Button>
}

export function ShapedButtonBlue(){
    return <Button className={"shapedButtonBlue"}>View All</Button>
}

import React from "react";
import ShapedButton from "../common/ShapedButton/ShapedButton";
import GraphCard from "./GraphCard/GraphCard";
import "./ResizingEditor.css"
import graph1 from "../../assets/images/Graph1.png"
import graph2 from "../../assets/images/Graph2.png"
import graph3 from "../../assets/images/Graph3.png"
import graph4 from "../../assets/images/Graph4.png"
import graph5 from "../../assets/images/Graph5.png"
import graph6 from "../../assets/images/Graph6.png"
import graph7 from "../../assets/images/Graph7.png"
import graph8 from "../../assets/images/Graph8.png"


export default function ResizingEditor() {
    return <div className={"editorWrapper"}>
        <div className={"editorTitle"}>
            <h1>Everything Smart Is Now Within Your Scope</h1>
        </div>
        <div className={"editorContent"}>
            <div className={"editorContentTitle"}>
                <h3>Resizing Editor</h3>
                <h2>Effortless Multi-Channel Resizing - Without Compromising On Quality</h2>
                <p>Generate multiple size variants with a single click. Select one or many design templates and resize
                    them for every channel automatically.</p>
                <ShapedButton/>
            </div>
            <div className={"advDataGraphsContainer"}>
                <div className={"advGraphRow"}>
                    <GraphCard images={[{src: graph1, key: 1}]}/>
                    <GraphCard images={[{src: graph2, key: 2}, {src: graph3, key: 3}]}/>
                    <GraphCard images={[{src: graph8, key: 4}]}/>
                </div>
                <div className={"advGraphRow"}>
                    <GraphCard images={[{src: graph4, key: 5}, {src: graph5, key: 6}]}/>
                </div>
                <div className={"advGraphRow"}>
                    <GraphCard images={[{src: graph6, key: 7}]}/>
                    <GraphCard images={[{src: graph7, key: 8}]}/>
                </div>

            </div>
        </div>
    </div>
}

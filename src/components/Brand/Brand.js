import React from "react";
import "./Brand.css"
import line from "../../assets/images/Line.png"
import brand1 from "../../assets/images/Brands/Airtel.png"
import brand2 from "../../assets/images/Brands/apollo.png"
import brand3 from "../../assets/images/Brands/Bajaj.png"
import brand4 from "../../assets/images/Brands/Iffco tokio.png"
import brand5 from "../../assets/images/Brands/DBS.png"
import brand6 from "../../assets/images/Brands/Inshort.png"
import brand7 from "../../assets/images/Brands/Licious.png"
import brand8 from "../../assets/images/Brands/Loreal.png"
import brand9 from "../../assets/images/Brands/Mama earth.png"
import brand10 from "../../assets/images/Brands/Max life.png"
import brand11 from "../../assets/images/Brands/Medfin.png"
import brand12 from "../../assets/images/Brands/Miko.png"
import brand13 from "../../assets/images/Brands/MPL.png"
import brand14 from "../../assets/images/Brands/Rapido.png"
import brand15 from "../../assets/images/Brands/Iffco tokio.png"
import brand16 from "../../assets/images/Brands/Bajaj.png"


export default function Brand() {
    return <div className={"brandWrapper"}>
        <div className={"brandContainer"}>
            <h1>Brands That Trust Pyxis</h1>
            <div className={"brandLine"}><img src={line} alt={"line"}/></div>
            <div className={"brandList"}>
                <img src={brand1} alt={"brand"}/>
                <img src={brand2} alt={"brand"}/>
                <img src={brand3} alt={"brand"}/>
                <img src={brand4} alt={"brand"}/>
                <img src={brand5} alt={"brand"}/>
                <img src={brand6} alt={"brand"}/>
                <img src={brand7} alt={"brand"}/>
                <img src={brand8} alt={"brand"}/>
                <img src={brand9} alt={"brand"}/>
                <img src={brand10} alt={"brand"}/>
                <img src={brand11} alt={"brand"}/>
                <img src={brand12} alt={"brand"}/>
                <img src={brand13} alt={"brand"}/>
                <img src={brand14} alt={"brand"}/>
                <img src={brand15} alt={"brand"}/>
                <img src={brand16} alt={"brand"}/>
            </div>
        </div>
    </div>
}

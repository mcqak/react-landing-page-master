import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Ecosystem from "./components/Ecosystem/Ecosystem";
import ResizingEditor from "./components/ResizingEditor/ResizingEditor";
import SecretWeapon from "./components/SecretWeapon/SecretWeapon";
import ImageCropping from "./components/ImageCropping/ImageCropping";
import SecondImageCropping from "./components/SecondImageCropping/SecondImageCropping";
import StorageReality from "./components/StorageReality/StorageReality";
import Portfolio from "./components/Portfolio/Portfolio";
import Download from "./components/Download/Download";
import Testimonials from "./components/Testimonials/Testimonials";
import Brand from "./components/Brand/Brand";
import EmailBox from "./components/EmailBox/EmailBox";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <div className={"app-wrapper"}>
            <Header/>
            <Ecosystem/>
            <ResizingEditor/>
            <SecretWeapon shadowBox={false}/>
            <ImageCropping/>
            <SecretWeapon shadowBox={true}/>
            <SecondImageCropping/>
            <StorageReality/>
            <Portfolio />
            <SecretWeapon shadowBox={true}/>
            <Download/>
            <Testimonials/>
            <Brand/>
            <EmailBox/>
            <Footer/>
        </div>
    );
}

export default App;

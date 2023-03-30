import React from "react";
import SData from "./Sdata";
import Card from "./Cards";

const Hotstar = () => {
    return (
    <Card 
        key = {SData[0].id}
        imgsrc={SData[0].imgsrc} 
        title = {SData[0].title}
        sname = {SData[0].sname}
        link = {SData[0].link} 
    />
    );
}

export default Hotstar;
import React from "react";
import SData from "./Sdata";
import Card from "./Cards";

const Tvf = () => {
    return (
        <Card 
        key = {SData[2].id}
        imgsrc={SData[2].imgsrc} 
        title = {SData[2].title}
        sname = {SData[2].sname}
        link = {SData[2].link} 
    />
    );
}
export default Tvf;
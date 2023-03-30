import React from "react";
import {Add, Sub, Mul, Div} from "./Calculator";
function CalcApp()  {
    return (
        <>
            <ol>
            <li> Sum of two numbers is : {Add( 4, 5)}</li>
            <li> Subtract of two numbers is : {Sub(10,12)}</li>
            <li> Multiolication of two no's is : {Mul(4, 5)}</li>
            <li> Division of two no's : {Div(10, 3)}</li>
        </ol>
        </>
    );
}

export default CalcApp;
import React, { useState } from "react";
// import AddIcon from '@mui/icons-material/Add';
import AddIcon from '@mui/icons-material/Add';
import { Add } from "@material-ui/icons";

const IncDcrApp = () => {
    
    const [num, setNum] = useState(0); 

    const incNum = () => {
        setNum(num+1);
   };

   const dcrNum = () => {
    if(num === 1)
    alert("Zero reached");
    else
    setNum(num-1);
   };
    return(
        <>
            <div className="main_div">
                <div className="center_div">
                    <h1> {num} </h1>
                    <div className="btn_div">
                        <button onClick={incNum} > <Add/> </button>
                        <button onClick={dcrNum} > <AddIcon/> </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default IncDcrApp;  
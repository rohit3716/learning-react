import React, { useState } from "react";

const ClickMeApp = () => {
    // const state = useState();

    const [count, setCount] = useState(0);

    const IncNum = () => {
        setCount(count + 1);
    };

    return (
        <>  <div className="container">
            <h1 className="num"> {count} </h1>
            <button className="btn" onClick={IncNum} > Click Me </button>
            </div>
        </>
    );
}



export default ClickMeApp;
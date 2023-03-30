import React, { useState } from "react";



const GetTimeApp = () => {
    let newTime = new Date().toLocaleTimeString();
    const [time, setTime] = useState(newTime);

    const UpdateTime = () => {
      let newCTime = new Date().toLocaleTimeString();
        setTime(newCTime);
    }


    return (
        <>  
            <div className="container">
            <h1 className="time">{time}</h1>
            <button className="btn" onClick={UpdateTime}>GET TIME</button>
            </div>
        </>
    );
}

export default GetTimeApp;


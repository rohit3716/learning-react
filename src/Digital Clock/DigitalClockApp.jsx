import React, { useState } from "react";

const DigitalClockApp = () => {

    let time = new Date().toLocaleTimeString();

    const [ctime, setTime] = useState(time);

    const UpdateTime = () => {
        time = new Date().toLocaleTimeString();
        setTime(time);
    };

    setInterval(UpdateTime,1000);

    return (
        <>
            <h1 className="container">{ctime}</h1>
        </>
    );
}

export default DigitalClockApp;
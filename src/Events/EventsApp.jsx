import React, { useState } from "react";

const EventsApp = () => {
    const purple = "#8e44ad";
    const [bg, setBg] = useState(purple);
    const [name, setName] = useState("click Me")
    const bgChange = () => {
        let newBg = "#34495e"
        setBg(newBg);
        setName('Ouch!! 🦊')
    };

    const bgBack = () => {
        setBg(purple);
        setName('Ayyo!! 🦊');
    };

    return (
        <>
            <div style={ {backgroundColor : bg}}>
                <button onMouseEnter={bgChange} onMouseLeave= {bgBack}> 
                    {name}
                </button>
            </div>
        </>
    );
};

export default EventsApp;
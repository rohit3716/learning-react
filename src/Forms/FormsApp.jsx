import React, { useState } from "react";

const FormsApp = () => {
    
    const [fullName, setFullName] = useState({
        fname:"",
        lname:"",
        email:"",
        phone:"",
        qual:""
    });

    const inputEvent = (event) => {
        // console.log(event.target.value);
        // console.log(event.target.name);


        const {name, value} = event.target;

        setFullName((prevValue) => {

            console.log(prevValue);

            return {
                ...prevValue,
                [name] : value,
            };
            // if(name === 'fName') {
            //     return {
            //         fname:value,
            //         lname:prevValue.lname,
            //         email:prevValue.email,
            //         phone:prevValue.phone
            //     };
            // }
            // else if ( name === 'lName') {
            //     return {
            //         fname:prevValue.fname,
            //         lname:value,
            //         email:prevValue.email,
            //         phone:prevValue.phone
            //     };
            // }
            // else if ( name === 'email') {
            //     return {
            //         fname:prevValue.fname,
            //         lname:prevValue.value,
            //         email:value,
            //         phone:prevValue.phone
            //     };
            // }
            // else if ( name === 'phone') {
            //     return {
            //         fname:prevValue.fname,
            //         lname:prevValue.lname,
            //         email:prevValue.email,
            //         phone:value
            //     };
            // }
        });
    };
 

    const onSubmits = (event) => {
        event.preventDefault();
        alert("Form Submitted");
    };

    

   
    
    return ( 
        <>
            <form onSubmit={onSubmits}>
            <div>
                <h1>Hello, {fullName.fname} {fullName.lname} </h1>
                <p>{fullName.email}</p>
                <p>{fullName.phone}</p>
                <p>{fullName.qual}</p>
                <input type= 'text' 
                placeholder="Enter Your first Name" 
                name= "fname" 
                onChange={inputEvent} 
                value={fullName.fname} 
                /> 
                <br/>
                <input
                    type="text"
                    placeholder="Enter Your Last name"
                    name= "lname"
                    onChange={inputEvent}
                    value = {fullName.lname}
                />
                <input
                    type="email"
                    placeholder="Enter Your email"
                    name= "email"
                    onChange={inputEvent}
                    value = {fullName.email}
                />
                <input
                    type="number"
                    placeholder="Enter Your phone no."
                    name= "phone"
                    onChange={inputEvent}
                    value = {fullName.phone}
                />
                <input
                    type="text"
                    placeholder="Enter Your Highest Qualification"
                    name= "qual"
                    onChange={inputEvent}
                    value = {fullName.qual}
                />
                <button type="submit" > Submit Me 👍</button>
            </div>
            </form>
        </>
        );
};

export default FormsApp;
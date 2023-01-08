import React from "react";
import { useState } from "react";

export const DemoStates_2=()=>{
    const [show,setShow]= useState(true);


    // const handleShow=()=>{
    //     if(show===false)setShow(true);
    //     else setShow(false)
    // } Here we are anonymous inline function.

    return (

        <>
        <button onClick={()=>{
            setShow(!show)
        }}>
        Show/Hide</button>
        
        {show &&<h1>I am show text</h1>}
        </>
    );
}
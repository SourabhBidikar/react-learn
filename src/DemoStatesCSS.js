import React from "react";
import { useState } from "react";

export const DemoStatesCSS=()=>{

    const [textColor,setTextColor]=useState("blue");




    return(
        <>
        <button onClick={()=>{
            setTextColor(textColor==="blue"?"red":"blue")} }>
                
        Change Style
        </button>
        <h2 style={{color: textColor}}>Text for CSS manipulation using useState</h2>
        
        </>
    );
}
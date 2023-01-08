import React from "react";
import { useState,useEffect } from "react";


const DemoUseeffect1 = () => {
  
    const [text,setText]=useState("");
  

    useEffect(()=>{
        console.log("Component mounted"); 

        return ()=>{
            console.log("Component Unmounted");
        };
    },[]);

    
    const handleChange=(event)=>{
        setText(event.target.value)
    }
  
    return (
    <div>
        <h1>{text}</h1><input type="text" onChange={handleChange} />
      
    </div>
  );
}

export default DemoUseeffect1;

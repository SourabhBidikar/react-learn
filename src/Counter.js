import React from "react";
import { useState } from "react";


export const Counter=()=>{
    const [count,setCount]=useState(0);

    const handleIncrease=()=>{
        setCount(count+1)
    }

    const handleDecrease=()=>{
        setCount(count-1)
    }


    return(
        <div>
        <button onClick={handleIncrease}>Increase Count</button>
        
        <button onClick={handleDecrease}>Decrease Count</button>
        
        <button onClick={()=>{setCount(0)}}>Set Count to 0</button>

        <h2>{count}</h2>
        </div>
    );
}
import Axios from 'axios';
import React from "react";
import { useState,useEffect } from "react";

export const AgeGenerator=()=>{

    const [name,setName]=useState("Sourabh");
    const [age,setAge]=useState(null);
    
    const getData=()=>{
        Axios.get(`https://api.agify.io/?name=${name}`)
        .then((res)=>{
            setAge(res.data);
        });

    };

    return(
        <>
        <input placeholder="Sourabh" type="text" onChange={(event)=>{
            setName(event.target.value)
        }}/>

        <button onClick={getData}>Predict Age: </button>
        <h1>Predicted Name: {age?.name}</h1>
        <h1>Predicted Age: {age?.age}</h1>
        <h1>Predicted Count: {age?.count}</h1>
        </>
    );
} 
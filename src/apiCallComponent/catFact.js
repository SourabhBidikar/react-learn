import React, { useEffect, useState } from "react";
import Axios from 'axios';




export const CatFact=()=>{

    // fetch("https://catfact.ninja/fact")
    // .then((res)=>res.json())
    // .then((data)=>{
    //     console.log(data);
    // })


    // Axios.get("https://catfact.ninja/fact")
    // .then((res)=>{
    //     console.log(res.data)
    // })
    // now while calling api be it with fetch or axios the calls  will happen
    // continously if we present like above so make use of useEffect with []
    // so that it will run on mount only and also in return() kill it so for clean up

   

    const [fact,setFact]=useState();

    const fetchFact=()=>{
         
        Axios.get("https://catfact.ninja/fact")
        .then((res)=>{
            setFact(res.data.fact)
        })
    }

    useEffect(()=>{
        fetchFact();
    },[]);

    return(
        <div>

            
            <button onClick={fetchFact}>Generate Cat Fact</button>
            <p>{fact}</p>
        </div>
    );

}
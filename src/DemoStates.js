import React from 'react'
import {
    useState
} from 'react'



export const DemoStates = () => {

    
    // -----------------------------------------------------------------
    // This doesn't work even though we are changing value of count
    // react still reders '0'. so for this we use useState hook and Set
    // the state
    // let count = 0
    // let increaseCount = () => {
    //     count = count + 1;
    //     console.log(count);
    // }
    // -----------------------------------------------------------------

    const [count, setCount] =useState(0);  //sets initial value to 0
    //setCount function is used to change the state based on our logic.

    const [myName, setName]=useState("");
   


    let increaseCount = () => {
        setCount(count+1);
    }

    let handleOnChange=(event)=>{
        setName(event.target.value)
    }

    return ( 
        <div>
            <button onClick = {increaseCount} > Increase Count </button>
                {count} 

            <input  type="text" onChange={handleOnChange}/>
        
            <h3>Your name is: {myName}</h3>
        
        </div>
    )
}
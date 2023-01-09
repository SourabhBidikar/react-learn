import React, { useContext, useState } from 'react'
import { AppContext } from '../App'

const Changeprofile = () => {

    const {setUsername} = useContext(AppContext);
    const [newUserName, setNewUserName] = useState("")

 

  return (
    <div>
    
        <input type="text" onChange={(event)=>{ 
                setNewUserName(event.target.value)
        }} />

        <button onClick={()=>{
            
            setUsername(newUserName);
        }}>Switch Profile</button>
    </div>
  )
}

export default Changeprofile;

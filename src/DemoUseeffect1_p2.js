import React, { useState } from 'react'
import DemoUseeffect1 from './DemoUseeffect1';

const DemoUseeffect1_p2 = () => {
  
    const [show,setShow]=useState(false);

  
  
    return (
    <div>
      
      {show&&<DemoUseeffect1/>}

      <button onClick={()=>{setShow(!show)}}>Show/hide</button>
      
    </div>
  )
}

export default DemoUseeffect1_p2;

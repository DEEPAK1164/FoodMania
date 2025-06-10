import React, { useState } from 'react';


const ImpHooks = () => {
    const[text,setText]=useState("");
    console.log("Rendering...");


  return (
    <div className="box">
     <input onChange={(e)=>setText(e.target.value)}/>
    </div>
  );
}

export default ImpHooks;

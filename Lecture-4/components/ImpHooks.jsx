import React, { useMemo, useState } from 'react';
import { nthPrime } from '../utils/prime';


const ImpHooks = () => {
    const[num,setNum]=useState(0);
    const[isDark,setIsDark]=useState(false);
    console.log("Rendering...");


    // this fn is heavy operation so I want to memoige the result(value) of this heavy operation
     
  // const prime=()=>{
  //   console.log("calculating prime number of ",num)
  //   return nthPrime(num);
  // }

 const prime=useMemo(()=>nthPrime(num),[num]);
   
  return (
    <div className="box" style={{ backgroundColor: isDark ? "#222" : "#fff",
    color: isDark ? "#fff" : "#000",
    width: "200px",
    height: "200px",
    border: "1px solid gray",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "20px auto",
    borderRadius: "10px",}}>
    <div>
      <input type='number' value={num} onChange={(e)=>setNum(e.target.value)}/>
     <div>
      {/* <h1>nth Prime : {prime()}</h1> */}
        <h1>nth Prime : {prime}</h1>
     </div>
     <button onClick={()=>setIsDark(!isDark)}>Toggle</button>
    </div>
    </div>

  );
}

export default ImpHooks;

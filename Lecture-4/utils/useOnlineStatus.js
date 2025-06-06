import React, { useState , useEffect} from 'react'

function useOnlineStatus() {
    const [onlineStatus,setOnlineStatus]=useState(true);

    //check if online
     useEffect(()=>{
      window.addEventListener("offline",()=>{
          setOnlineStatus(false);
      });

       window.addEventListener("online",()=>{
          setOnlineStatus(true);
      })


     },[])
     
     //return boolean value
     return onlineStatus
}

export default useOnlineStatus

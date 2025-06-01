import { useEffect, useState } from "react";
import applogo from "../assets/applogo.png"; // 👈 Correct path from Header.jsx
import { Link } from "react-router-dom";

console.log(applogo);

const Header=()=>{
    const[btnNameReact,setBtnNameReact]=useState("Login");
     console.log("Header Rendered!");

    //when there is no dependency array useeffect called after every re render of the component
    //  useEffect(()=>{
    //   console.log("useEffect Called");
    //  })

     // when there is empty dependency array then useEffect will get call only on initial render of the component.
    //    useEffect(()=>{
    //   console.log("useEffect Called");
    //  },[])

     // when dependency array depends on some dependency then useEffect will get call only when that particular dependency changes.
      useEffect(()=>{
      // console.log("useEffect Called");
     },[btnNameReact])




    return <div className="header">

    <div className="logo-container">
     <img className="logo" src={applogo} alt="applogo" />
    </div>

    <div className="nav-items">
       <ul>
       <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
              <li>Cart</li>
              <button className="login" onClick={()=>{
                 btnNameReact==="Login"?setBtnNameReact("Logout"):setBtnNameReact("Login");
              }}>
               {btnNameReact}
              </button>
     </ul>
    </div>
    
    </div>
}

export default Header;
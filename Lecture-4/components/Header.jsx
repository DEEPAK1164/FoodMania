import { useContext, useEffect, useState } from "react";
// import applogo from "../assets/applogo.png"; // 👈 Correct path from Header.jsx
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
// console.log(applogo);

const Header=()=>{
    const[btnNameReact,setBtnNameReact]=useState("Login");
    const onlineStatus=useOnlineStatus();
    const data=useContext(UserContext);
    console.log(data);//object
    const{loggedInUser}=data;
   //   console.log("Header Rendered!");

    //when there is no dependency array useeffect called after every re render of the component
    //  useEffect(()=>{
    //   console.log("useEffect Called");
    //  })

     // when there is empty dependency array then useEffect will get call only on initial render of the component.
    //    useEffect(()=>{
    //   console.log("useEffect Called");
    //  },[])

     // when dependency array depends on some dependency then useEffect will get call only when that particular dependency changes.
      // useEffect(()=>{
      // console.log("useEffect Called");
   //   },[btnNameReact])

//subscribing to the store using useSelector Hook which gives acces to appStore
//here we are subscribing to cartSlice with name cart and its items
const cartItems = useSelector((store)=>store.cart.items); //['burger','momos',...etc]




    return <div className="header">
{/* 
    <div className="logo-container">
     <img className="logo" src={applogo} alt="applogo" />
    </div> */}

    <div className="nav-items">
       <ul>
       <li>Online Status: {onlineStatus?"🟢":"🔴"}</li>
       <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/grocery">Our Grocery Store</Link></li>
              <li>
               <Link to="/cart">Cart ({cartItems.length})</Link>
              </li>
             
             
              <button className="login" onClick={()=>{
                 btnNameReact==="Login"?setBtnNameReact("Logout"):setBtnNameReact("Login");
              }}>
               {btnNameReact}
              </button>
               <li>{loggedInUser}</li>
     </ul>
    </div>
    
    </div>
}

export default Header;
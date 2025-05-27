import applogo from "../assets/applogo.png"; // 👈 Correct path from Header.jsx

console.log(applogo);

const Header=()=>{
    return <div className="header">

    <div className="logo-container">
     <img className="logo" src={applogo} alt="applogo" />
    </div>

    <div className="nav-items">
       <ul>
        <li>Home</li>
          <li>About</li>
            <li>Contact Us</li>
              <li>Cart</li>
     </ul>
    </div>
    
    </div>
}

export default Header;
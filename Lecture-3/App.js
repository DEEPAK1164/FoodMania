         
         import React from "react"; //importing react from node module
         import ReactDOM from "react-dom/client"; //importing react-dom from node module
       
        //Lets Write above in JSX (Developer Friendly Syntax)
    
        const heading=<h1 id="heading" className="myHeading">Welcome! to Food Mania</h1>


         const root=ReactDOM.createRoot(document.getElementById("root"));
        root.render(heading);

         
         import React from "react"; //importing react from node module
         import ReactDOM from "react-dom/client"; //importing react-dom from node module
       import Header from "./components/Header.jsx";
import Body from "./components/Body.jsx";


        const AppLayout=()=>{
            return <div className="app">

            {/* Header */}
            <Header/>


            {/* Body */}
             <Body/>

            {/* Footer */}

          </div>
         }

        const root=ReactDOM.createRoot(document.getElementById("root"));
        root.render(<AppLayout/>);

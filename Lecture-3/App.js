         
         import React from "react"; //importing react from node module
         import ReactDOM from "react-dom/client"; //importing react-dom from node module
       

        // Understanding Functional Components
        // functional component is normal javaScript function
        // which return some piece of JSX elements
        const HeadingComponent=()=>{
            return <div className="container">
                <h1 id="heading">Hello! React Functional Component</h1>;
            </div>
        }


        const root=ReactDOM.createRoot(document.getElementById("root"));
        root.render(<HeadingComponent/>);

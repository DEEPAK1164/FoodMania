         
      import React from "react"; //importing react from node module
      import ReactDOM from "react-dom/client"; //importing react-dom from node module
      import Header from "./components/Header.jsx";
      import Body from "./components/Body.jsx";
      import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
      import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Error from "./components/Error.jsx";
import RestaurentMenu from "./components/RestaurentMenu.jsx";

        const AppLayout=()=>{
            return <div className="app">

            {/* Header */}
            <Header/>


            {/* Body */}
             {/* <Body/> */}
             <Outlet/>



            {/* Footer */}

          </div>
         }

         const appRouter=createBrowserRouter([
          {
            path:"/",
            element:<AppLayout/>,
            children:[
                 {
                  path:"/",
                  element:<Body/>
                 },
                 {
                 path:"/about",
                 element:<About/>
                },
                 {
                  path:"/contact",
                  element:<Contact/>
                 },
                 {
                  // dynamic routing based on resId
                  path:"/restaurent/:resId",
                  element:<RestaurentMenu/>
                 }
            ],
            errorElement:<Error/>
          },
         ])

        const root=ReactDOM.createRoot(document.getElementById("root"));
        root.render(<RouterProvider router={appRouter}/>);

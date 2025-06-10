         
      import React, {lazy, Suspense, useEffect, useState} from "react"; //importing react from node module
      import ReactDOM from "react-dom/client"; //importing react-dom from node module
      import Header from "./components/Header.jsx";
      import Body from "./components/Body.jsx";
      import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
      import About from "./components/About.jsx";
      import Contact from "./components/Contact.jsx";
      import Error from "./components/Error.jsx";
      import RestaurentMenu from "./components/RestaurentMenu.jsx";
      import UserContext from "./utils/UserContext.jsx";
      import { Provider } from "react-redux";
      import appStore from "./Store/appStore.js";
import Cart from "./components/Cart.jsx";
import ImpHooks from "./components/ImpHooks.jsx";

      const Grocery=lazy(()=>import("./components/Grocery.jsx"));



        const AppLayout=()=>{
         const[userName,setUserName]=useState();

         useEffect(()=>{
          //make api call
          const data={
            name:"Deepak Maurya",
          }
          setUserName(data.name);
         },[])



            return( 
              <Provider store={appStore}>
              {/* //providing userContext to root level can use React>provider for Header only also */}
           <UserContext.Provider value={{loggedInUser:userName,setUserName}}>
            <div className="app">
            {/* Header */}
            <Header/>
            {/* Body */}
             {/* <Body/> */}
             <Outlet/>
            {/* Footer */}
           </div>
           </UserContext.Provider>
           </Provider>)
        
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
                  path:"/grocery",
                  element:<Suspense fallback={<h1>Grocery store loading...</h1>}><Grocery/></Suspense>
                 },
                 {
                  // dynamic routing based on resId
                  path:"/restaurent/:resId",
                  element:<RestaurentMenu/>
                 },
                 {
                     path:"/cart",
                  element:<Cart/>
                 },
                 {
                   path:"/imphooks",
                   element:<ImpHooks/>
                 }
            ],
            errorElement:<Error/>
          },
         ])

        const root=ReactDOM.createRoot(document.getElementById("root"));
        root.render(<RouterProvider router={appRouter}/>);

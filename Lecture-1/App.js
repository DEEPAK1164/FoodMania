
        //job of core react
        const heading=React.createElement("h1",{id:"heading"},"Welcome! to Food Mania"); //heading is an object

        //job of react dom
        const root=ReactDOM.createRoot(document.getElementById("root"));


        root.render(heading);//render mathod convert the heading object into heading tag and put into the dom
        //note:what is the {} object inside the createElement it is the place where we give attributes to our tag that is let give h1 a id with name heading 

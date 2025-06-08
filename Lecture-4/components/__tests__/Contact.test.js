import {render,screen} from "@testing-library/react";
import Contact from "../Contact";
test("Should load contact us component",()=>{
    //Note: whenever testing UI component inside react you will have to render that component on JSDOM 1st of all
   render(<Contact/>);
   const heading=screen.getByRole("heading");
   expect(heading).toBeInTheDocument();
})
import {render,screen} from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";


// test("Should load Contact component",()=>{
//     //Note: whenever testing UI component inside react you will have to render that component on JSDOM 1st of all
//    render(<Contact/>);
//    const heading=screen.getByRole("heading");

//    //to check whether component is loaded or not ?
//    expect(heading).toBeInTheDocument();
// })

// test("Should load button inside Contact component",()=>{
//     //Note: whenever testing UI component inside react you will have to render that component on JSDOM 1st of all
//    render(<Contact/>);
//    const button=screen.getByRole("button");

//    //to check whether component is loaded or not ?
//    expect(button).toBeInTheDocument();
// })


// test("Should load input with name field Contact component",()=>{
//     //Note: whenever testing UI component inside react you will have to render that component on JSDOM 1st of all
//    render(<Contact/>);
//    const inputName=screen.getByPlaceholderText("Enter your name");

//    //to check whether component is loaded or not ?
//    expect(inputName).toBeInTheDocument();
// })



// test("Should load all input field in Contact component",()=>{
//     //Note: whenever testing UI component inside react you will have to render that component on JSDOM 1st of all
//    render(<Contact/>);
//    const inputBoxes=screen.getAllByRole("textbox");//array of inputs

//    //to check whether component is loaded or not ?
//  inputBoxes.forEach((input) => {
//   expect(input).toBeInTheDocument();
// });

// })

// we can do group testing also


describe("Contact Us Page Test Cases",()=>{

it("Should load Contact component", ()=>{
    //Note: whenever testing UI component inside react you will have to render that component on JSDOM 1st of all
   render(<Contact/>);
   const heading=screen.getByRole("heading");

   //to check whether component is loaded or not ?
   expect(heading).toBeInTheDocument();
})

it("Should load button inside Contact component", ()=>{
    //Note: whenever testing UI component inside react you will have to render that component on JSDOM 1st of all
   render(<Contact/>);
   const button=screen.getByRole("button");

   //to check whether component is loaded or not ?
   expect(button).toBeInTheDocument();
})

it("Should load input with name field Contact component", ()=>{
    //Note: whenever testing UI component inside react you will have to render that component on JSDOM 1st of all
   render(<Contact/>);
   const inputName=screen.getByPlaceholderText("Enter your name");

   //to check whether component is loaded or not ?
   expect(inputName).toBeInTheDocument();
})

it("Should load all input field in Contact component", ()=>{
    //Note: whenever testing UI component inside react you will have to render that component on JSDOM 1st of all
   render(<Contact/>);
   const inputBoxes=screen.getAllByRole("textbox");//array of inputs

   //to check whether component is loaded or not ?
 inputBoxes.forEach((input) => {
  expect(input).toBeInTheDocument();
});

})

})
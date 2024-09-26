import { render ,screen} from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";


test("Should load button inside  contact  component", ()=>{

    render(<Contact/>);

    const button = screen.getByRole("submit");

    const heading = screen.getByRole("heading");


    //assertion
expect(button).toBeInTheDocument();

expect(heading).toBeInTheDocument();
});

test("should load input inside contact compnent",()=>{
    render(<Contact/>);

    const inputName = screen.getByRole("name");

    expect(inputName).toBeInTheDocument();


});


test("Should load i/p boxeson the contact component",()=>{
    render(<Contact/>);

    const inpboxes = screen.getAllByRole("input");

    console.log(inpboxes);

    //assertion

    expect(inpboxes.length).not


});
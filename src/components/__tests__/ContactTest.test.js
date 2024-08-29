import { screen ,render} from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

test("should component loaded heading",()=>{

  render(<Contact/>);

const headingTitle=screen.getByText("Contact Us Page")

expect(headingTitle).toBeInTheDocument()

})

test("should load button in contact page",()=>{

  render(<Contact/>);

  const button=screen.getByRole("button",{name:"Submit"});

expect(button).toBeInTheDocument()
})

test("should have two input field",()=>{
  render(<Contact/>);
  const name=screen.getByPlaceholderText("name");
  const message=screen.getByPlaceholderText("message");

  expect(name).toBeInTheDocument();
  expect(message).toBeInTheDocument();
})


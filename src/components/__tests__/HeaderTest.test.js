import { render, screen,fireEvent } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

describe("testing of header component",()=>{
    it("should render login button in header components", () => {
        render(
          <BrowserRouter>
            <Provider store={appStore}>
              <Header />
            </Provider>
          </BrowserRouter>
        );
      
        const loginButton = screen.getByRole("button", { name: "Login" });
      
        expect(loginButton).toBeInTheDocument();
      });
      
      it("Should render Header Component with a Cart items 0", () => {
        render(
          <BrowserRouter>
            <Provider store={appStore}>
              <Header />
            </Provider>
          </BrowserRouter>
        );
      
        const cart=screen.getByText("Cart - (0 items)");
      
        expect(cart).toBeInTheDocument()
      
      
      });
      
      it("Should render Header Component with a Cart item ", ()=>{
          
          render(<BrowserRouter>
          <Provider store={appStore}>
              <Header/>
          </Provider>
          </BrowserRouter>)
      
          const heading= screen.getByText(/Cart/);
      
          expect(heading).toBeInTheDocument()
      })
      
      it("Should change Login Button to Logout on click",()=>{
          render(<BrowserRouter>
          <Provider store={appStore}>
              <Header/>
          </Provider>
          </BrowserRouter>)
      
          const loginButton=screen.getByRole("button",{name:"Login"});
      
          expect(loginButton).toBeInTheDocument();
      
          fireEvent.click(loginButton);
      
          const logoutButton=screen.getByRole("button",{name:"Logout"});
      
          expect(logoutButton).toBeInTheDocument()
      
      })
})


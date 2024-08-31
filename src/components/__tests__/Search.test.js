import { screen,render } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResListData.json";
import "@testing-library/jest-dom";
import {act} from "react-dom/test-utils"
import { BrowserRouter } from "react-router-dom";

console.log(MOCK_DATA,"MockData")

global.fetch = jest.fn(() => {
    return Promise.resolve({
      json: () => {
        return Promise.resolve(MOCK_DATA);
      },
    });
  });

  it("Should Search Res List for burger text input ", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );
  
    const cardsBeforeSearch =await screen.findAllByTestId("resCard");
  
    // expect(cardsBeforeSearch.length).toBe(20);
  
    // const searchBtn =await screen.findByRole("button", { name: "Search" });
  
    // const searchInput =await screen.findByTestId("searchInput");
  
    // fireEvent.change(searchInput, { target: { value: "burger" } });
  
    // fireEvent.click(searchBtn);
  
    // const cardsAfterSearch =await screen.findAllByTestId("resCard");
  
    // expect(cardsAfterSearch.length).toBe(4);
  });


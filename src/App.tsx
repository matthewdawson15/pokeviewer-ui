import React, { ReactElement } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BasePage from "./blocks/BasePage/BasePage";
import PokeList from "./components/PokeList/PokeList";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";

/**
 * Top level App component featuring basic routing to main pokemon
 * list page and 404 page for all other invalid routes
 *
 * @returns App react element
 */
function App(): ReactElement {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BasePage />}>
            <Route index element={<PokeList />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import React, { ReactElement } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BasePage from "./blocks/BasePage/BasePage";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";

function App(): ReactElement {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BasePage />}>
            <Route index element={<h1>Default Page</h1>} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

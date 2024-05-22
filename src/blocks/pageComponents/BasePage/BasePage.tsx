import React, { ReactElement } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./BasePage.scss";

/**
 * Base Page block component, rendering the header and footer alonside the Route's content via Outlet
 */
function BasePage(): ReactElement {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default BasePage;

import React from "react";
import Header from "../header";


const MainLayout = ({ children }) => (
  <div >
    <Header />

    <div className="content-wrapper">{children}</div>

  </div>
);

export default MainLayout;


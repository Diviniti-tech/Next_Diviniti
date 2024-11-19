import React from "react";
// import Header from "../Header/Header";
import Header2 from "../Header2/Header2";
import Footer from "../Footer/Footer";

function Template({ children }) {
  return (
    <>
    {/* <Header /> */}
    <Header2 />
      {children}
      <Footer />
    </>
  );
}

export default Template;

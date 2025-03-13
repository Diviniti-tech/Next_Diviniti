import React from "react";
// import Header from "../Header/Header";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Template({ children }) {
  return (
    <>
    {/* <Header /> */}
    <Header />
      {children}
      <Footer />
    </>
  );
}

export default Template;

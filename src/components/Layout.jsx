import { Container } from "@material-ui/core";
import React from "react";
import Header from "./Header";

function Layout({ children }) {
  return (
    <>
      <Header />
      <Container>{children}</Container>
    </>
  );
}

export default Layout;

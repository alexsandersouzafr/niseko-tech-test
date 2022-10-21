import React from "react";
import Container from "./Container";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <>
      <Header />

      <div className="flex flex-col items-center">
        <Container className="w-full">{children}</Container>
      </div>

      <Footer />
    </>
  );
}

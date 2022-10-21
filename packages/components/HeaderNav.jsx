import React from "react";
import Container from "./Container";

export default function HeaderNav() {
  const headerNavItems = ["About Us", "Blog", "Niseko", "Weather"];

  return (
    <Container className="flex flex-row-reverse gap-8 w-full text-red-200 p-2">
      {headerNavItems.map((item) => (
        <div
          key={Math.random()}
          className="hover:text-red-600 transition-all cursor-pointer"
        >
          {item}
        </div>
      ))}
    </Container>
  );
}

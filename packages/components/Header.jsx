import React from "react";
import Container from "./Container";
import HeaderNav from "./HeaderNav";

export default function Header() {
  return (
    <div className="flex flex-col bg-gray-800 w-full shadow-xl items-center">
      <div className="flex flex-col w-full bg-gray-900 items-center">
        <HeaderNav />
      </div>
      <Container className=" text-white text-5xl font-bold py-16 w-full">
        NISEKO RESORTS
      </Container>

      <div className="flex flex-col w-full bg-gray-900 items-center">
        <Container className="flex w-full text-red-200 p-2">
          <div className="flex-1">Our best accommodations.</div>
          <div className="text-red-500 cursor-pointer px-4 hover:text-red-100 transition-all">
            Login
          </div>
          <div className="bg-red-500 px-4 cursor-pointer hover:bg-red-100 hover:text-red-500 transition-all">
            日本語
          </div>
        </Container>
      </div>
    </div>
  );
}

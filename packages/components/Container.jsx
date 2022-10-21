import React from "react";

export default function Container({ children, className }) {
  return <div className={`${className} max-w-6xl`}>{children}</div>;
}

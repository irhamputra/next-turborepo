import * as React from "react";

const Flex: React.FC<React.CSSProperties> = ({ children, ...style }) =>
  React.createElement(
    "div",
    { style: { ...style, display: "flex" } },
    children
  );

export default Flex;

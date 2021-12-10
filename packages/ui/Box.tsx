import * as React from "react";
import type { BoxProps } from "./types";

const Box: React.FC<BoxProps> = ({ as = "div", children, ...style }) =>
  React.createElement(as, { style }, children);

export default Box;

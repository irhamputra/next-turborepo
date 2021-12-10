import * as React from "react";
import type { TextProps } from "./types";

const Text: React.FC<TextProps> = ({ as, children, ...style }) =>
  React.createElement(as || "p", { style }, children);

export default Text;

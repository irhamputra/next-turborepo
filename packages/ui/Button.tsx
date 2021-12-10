import * as React from "react";
import type { ButtonProps } from "./types";

const Button: React.FC<ButtonProps> = ({
  children,
  type = "button",
  ...props
}) => React.createElement("button", { ...props, type }, children);

export default Button;

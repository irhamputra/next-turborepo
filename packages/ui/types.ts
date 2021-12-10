import * as React from "react";

export type BoxProps = React.CSSProperties & {
  as?: "div" | "span";
};

export type ButtonProps = React.CSSProperties &
  React.HTMLAttributes<HTMLButtonElement> & {
    type?: "button" | "submit" | "reset";
  };

export type TextProps = React.CSSProperties & {
  as?: "p" | "h1" | "h2" | "h3" | "h4" | "small";
};

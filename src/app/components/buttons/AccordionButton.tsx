import React, { ButtonHTMLAttributes } from "react";
import style from "./AccordionButton.module.css";

type ButtonProps = {
  isExpanded: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function AccordionButton({
  isExpanded,
  ...buttonProps
}: ButtonProps) {
  return (
    <button className={style.button} {...buttonProps}>
      {isExpanded ? "Lukk" : "Les mer"}
    </button>
  );
}

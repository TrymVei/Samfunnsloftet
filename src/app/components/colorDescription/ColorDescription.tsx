import React from "react";
import style from "./ColorDescription.module.css";

type ColorDescriptionProps = {
  value?: number;
  text: string;
  hexColor: string;
  width?: string;
  height?: string;
};

export default function ColorDescription({
  value,
  text,
  hexColor,
  width = "4px",
  height = "9px",
}: ColorDescriptionProps) {
  return (
    <label className={style.emissionDescription}>
      <span
        className={style.emissionDescription_color}
        style={{ backgroundColor: hexColor, width: width, height: height }}
      ></span>
      <p>
        {value} {text}
      </p>
    </label>
  );
}

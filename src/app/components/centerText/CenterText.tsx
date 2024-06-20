import React from "react";
import style from "./CenterText.module.css";

type CenterTextProps = {
  children: React.ReactNode;
};

export default function CenterText({ children }: CenterTextProps) {
  return <div className={style.centerText}>{children}</div>;
}

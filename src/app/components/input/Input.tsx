import React from "react";
import style from "./Input.module.css";

type InputProps = {
  labelText: string;
  labelId: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function Input({
  labelText,
  labelId,
  ...inputprops
}: InputProps) {
  return (
    <span className={style.input}>
      <label id={labelId}>{labelText}</label>
      <input type="text" aria-labelledby={labelId} {...inputprops} />
    </span>
  );
}

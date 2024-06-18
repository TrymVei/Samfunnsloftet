import React from "react";
import style from "./Input.module.css";

type InputProps = {
  labelText: string;
  labelId: string;
  value: string;
  onChange: (newState: string) => void;
};

export default function Input({
  labelText,
  labelId,
  value,
  onChange,
}: InputProps) {
  return (
    <span className={style.input}>
      <label id={labelId}>{labelText}</label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-labelledby={labelId}
      />
    </span>
  );
}

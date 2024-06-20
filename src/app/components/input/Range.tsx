import React from "react";
import style from "./Range.module.css";

type RangeProps = {
  min: number;
  max: number;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Range({ min, max, value, onChange }: RangeProps) {
  return (
    <input
      type="range"
      min={min}
      max={max}
      value={value}
      onChange={onChange}
      className={style.range}
    />
  );
}

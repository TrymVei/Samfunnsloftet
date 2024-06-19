import React from "react";
import style from "./TaxLabel.module.css";

type TaxLabelProps = {
  value: number;
  currency: string;
};

export default function TaxLabel({ value, currency }: TaxLabelProps) {
  return (
    <label className={style.taxLabel}>
      {value} {currency}
    </label>
  );
}

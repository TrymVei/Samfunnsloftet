import React from "react";
import style from "./Adress.module.css";

type AdressProps = {
  adress: string;
};

export default function Adress({ adress }: AdressProps) {
  return (
    <div>
      <p className={style.adress}>
        <strong>Adresse:</strong> {adress}
      </p>
    </div>
  );
}

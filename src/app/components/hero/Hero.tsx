import React from "react";
import style from "./Hero.module.css";

export default function Hero() {
  return (
    <div className={style.hero}>
      <h1>Klimakalkulator</h1>
      <p>
        Se hvordan klimautslipp påvirker skatten din, hvor du har store utslipp
        og hvordan du måler deg med andre i regionen din.
      </p>
    </div>
  );
}

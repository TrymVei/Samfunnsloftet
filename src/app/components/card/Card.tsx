"use client";
import style from "./Card.module.css";
import React, { useState } from "react";

type CardProps = {
  children: React.ReactNode;
};

export default function Card({ children }: CardProps) {
  const childrenArray = React.Children.toArray(children);
  const [pageIndex, setPageIndex] = useState<number>(0);
  return (
    <div className={style.wrapper}>
      <div className={style.card}>
        {childrenArray.map((child, index) => {
          return (
            <div
              className={`${pageIndex === index ? style.card__visible : style.card__hidden}`}
            >
              {child}
            </div>
          );
        })}
      </div>
    </div>
  );
}

"use client";
import React, { ReactNode, useState } from "react";
import style from "./Accordion.module.css";
import AccordionButton from "../buttons/AccordionButton";

type AccordionProps = {
  accordionTitle: string;
  accordionId: number;
  backgroundColor: string;
  children: ReactNode;
};

export default function Accordion({
  accordionTitle,
  accordionId,
  backgroundColor,
  children,
}: AccordionProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div
      className={style.accordion}
      style={{ backgroundColor: backgroundColor }}
    >
      <p className={style.accordion__title}>{accordionTitle}</p>
      <div
        className={`${style.accordion__content} ${isExpanded ? style.accordion__content__expanded : ""}`}
        id={`accordion-content${accordionId}`}
        aria-labelledby={`accordion-trigger${accordionId}`}
      >
        {children}
      </div>
      <AccordionButton
        type="button"
        id={`accordion-trigger${accordionId}`}
        aria-expanded={isExpanded}
        onClick={() => setIsExpanded(!isExpanded)}
        aria-controls={`accordion-content${accordionId}`}
        isExpanded={isExpanded}
      />
    </div>
  );
}

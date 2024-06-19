import React from "react";
import style from "./FormWrapper.module.css";

type DataformProps = {
  children: React.ReactNode;
};

export default function Dataform({ children }: DataformProps) {
  return <form className={style.dataform}>{children}</form>;
}

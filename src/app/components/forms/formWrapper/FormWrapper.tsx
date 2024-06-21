import React from "react";
import style from "./FormWrapper.module.css";

type FormWrapperProps = {
  children: React.ReactNode;
};

export default function FormWrapper({ children }: FormWrapperProps) {
  return <form className={style.dataform}>{children}</form>;
}

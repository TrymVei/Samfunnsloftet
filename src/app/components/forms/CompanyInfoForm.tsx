"use client";
import React from "react";
import Input from "../input/Input";
import useCompanyInformation from "@/hooks/useCompanyInformation";
import FormWrapper from "./formWrapper/FormWrapper";
import Adress from "./adress/Adress";
import style from "./CompanyInfoForm.module.css";

export default function CompanyInfoForm() {
  const { companyName, industry, turnover } = useCompanyInformation();

  return (
    <div>
      <FormWrapper>
        <Input
          labelText={"Bedriftsnavn"}
          labelId={"bedriftsnavn"}
          {...companyName}
        />
        <Adress adress="Storgata 65, 9008 Tromsø" />
        <Input labelText={"Industri"} labelId={"industri"} {...industry} />
        <Input labelText={"Omsetning"} labelId={"omsetning"} {...turnover} />
        <p className={style.companyInfoForm_year}>
          Vi har tatt utgangspunkt i omsetningen din fra 2022.
        </p>
      </FormWrapper>
    </div>
  );
}

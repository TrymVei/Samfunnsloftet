"use client";
import React from "react";
import FormWrapper from "./formWrapper/FormWrapper";
import Input from "../input/Input";
import Range from "../input/Range";
import useFormInput from "@/hooks/useFormInput";

export default function Revenue() {
  const revenue = useFormInput("0");

  return (
    <FormWrapper>
      <Input
        {...revenue}
        type="number"
        labelText={"Hvilken omsetning forventer du i 2030?"}
        labelId={"4"}
      />
      <Range
        min={0}
        max={400000}
        value={revenue.value}
        onChange={revenue.onChange}
      />
    </FormWrapper>
  );
}

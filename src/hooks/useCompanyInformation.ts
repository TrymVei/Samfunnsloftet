"use client";

import useFormInput from "./useFormInput";

function useCompanyInformation() {
  const companyName = useFormInput("");
  const industry = useFormInput("");
  const turnover = useFormInput("");

  return {
    companyName,
    industry,
    turnover,
  };
}

export default useCompanyInformation;

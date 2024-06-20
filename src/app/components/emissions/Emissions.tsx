import React from "react";
import EmissionBar from "./emissionBar/EmissionBar";
import style from "./Emissions.module.css";
import ColorDescription from "../colorDescription/ColorDescription";
import colors from "@/utils/colors";

export default function Emissions() {
  return (
    <div className={style.emission}>
      <h2 className={style.emission__title}>Utslipp</h2>
      <EmissionBar
        barNumber={1}
        barLabel={"Direkte utslipp fra drift"}
        industryBestEmission={2540}
        companyEmission={1750}
        industryWorstEmission={3500}
      />
      <EmissionBar
        barNumber={2}
        barLabel={"Energiforbruk"}
        industryBestEmission={1000}
        companyEmission={1200}
        industryWorstEmission={3500}
      />
      <EmissionBar
        barNumber={3}
        barLabel={"Utslipp i verdikjeden"}
        industryBestEmission={1400}
        companyEmission={3000}
        industryWorstEmission={5000}
      />

      <div className={style.emission__color_descriptions}>
        <ColorDescription
          text={"Bransjens beste utslipp"}
          hexColor={colors.PrimrfargerFrost}
          width="8px"
          height="23px"
        />
        <ColorDescription
          text={"Ditt beregnede"}
          hexColor={colors.PrimrfargerFjell}
          width="8px"
          height="23px"
        />
        <ColorDescription
          text={"Bransjens dårligste"}
          hexColor={colors.NytralefargerLysgr}
          width="8px"
          height="23px"
        />
      </div>
    </div>
  );
}

import React from "react";
import CenterText from "../centerText/CenterText";
import ColorDescription from "../colorDescription/ColorDescription";
import colors from "@/utils/colors";
import EmissionTable from "../emissionTable/EmissionTable";
import style from "./EmissionsTop.module.css";

export default function EmissionsTop() {
  return (
    <div className={style.emissionTop}>
      <CenterText>
        <h2>Dine 5 største utslippsposter</h2>
        <p>
          For å kunne ta tak i utslipp, og starte å redusere er et godt
          utgangspunkt de områdene man har mest utslipp.
        </p>
      </CenterText>
      <div className={style.emission_top__color_descriptions}>
        <ColorDescription
          text={"Bransjens laveste utslipp"}
          hexColor={colors.PrimrfargerFrost}
          width="8px"
          height="23px"
        />
        <ColorDescription
          text={"Bransjens største utslipp"}
          hexColor={colors.NytralefargerLysgr}
          width="8px"
          height="23px"
        />
        <ColorDescription
          text={"Utslipp om du fortsetter som i dag"}
          hexColor={colors.PrimrfargerFjell}
          width="8px"
          height="23px"
        />
      </div>
      <EmissionTable />
    </div>
  );
}

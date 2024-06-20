import React from "react";
import EmissionBar from "./emissionBar/EmissionBar";
import style from "./Emissions.module.css";
import ColorDescription from "../colorDescription/ColorDescription";
import colors from "@/utils/colors";
import Accordion from "../accordion/Accordion";

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
      <Accordion
        accordionTitle={"Hva betyr kategoriene?"}
        accordionId={1}
        backgroundColor={colors.NytralefargerHvit}
      >
        <p>
          Her er det en fin tekst om hva de ulike kategoriene er for noe. Det
          skal gjøre det letter for brukerne å lære seg hva dette er for noe.
        </p>
        <strong>Kategori 1: Direkte utslipp fra drift</strong>
        <p>
          Tekst om kategori 1 som forklarer hva som ligger i dette og hva det er
          for noe.
        </p>
        <strong>Kategori 2: Energiforbruk</strong>
        <p>
          Tekst om kategori 2 som forklarer hva som ligger i dette og hva det er
          for noe.
        </p>
        <strong>Kategori 3: Utslipp i verdikjeden</strong>
        <p>
          Tekst om kategori 3 som forklarer hva som ligger i dette og hva det er
          for noe.
        </p>
      </Accordion>
    </div>
  );
}

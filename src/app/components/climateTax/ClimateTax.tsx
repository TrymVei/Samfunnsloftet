import React from "react";
import TaxLabel from "./taxLabel/TaxLabel";
import style from "./ClimateTax.module.css";

export default function ClimateTax() {
  return (
    <div className={style.climateTax}>
      <h2>Klimaskatt</h2>
      <p>
        Klimaskattene du må betale er i dag 2 000 kr per tonn CO2 ekvivalenter
        du slipper ut og baserer seg på utslippet du har i de to første
        kategoriene - “direkte utslipp fra drift” og “energiforbruk”.
      </p>
      <div className={style.climateTax_row}>
        <TaxLabel value={85000} currency={"kr"} />
        <p>er trolig den årlige skatten du må betale i året.</p>
      </div>
      <div className={style.climateTax_row}>
        <TaxLabel value={5000000} currency={"kr"} />
        <p>er trolig den årlige skatten til Tromsø i året.</p>
      </div>
    </div>
  );
}

"use client";
import React from "react";
import CenterText from "../../centerText/CenterText";
import Graph from "../../graph/Graph";

export default function EmissionGraph() {
  return (
    <div>
      <CenterText>
        <h2>Utslipp over tid</h2>
        <p>
          Du har stor påvirkning på hvordan fremtiden ser ut. Under kan du se
          tre scenarioer for hvordan utslippene dine utvikler seg om du ikke
          endrer på noe, øker utslipp mot bransjens høyeste, eller senker dem
          mot bransjens laveste.
        </p>
      </CenterText>
      <Graph />
    </div>
  );
}

"use client";
import React, { useState } from "react";
import style from "./EmissionTable.module.css";
import Bar from "../emissionBar/Bar";
import { EmissionTableObjects } from "@/utils/const";

export default function EmissionTable() {
  const sortedEmissionRows = EmissionTableObjects.tableRows.sort(
    (a, b) => b.industryEmission.highest - a.industryEmission.highest,
  );

  const [highestEmission, setHighestEmission] = useState(0);

  function findMaxEmission(numberToCheck: number) {
    numberToCheck > highestEmission ? setHighestEmission(numberToCheck) : null;
  }
  return (
    <table className={style.table}>
      <thead className={style.table__head}>
        <tr>
          <th>Kategori</th>
          <th>Ditt “som i dag”-utslipp</th>
        </tr>
      </thead>
      <tbody>
        {sortedEmissionRows.map((row) => {
          findMaxEmission(row.industryEmission.highest);
          return (
            <tr key={row.category}>
              <th>
                <p>{row.category}</p>
              </th>
              <th>
                <div className={style.table__emission}>
                  <p>{row.industryEmission.company} t</p>
                  <Bar
                    lowestEmission={row.industryEmission.lowest}
                    companyEmission={row.industryEmission.company}
                    highestEmission={row.industryEmission.highest}
                    max={highestEmission}
                  />
                </div>
              </th>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

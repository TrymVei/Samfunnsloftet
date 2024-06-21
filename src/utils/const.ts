import { EmissionTable, TableRow } from "./types/emissionTableTypes";

const tableObject1: TableRow = {
  category: "Drivstoff",
  industryEmission: {
    lowest: 2000,
    company: 2540,
    highest: 4000,
  },
};

const tableObject2: TableRow = {
  category: "Reprasjon",
  industryEmission: {
    lowest: 2000,
    company: 2500,
    highest: 2800,
  },
};

const tableObject3: TableRow = {
  category: "Utstyr",
  industryEmission: {
    lowest: 1800,
    company: 2700,
    highest: 3000,
  },
};

export const EmissionTableObjects: EmissionTable = {
  tableRows: [tableObject1, tableObject2, tableObject3],
};

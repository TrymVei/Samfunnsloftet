export type TableRow = {
  category: string;
  industryEmission: IndustryEmission;
};

export type IndustryEmission = {
  lowest: number;
  company: number;
  highest: number;
};

export type EmissionTable = {
  tableRows: TableRow[];
};

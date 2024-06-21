import style from "./Bar.module.css";

type EmissionBarProps = {
  lowestEmission: number;
  companyEmission: number;
  highestEmission: number;
  max: number;
};

export default function Bar({
  lowestEmission,
  companyEmission,
  highestEmission,
  max,
}: EmissionBarProps) {
  function calculateBarWidth(numberToCompare: number) {
    const percent = (numberToCompare / max) * 100;
    return percent;
  }

  return (
    <div className={style.emissionBar_bar_wrapper}>
      <span
        className={style.emissionBar_bar}
        style={{ width: `${calculateBarWidth(highestEmission)}%` }}
      />
      <span
        className={style.emissionBar_bar_best}
        style={{ width: `${calculateBarWidth(lowestEmission)}%` }}
      />
      <span
        className={style.emissionBar_bar_company}
        style={{
          width: `${calculateBarWidth(companyEmission)}%`,
        }}
      />
    </div>
  );
}

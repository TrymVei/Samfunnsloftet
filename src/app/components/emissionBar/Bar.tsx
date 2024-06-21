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
    <div className={style.bar__wrapper}>
      <span
        className={style.bar__highest}
        style={{ width: `${calculateBarWidth(highestEmission)}%` }}
      />
      <span
        className={style.bar__lowest}
        style={{ width: `${calculateBarWidth(lowestEmission)}%` }}
      />
      <span
        className={style.bar__company}
        style={{
          width: `${calculateBarWidth(companyEmission)}%`,
        }}
      />
    </div>
  );
}

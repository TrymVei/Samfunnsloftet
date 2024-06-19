import colors from "@/utils/colors";
import style from "./EmissionBar.module.css";
import ColorDescription from "../../colorDescription/ColorDescription";

type EmissionBarProps = {
  barNumber: number;
  barLabel: string;
  industryBestEmission: number;
  companyEmission: number;
  industryWorstEmission: number;
};

export default function EmissionBar({
  barNumber,
  barLabel,
  industryBestEmission,
  companyEmission,
  industryWorstEmission,
}: EmissionBarProps) {
  const unit = "tonn";

  function calculateBarWidth(numberToCompare: number) {
    const percent = (numberToCompare / industryWorstEmission) * 100;
    return percent;
  }

  function calculateBarPosition(numberToCompare: number) {
    const percentLeft = (numberToCompare / industryWorstEmission) * 100;
    return percentLeft;
  }

  return (
    <div className={style.emissionBar}>
      <label className={style.emissionBar_label}>
        {barNumber}. {barLabel}
      </label>

      <div className={style.emissionBar_bar_wrapper}>
        <span className={style.emissionBar_bar} aria-labelledby="" />
        <span
          className={style.emissionBar_bar_best}
          style={{ width: `${calculateBarWidth(industryBestEmission)}%` }}
        />
        <span
          className={style.emissionBar_bar_company}
          style={{
            left: `calc(${calculateBarPosition(companyEmission)} - 9px)`,
          }}
        />
      </div>

      <div className={style.emissionBar_emissions}>
        <ColorDescription
          value={industryBestEmission}
          text={unit}
          hexColor={colors.PrimrfargerFrost}
        />
        <ColorDescription
          value={companyEmission}
          text={unit}
          hexColor={colors.PrimrfargerFjell}
        />
        <ColorDescription
          value={industryWorstEmission}
          text={unit}
          hexColor={colors.NytralefargerLysgr}
        />
      </div>
    </div>
  );
}

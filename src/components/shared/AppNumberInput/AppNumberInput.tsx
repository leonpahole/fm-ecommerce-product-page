import Image from "next/image";
import IconPlus from "public/icon-plus.svg";
import IconMinus from "public/icon-minus.svg";
import clsx from "clsx";
import style from "./AppNumberInput.module.scss";

interface IProps {
  value: number;
  onChange: (value: number) => void;
  min: number;
  max: number;
  className?: string;
}

export const AppNumberInput = ({
  value,
  onChange,
  min,
  max,
  className,
}: IProps) => {
  const onValueChange = (val: number) => {
    let realVal = val;
    if (val > max) {
      realVal = max;
    }

    if (val < min) {
      realVal = min;
    }

    onChange(realVal);
  };

  return (
    <div className={clsx(style.wrapper, className)}>
      <button
        type="button"
        onClick={() => {
          onValueChange(value - 1);
        }}
        aria-label="Decrease by 1"
        disabled={value === 0}
        className={style.button}
      >
        <Image alt="" src={IconMinus} />
      </button>
      <p className={style.value}>{value}</p>
      <button
        type="button"
        onClick={() => {
          onValueChange(value + 1);
        }}
        aria-label="Increase by 1"
        disabled={value === max}
        className={style.button}
      >
        <Image alt="" src={IconPlus} />
      </button>
    </div>
  );
};

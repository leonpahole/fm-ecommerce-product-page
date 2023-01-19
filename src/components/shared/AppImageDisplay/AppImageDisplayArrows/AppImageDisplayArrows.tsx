import clsx from "clsx";
import Image from "next/image";
import NextIcon from "public/icon-next.svg";
import PreviousIcon from "public/icon-previous.svg";
import styles from "./AppImageDisplayArrows.module.scss";

interface ArrowProps {
  onClick(): void;
  className?: string;
  hidden: boolean;
}

interface IProps {
  left: ArrowProps;
  right: ArrowProps;
}

export const AppImageDisplayArrows = ({ left, right }: IProps) => {
  return (
    <>
      {!left.hidden && (
        <button
          type="button"
          onClick={left.onClick}
          aria-label="Select previous image"
          className={clsx(styles.arrowButton, left.className)}
        >
          <Image src={PreviousIcon} alt="" />
        </button>
      )}

      {!right.hidden && (
        <button
          type="button"
          onClick={right.onClick}
          aria-label="Select next image"
          className={clsx(styles.arrowButton, right.className)}
        >
          <Image src={NextIcon} alt="" />
        </button>
      )}
    </>
  );
};

/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/button-has-type */
import clsx from "clsx";
import styles from "./AppButton.module.scss";

type IProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const AppButton = (props: IProps) => {
  return <button {...props} className={clsx(props.className, styles.button)} />;
};

import styles from "./NavbarCartEmpty.module.scss";

export const NavbarCartEmpty = () => {
  return (
    <div className={styles.content}>
      <p>Your cart is empty.</p>
    </div>
  );
};

import Image from "next/image";
import Link from "next/link";
import CartIcon from "public/icon-cart.svg";
import styles from "./NavbarCart.module.scss";

export const NavbarCart = () => {
  return (
    <Link href="/" className={styles.imgLink}>
      <Image src={CartIcon} alt="Go to cart" className={styles.cartImg} />
    </Link>
  );
};

import Image from "next/image";
import Link from "next/link";
import Logo from "public/logo.svg";
import styles from "./Navbar.module.scss";
import { NavbarCart } from "./NavbarCart/NavbarCart";
import { NavbarAvatar } from "./NavbarAvatar/NavbarAvatar";
import { NavbarDesktopLinks } from "./NavbarDesktopLinks/NavbarDesktopLinks";
import { NavbarMobileLinks } from "./NavbarMobileLinks/NavbarMobileLinks";

export const Navbar = () => {
  return (
    <header className={styles.wrapper}>
      <div className={styles.left}>
        <NavbarMobileLinks />
        <Link href="/" className={styles.logoLink}>
          <Image src={Logo} alt="Go to Sneakers home" />
        </Link>
        <NavbarDesktopLinks />
      </div>
      <div className={styles.right}>
        <NavbarCart />
        <NavbarAvatar />
      </div>
    </header>
  );
};

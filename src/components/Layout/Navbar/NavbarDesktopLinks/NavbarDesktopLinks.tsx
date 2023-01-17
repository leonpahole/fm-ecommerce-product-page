import { NavbarLinks } from "@/utils/navbar-links";
import Link from "next/link";
import styles from "./NavbarDesktopLinks.module.scss";

export const NavbarDesktopLinks = () => {
  return (
    <nav className={styles.wrapper}>
      <ul className={styles.linkList}>
        {NavbarLinks.map((link) => (
          <li key={link.title}>
            <Link href={link.path} className={styles.link}>
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

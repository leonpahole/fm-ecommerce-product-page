import { NavbarLinks } from "@/utils/navbar-links";
import Link from "next/link";
import Image from "next/image";
import MenuIcon from "public/icon-menu.svg";
import CloseIcon from "public/icon-close.svg";
import { useState } from "react";
import clsx from "clsx";

import styles from "./NavbarMobileLinks.module.scss";

export const NavbarMobileLinks = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <button
        type="button"
        className={styles.menuButton}
        onClick={() => {
          setIsOpen(true);
        }}
      >
        <Image src={MenuIcon} alt="Open the menu" />
      </button>
      <button
        className={clsx(styles.overlay, { [styles.isOpen]: isOpen })}
        type="button"
        onClick={() => {
          setIsOpen(false);
        }}
        aria-label="Close the menu"
      />
      <nav
        className={clsx(styles.wrapper, { [styles.isOpen]: isOpen })}
        aria-hidden={!isOpen}
      >
        <button
          className={styles.closeButton}
          type="button"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          <Image src={CloseIcon} alt="Close the menu" />
        </button>
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
    </>
  );
};

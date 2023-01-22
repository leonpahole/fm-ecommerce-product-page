import Image from "next/image";
import CartIcon from "public/icon-cart.svg";
import dynamic from "next/dynamic";
import { useState } from "react";
import styles from "./NavbarCart.module.scss";
import { INavbarCartPopperProps } from "./NavbarCartPopper/NavbarCartPopper";

const NavbarCartPopper = dynamic<INavbarCartPopperProps>(
  () =>
    import("./NavbarCartPopper/NavbarCartPopper").then(
      (mod) => mod.NavbarCartPopper
    ),
  {
    ssr: false,
  }
);

export const NavbarCart = () => {
  const [popperButton, setPopperButton] = useState<HTMLButtonElement | null>(
    null
  );
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <button
        className={styles.button}
        type="button"
        aria-label="Go to cart"
        ref={setPopperButton}
        onClick={() => setIsOpen((o) => !o)}
      >
        <Image src={CartIcon} alt="" className={styles.cartImg} />
      </button>
      <NavbarCartPopper isOpen={isOpen} referenceElement={popperButton} />
    </>
  );
};

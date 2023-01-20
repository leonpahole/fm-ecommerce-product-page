import Image from "next/image";
import { usePopper } from "react-popper";
import CartIcon from "public/icon-cart.svg";
import clsx from "clsx";
import { useState } from "react";
import styles from "./NavbarCart.module.scss";

export const NavbarCart = () => {
  const [referenceElement, setReferenceElement] =
    useState<HTMLButtonElement | null>(null);

  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
    null
  );

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { styles: popperStyles, attributes } = usePopper(
    referenceElement,
    popperElement,
    {
      modifiers: [
        {
          name: "offset",
          options: {
            offset: [0, 30],
          },
        },
        {
          name: "preventOverflow",
          options: {
            padding: {
              right: 24,
              left: 24,
            },
          },
        },
      ],
    }
  );

  return (
    <>
      <button
        className={styles.button}
        type="button"
        aria-label="Go to cart"
        ref={setReferenceElement}
        onClick={() => setIsOpen((o) => !o)}
      >
        <Image src={CartIcon} alt="" className={styles.cartImg} />
      </button>
      <div
        ref={setPopperElement}
        style={popperStyles.popper}
        className={clsx(styles.cartWrapper, { [styles.open]: isOpen })}
        aria-hidden={!isOpen}
        {...attributes.popper}
      >
        <div className={styles.heading}>
          <p>Cart</p>
        </div>
        <div className={styles.content}>
          <p>Your cart is empty.</p>
        </div>
      </div>
    </>
  );
};

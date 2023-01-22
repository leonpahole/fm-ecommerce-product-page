import { useCartStore } from "@/store/cart.store";
import clsx from "clsx";
import { useState } from "react";
import { usePopper } from "react-popper";
import { NavbarCartEmpty } from "../NavbarCartEmpty/NavbarCartEmpty";
import { NavbarCartProductList } from "../NavbarCartProductList/NavbarCartProductList";
import styles from "./NavbarCartPopper.module.scss";

const useCartPopper = (referenceElement: HTMLButtonElement | null) => {
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
    null
  );

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

  return { attributes, popperStyles, setPopperElement };
};

export interface INavbarCartPopperProps {
  isOpen: boolean;
  referenceElement: HTMLButtonElement | null;
}

export const NavbarCartPopper = ({
  isOpen,
  referenceElement,
}: INavbarCartPopperProps) => {
  const { setPopperElement, popperStyles, attributes } =
    useCartPopper(referenceElement);

  const { products, removeFromCart } = useCartStore();

  return (
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
      {products.length > 0 ? (
        <NavbarCartProductList products={products} onRemove={removeFromCart} />
      ) : (
        <NavbarCartEmpty />
      )}
    </div>
  );
};

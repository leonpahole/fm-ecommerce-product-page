import { useCartStore } from "@/store/cart.store";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { usePopper } from "react-popper";
import { NavbarCartEmpty } from "../NavbarCartEmpty/NavbarCartEmpty";
import { NavbarCartProductList } from "../NavbarCartProductList/NavbarCartProductList";
import styles from "./NavbarCartPopper.module.scss";

interface ICartPopperProps {
  referenceElement: HTMLButtonElement | null;
  isOpen: boolean;
  onClose: () => void;
}

const useCartPopper = ({
  referenceElement,
  isOpen,
  onClose,
}: ICartPopperProps) => {
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
    null
  );

  const {
    styles: popperStyles,
    attributes,
    state,
  } = usePopper(referenceElement, popperElement, {
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
  });

  // close on click outside
  useEffect(() => {
    if (!isOpen || !state) {
      return undefined;
    }

    const onClickCloseIfOutside = (e: MouseEvent) => {
      if (!e.target) {
        return;
      }

      const clickedElement = e.target as Element;

      const clickedOnReferenceElement = (
        state.elements.reference as Element
      ).contains(clickedElement);

      // let popper handle reference element clicks - otherwise the click event is fired when we try to open the popper, and it closes immediately
      if (clickedOnReferenceElement) {
        return;
      }

      const clickedOnPopperElement =
        state.elements.popper.contains(clickedElement);

      if (!clickedOnPopperElement) {
        onClose();
      }
    };

    document.addEventListener("click", onClickCloseIfOutside);

    return () => {
      document.removeEventListener("click", onClickCloseIfOutside);
    };
  }, [onClose, isOpen, state]);

  // close on escape press
  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const onKeyUpCloseIfEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keyup", onKeyUpCloseIfEscape);

    return () => {
      document.removeEventListener("keyup", onKeyUpCloseIfEscape);
    };
  }, [isOpen, onClose]);

  return { attributes, popperStyles, setPopperElement };
};

export interface INavbarCartPopperProps {
  isOpen: boolean;
  onClose(): void;
  referenceElement: HTMLButtonElement | null;
}

export const NavbarCartPopper = ({
  isOpen,
  onClose,
  referenceElement,
}: INavbarCartPopperProps) => {
  const { setPopperElement, popperStyles, attributes } = useCartPopper({
    referenceElement,
    isOpen,
    onClose,
  });

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

import Image from "next/image";
import CartIcon from "public/icon-cart.svg";
import dynamic from "next/dynamic";
import { useCartStoreTotalProducts } from "@/store/cart.store";
import { useCallback, useEffect, useState } from "react";
import styles from "./NavbarCart.module.scss";

const NavbarCartPopper = dynamic(
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

  const [productsInCart, setProductsInCart] = useState<number>(0);

  const totalProducts = useCartStoreTotalProducts();

  useEffect(() => {
    setProductsInCart(totalProducts);
  }, [totalProducts]);

  const onClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <>
      <div className={styles.buttonWrapper}>
        {productsInCart > 0 && (
          <div className={styles.badge}>{productsInCart}</div>
        )}
        <button
          className={styles.button}
          type="button"
          aria-label="Go to cart"
          ref={setPopperButton}
          onClick={() => setIsOpen((o) => !o)}
        >
          <Image src={CartIcon} alt="" className={styles.cartImg} />
        </button>
      </div>
      <NavbarCartPopper
        isOpen={isOpen}
        onClose={onClose}
        referenceElement={popperButton}
      />
    </>
  );
};

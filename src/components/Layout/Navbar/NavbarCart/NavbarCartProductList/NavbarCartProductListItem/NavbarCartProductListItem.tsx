import { ProductModels } from "@/models/product.models";
import Image from "next/image";
import DeleteIcon from "public/icon-delete.svg";
import styles from "./NavbarCartProductListItem.module.scss";

interface IProps {
  product: ProductModels.ProductWithQuantity;
  onRemove(): void;
}

export const NavbarCartProductListItem = ({
  product: { product, quantity },
  onRemove,
}: IProps) => {
  const image = product.images[0];
  return (
    <article className={styles.listItem}>
      <div className={styles.left}>
        <Image
          src={image.thumbnail}
          alt={image.alt}
          width="50"
          height="50"
          className={styles.img}
        />
        <div className={styles.info}>
          <p className={styles.name}>{product.name}</p>
          <p className={styles.price}>
            <span>
              {ProductModels.priceWithCurrency(
                product.currency,
                product.currentPrice
              )}{" "}
              x {quantity}
            </span>
            <span className={styles.totalPrice}>
              {ProductModels.priceWithCurrency(
                product.currency,
                product.currentPrice * quantity
              )}
            </span>
          </p>
        </div>
      </div>
      <div className={styles.right}>
        <button
          type="button"
          aria-label="Delete this item from cart"
          onClick={onRemove}
        >
          <Image src={DeleteIcon} alt="" />
        </button>
      </div>
    </article>
  );
};

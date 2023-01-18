import { ProductModels } from "@/models/product.models";
import { useState } from "react";
import CartIcon from "public/icon-cart-white.svg";
import Image from "next/image";
import { AppButton } from "@/components/shared/AppButton/AppButton";
import { AppNumberInput } from "@/components/shared/AppNumberInput/AppNumberInput";
import styles from "./ProductInfo.module.scss";

const MaxProductsInCart = 20;

interface IProps {
  product: ProductModels.Product;
}

export const ProductInfo = ({ product }: IProps) => {
  const [quantity, setQuantity] = useState<number>(0);

  const priceWithCurrency = (price: number) => {
    return `${product.currency}${price.toFixed(2)}`;
  };

  return (
    <div className={styles.infoWrapper}>
      <p className={styles.company}>{product.company}</p>
      <h1 className={styles.name}>{product.name}</h1>
      <p className={styles.description}>{product.description}</p>
      <div className={styles.priceWrapper}>
        <div className={styles.currentPriceWrapper}>
          <p className={styles.currentPrice}>
            {priceWithCurrency(product.currentPrice)}
          </p>
          {product.discount && (
            <p className={styles.discountPercent}>
              {product.discount.percent}%
            </p>
          )}
        </div>
        {product.discount && (
          <p className={styles.originalPrice}>
            <s>{priceWithCurrency(product.discount.originalPrice)}</s>
          </p>
        )}
      </div>
      <div className={styles.purchaseWrapper}>
        <AppNumberInput
          value={quantity}
          onChange={setQuantity}
          min={0}
          max={MaxProductsInCart}
          className={styles.quantityInput}
        />
        <AppButton
          type="button"
          disabled={quantity === 0}
          className={styles.addToCartButton}
        >
          <Image src={CartIcon} alt="" />
          <span>Add to cart</span>
        </AppButton>
      </div>
    </div>
  );
};

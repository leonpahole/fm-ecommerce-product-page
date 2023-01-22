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
  onAddToCart(quantity: number): void;
}

export const ProductInfo = ({ product, onAddToCart }: IProps) => {
  const [quantity, setQuantity] = useState<number>(0);

  return (
    <div className={styles.infoWrapper}>
      <p className={styles.company}>{product.company}</p>
      <h1 className={styles.name}>{product.name}</h1>
      <p className={styles.description}>{product.description}</p>
      <div className={styles.priceWrapper}>
        <div className={styles.currentPriceWrapper}>
          <p className={styles.currentPrice}>
            {ProductModels.priceWithCurrency(
              product.currency,
              product.currentPrice
            )}
          </p>
          {product.discount && (
            <p className={styles.discountPercent}>
              {product.discount.percent}%
            </p>
          )}
        </div>
        {product.discount && (
          <p className={styles.originalPrice}>
            <s>
              {ProductModels.priceWithCurrency(
                product.currency,
                product.discount.originalPrice
              )}
            </s>
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
          onClick={() => {
            onAddToCart(quantity);
            setQuantity(0);
          }}
        >
          <Image src={CartIcon} alt="" />
          <span>Add to cart</span>
        </AppButton>
      </div>
    </div>
  );
};

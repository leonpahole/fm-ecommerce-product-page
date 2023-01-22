import { ProductModels } from "@/models/product.models";
import { useCartStore } from "@/store/cart.store";
import styles from "./Product.module.scss";
import { ProductImages } from "./ProductImages/ProductImages";
import { ProductInfo } from "./ProductInfo/ProductInfo";

interface IProps {
  product: ProductModels.Product;
}

export const Product = ({ product }: IProps) => {
  const { addToCart } = useCartStore();

  return (
    <article className={styles.wrapper}>
      <ProductImages product={product} />
      <ProductInfo
        product={product}
        onAddToCart={(quantity) => addToCart(product, quantity)}
      />
    </article>
  );
};

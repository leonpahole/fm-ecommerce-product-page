import { ProductModels } from "@/models/product.models";
import styles from "./Product.module.scss";
import { ProductImages } from "./ProductImages/ProductImages";
import { ProductInfo } from "./ProductInfo/ProductInfo";

interface IProps {
  product: ProductModels.Product;
}

export const Product = ({ product }: IProps) => {
  return (
    <article className={styles.wrapper}>
      <ProductImages product={product} />
      <ProductInfo product={product} />
    </article>
  );
};

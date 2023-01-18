import { ProductModels } from "@/models/product.models";
import { AppImageDisplay } from "@/components/shared/AppImageDisplay/AppImageDisplay";
import styles from "./ProductImages.module.scss";

interface IProps {
  product: ProductModels.Product;
}

export const ProductImages = ({ product }: IProps) => {
  return (
    <div className={styles.imagesWrapper}>
      <AppImageDisplay images={product.images} />
    </div>
  );
};

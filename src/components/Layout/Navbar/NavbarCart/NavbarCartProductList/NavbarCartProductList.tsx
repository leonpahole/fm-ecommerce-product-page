import { AppButton } from "@/components/shared/AppButton/AppButton";
import { ProductModels } from "@/models/product.models";
import styles from "./NavbarCartProductList.module.scss";
import { NavbarCartProductListItem } from "./NavbarCartProductListItem/NavbarCartProductListItem";

interface IProps {
  products: ProductModels.ProductWithQuantity[];
  onRemove(product: ProductModels.Product): void;
}

export const NavbarCartProductList = ({ products, onRemove }: IProps) => {
  return (
    <div className={styles.content}>
      <div className={styles.list}>
        {products.map((p) => (
          <NavbarCartProductListItem
            key={p.product.slug}
            product={p}
            onRemove={() => onRemove(p.product)}
          />
        ))}
      </div>
      <AppButton type="button" className={styles.checkoutBtn}>
        Checkout
      </AppButton>
    </div>
  );
};

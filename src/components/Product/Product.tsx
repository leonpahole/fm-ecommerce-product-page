import { ProductModels } from "@/models/product.models";

interface IProps {
  product: ProductModels.Product;
}

export const Product = ({ product }: IProps) => {
  return <div>{product.name}</div>;
};

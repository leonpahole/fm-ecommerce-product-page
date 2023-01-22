import { ImageModels } from "./image.models";

export namespace ProductModels {
  export interface Product {
    slug: string;
    company: string;
    name: string;
    description: string;
    currentPrice: number;
    currency: string;
    discount: {
      originalPrice: number;
      percent: number;
    } | null;
    images: ImageModels.Image[];
  }

  export interface ProductWithQuantity {
    product: Product;
    quantity: number;
  }

  export const priceWithCurrency = (currency: string, price: number) => {
    return `${currency}${price.toFixed(2)}`;
  };
}

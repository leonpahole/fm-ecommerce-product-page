import { ProductModels } from "@/models/product.models";
import { create, StateCreator } from "zustand";
import { persist, PersistOptions } from "zustand/middleware";

interface ICartStore {
  products: ProductModels.ProductWithQuantity[];
  addToCart: (product: ProductModels.Product, quantity?: number) => void;
  removeFromCart: (product: ProductModels.Product) => void;
}

const store: StateCreator<ICartStore> = (set) => ({
  products: [],
  addToCart: (product: ProductModels.Product, quantity: number = 1) =>
    set((state) => {
      const existingProductIndex = state.products.findIndex(
        (p) => p.product.slug === product.slug
      );

      if (existingProductIndex < 0) {
        return {
          ...state,
          products: [...state.products, { product, quantity }],
        };
      }

      const newProducts = [...state.products];
      newProducts[existingProductIndex].quantity += quantity;
      return { ...state, products: newProducts };
    }),
  removeFromCart: (product: ProductModels.Product) =>
    set((state) => {
      const existingProductIndex = state.products.findIndex(
        (p) => p.product.slug === product.slug
      );

      if (existingProductIndex < 0) {
        return state;
      }

      const newProducts = [...state.products];
      newProducts.splice(existingProductIndex, 1);
      return { ...state, products: newProducts };
    }),
});

type ICartStorePersist = (
  config: StateCreator<ICartStore>,
  options: PersistOptions<ICartStore>
) => StateCreator<ICartStore>;

export const useCartStore = create<ICartStore>(
  (persist as ICartStorePersist)(store, { name: "cart-storage" })
);

export const useCartStoreTotalProducts = (): number => {
  const { products } = useCartStore();
  return products.reduce((q, p) => q + p.quantity, 0);
};

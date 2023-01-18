import { ProductModels } from "@/models/product.models";
import ProductThumbnail1 from "public/image-product-1-thumbnail.jpg";
import ProductImage1 from "public/image-product-1.jpg";
import ProductThumbnail2 from "public/image-product-2-thumbnail.jpg";
import ProductImage2 from "public/image-product-2.jpg";
import ProductThumbnail3 from "public/image-product-3-thumbnail.jpg";
import ProductImage3 from "public/image-product-3.jpg";
import ProductThumbnail4 from "public/image-product-4-thumbnail.jpg";
import ProductImage4 from "public/image-product-4.jpg";

export namespace ProductApi {
  const FallLimitedEditionSneakers: ProductModels.Product = {
    slug: "fall-limited-edition-sneakers",
    company: "Sneaker Company",
    name: "Fall Limited Edition Sneakers",
    description:
      "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
    currentPrice: 125,
    currency: "$",
    discount: {
      originalPrice: 250,
      percent: 50,
    },
    images: [
      {
        fullSize: ProductImage1,
        thumbnail: ProductThumbnail1,
      },
      {
        fullSize: ProductImage2,
        thumbnail: ProductThumbnail2,
      },
      {
        fullSize: ProductImage3,
        thumbnail: ProductThumbnail3,
      },
      {
        fullSize: ProductImage4,
        thumbnail: ProductThumbnail4,
      },
    ],
  };

  const Products: ProductModels.Product[] = [FallLimitedEditionSneakers];

  export const getAll = (): ProductModels.Product[] => {
    return Products;
  };

  export const findBySlug = (slug: string): ProductModels.Product | null => {
    return Products.find((p) => p.slug === slug) ?? null;
  };
}

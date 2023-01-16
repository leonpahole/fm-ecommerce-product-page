import { StaticImageData } from "next/image";

export namespace ProductModels {
  export interface Product {
    slug: string;
    company: string;
    name: string;
    description: string;
    currentPrice: number;
    discount: {
      originalPrice: number;
      percent: number;
    } | null;
    images: { thumbnail: StaticImageData; fullSize: StaticImageData }[];
  }
}

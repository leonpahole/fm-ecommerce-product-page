import { ProductApi } from "@/api/product.api";
import { Page } from "@/components/Layout/Page/Page";
import { Product } from "@/components/Product/Product";
import { ProductModels } from "@/models/product.models";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";

export const getStaticPaths: GetStaticPaths = () => {
  const products = ProductApi.getAll();
  return {
    paths: products.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<IProps> = async (
  context: GetStaticPropsContext
) => {
  let product: ProductModels.Product | null = null;

  if (context.params) {
    product = ProductApi.findBySlug(context.params.slug as string);
  }

  if (!product) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      product,
    },
  };
};

interface IProps {
  product: ProductModels.Product;
}

export default function ProductPage({ product }: IProps) {
  return (
    <Page title={product.name} metaDescription={product.description}>
      <Product product={product} />
    </Page>
  );
}

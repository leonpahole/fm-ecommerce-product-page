import { ProductApi } from "@/api/product.api";
import { Page } from "@/components/Layout/Page/Page";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: `/products/${ProductApi.getAll()[0].slug}`,
      permanent: true,
    },
  };
};

export default function Home() {
  return (
    <Page
      title="Fall Limited Edition Sneakers"
      metaDescription="These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer."
    >
      <div>Test</div>
    </Page>
  );
}

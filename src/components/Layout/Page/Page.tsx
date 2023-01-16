import Head from "next/head";
import { Navbar } from "../Navbar/Navbar";
import styles from "./Page.module.scss";

interface IProps {
  title: string;
  metaDescription: string;
  children: React.ReactNode;
}

export const Page = ({ title, metaDescription, children }: IProps) => {
  const pageTitle = `${title} | Sneakers`;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
      </Head>
      <Navbar />
      <main className={styles.main}>{children}</main>
    </>
  );
};

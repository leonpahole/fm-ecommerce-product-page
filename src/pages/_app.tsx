import type { AppProps } from "next/app";
import { kumbhSansFont } from "@/utils/font-family.utils";
import Modal from "react-modal";
import "@/styles/index.scss";

Modal.setAppElement("#modals");

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* eslint-disable-next-line react/no-unknown-property */}
      <style jsx global>
        {`
          html {
            --kumbh-sans-font: ${kumbhSansFont.style.fontFamily};
          }

          #__next {
            display: flex;
            flex-direction: column;
            height: 100%;
          }
        `}
      </style>
      <Component {...pageProps} />
    </>
  );
}

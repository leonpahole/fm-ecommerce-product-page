import { ImageModels } from "@/models/image.models";
import { Breakpoints, pxToRem } from "@/utils/breakpoints";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useState } from "react";
import { AppImageDisplayThumbnailList } from "../AppImageDisplayThumbnailList/AppImageDisplayThumbnailList";
import styles from "./AppImageDisplayDesktop.module.scss";

const AppImageDisplayPopup = dynamic(
  () =>
    import("../AppImageDisplayPopup/AppImageDisplayPopup").then(
      (mod) => mod.AppImageDisplayPopup
    ),
  {
    ssr: false,
  }
);

interface IProps {
  images: ImageModels.Image[];
  popupContentLabel: string;
  selectedImageIndex: number;
  onImageSelect(index: number): void;
}

export const AppImageDisplayDesktop = ({
  images,
  popupContentLabel,
  selectedImageIndex,
  onImageSelect,
}: IProps) => {
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);

  return (
    <>
      <AppImageDisplayPopup
        images={images}
        isOpen={isPopupOpen}
        onClose={() => {
          setIsPopupOpen(false);
        }}
        contentLabel={popupContentLabel}
        selectedImageIndex={selectedImageIndex}
        onImageSelect={onImageSelect}
      />
      <div className={styles.wrapper}>
        <button
          type="button"
          className={styles.primaryImageWrapper}
          onClick={() => {
            setIsPopupOpen(true);
          }}
        >
          <Image
            src={images[selectedImageIndex].fullSize}
            alt={images[selectedImageIndex].alt}
            fill
            className={styles.primaryImage}
            sizes={`
              (max-width: ${Breakpoints.lg}rem) 100vw,
              ${pxToRem(445)}rem`}
          />
        </button>
        <AppImageDisplayThumbnailList
          images={images}
          onImageSelect={onImageSelect}
          selectedImageIndex={selectedImageIndex}
          className={styles.thumbnailList}
        />
      </div>
    </>
  );
};

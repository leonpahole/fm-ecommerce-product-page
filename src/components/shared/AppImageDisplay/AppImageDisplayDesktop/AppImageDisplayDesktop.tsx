import { ImageModels } from "@/models/image.models";
import Image from "next/image";
import { useState } from "react";
import { Breakpoints, pxToRem } from "@/utils/breakpoints";
import styles from "./AppImageDisplayDesktop.module.scss";
import { AppImageDisplayThumbnailList } from "../AppImageDisplayThumbnailList/AppImageDisplayThumbnailList";
import { AppImageDisplayPopup } from "../AppImageDisplayPopup/AppImageDisplayPopup";

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

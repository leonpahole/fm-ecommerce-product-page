import { ImageModels } from "@/models/image.models";
import Image from "next/image";
import { AppImageDisplayArrows } from "../AppImageDisplayArrows/AppImageDisplayArrows";
import styles from "./AppImageDisplayMobile.module.scss";

interface IProps {
  images: ImageModels.Image[];
  selectedImageIndex: number;
  onImageSelect(index: number): void;
}

export const AppImageDisplayMobile = ({
  images,
  selectedImageIndex,
  onImageSelect,
}: IProps) => {
  return (
    <div className={styles.wrapper}>
      <Image
        src={images[selectedImageIndex].fullSize}
        alt={images[selectedImageIndex].alt}
        fill
        className={styles.primaryImage}
        sizes="100vw"
      />
      <AppImageDisplayArrows
        left={{
          onClick: () => onImageSelect(selectedImageIndex - 1),
          hidden: selectedImageIndex === 0,
          className: styles.arrowButtonLeft,
        }}
        right={{
          onClick: () => onImageSelect(selectedImageIndex + 1),
          hidden: selectedImageIndex >= images.length - 1,
          className: styles.arrowButtonRight,
        }}
      />
    </div>
  );
};

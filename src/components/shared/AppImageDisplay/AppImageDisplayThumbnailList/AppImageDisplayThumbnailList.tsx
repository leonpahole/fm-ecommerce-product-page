import { ImageModels } from "@/models/image.models";
import { pxToRem } from "@/utils/breakpoints";
import clsx from "clsx";
import Image from "next/image";
import styles from "./AppImageDisplayThumbnailList.module.scss";

interface IProps {
  images: ImageModels.Image[];
  selectedImageIndex: number;
  onImageSelect(index: number): void;
  className?: string;
}

export const AppImageDisplayThumbnailList = ({
  images,
  selectedImageIndex,
  onImageSelect,
  className,
}: IProps) => {
  return (
    <div className={clsx(styles.thumbnailList, className)}>
      {images.map((image, index) => (
        <button
          key={image.fullSize.src}
          type="button"
          onClick={() => onImageSelect(index)}
          className={clsx(styles.thumbnailWrapper, {
            [styles.selected]: selectedImageIndex === index,
          })}
        >
          <Image
            key={image.thumbnail.src}
            src={image.thumbnail}
            alt={image.alt}
            fill
            sizes={`${pxToRem(88)}rem`}
            className={clsx(styles.thumbnail)}
          />
        </button>
      ))}
    </div>
  );
};

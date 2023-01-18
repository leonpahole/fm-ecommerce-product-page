import { ImageModels } from "@/models/image.models";
import { useEffect, useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import styles from "./AppImageDisplay.module.scss";

interface IProps {
  images: ImageModels.Image[];
}

export const AppImageDisplay = ({ images }: IProps) => {
  const [primaryImageIndex, setPrimaryImageIndex] = useState<number>(0);
  useEffect(() => {
    setPrimaryImageIndex(0);
  }, [images]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.primaryImageWrapper}>
        <Image
          src={images[primaryImageIndex].fullSize}
          alt=""
          fill
          className={styles.primaryImage}
        />
      </div>
      <div className={styles.thumbnailList}>
        {images.map((image, index) => (
          <div className={styles.thumbnailWrapper}>
            <Image
              key={image.thumbnail.src}
              src={image.thumbnail}
              alt=""
              fill
              className={clsx(styles.thumbnail, {
                [styles.selected]: primaryImageIndex === index,
              })}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

import { ImageModels } from "@/models/image.models";
import Modal from "react-modal";
import Image from "next/image";
import { pxToRem } from "@/utils/breakpoints";
import CloseIcon from "public/icon-close-white.svg";
import styles from "./AppImageDisplayPopup.module.scss";
import { AppImageDisplayThumbnailList } from "../AppImageDisplayThumbnailList/AppImageDisplayThumbnailList";
import { AppImageDisplayArrows } from "../AppImageDisplayArrows/AppImageDisplayArrows";

interface IProps {
  isOpen: boolean;
  onClose(): void;
  images: ImageModels.Image[];
  contentLabel: string;
  selectedImageIndex: number;
  onImageSelect(index: number): void;
}

export const AppImageDisplayPopup = ({
  isOpen,
  onClose,
  contentLabel,
  images,
  selectedImageIndex,
  onImageSelect,
}: IProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel={contentLabel}
      className={styles.modal}
      overlayClassName={styles.overlay}
    >
      <div className={styles.wrapper}>
        <button
          type="button"
          onClick={onClose}
          className={styles.closeButton}
          aria-label="Close popup"
        >
          <Image src={CloseIcon} alt="" />
        </button>
        <div className={styles.selectedImageWrapper}>
          <Image
            src={images[selectedImageIndex].fullSize}
            alt={images[selectedImageIndex].alt}
            fill
            sizes={`${pxToRem(550)}rem`}
            className={styles.selectedImage}
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

        <AppImageDisplayThumbnailList
          images={images}
          selectedImageIndex={selectedImageIndex}
          onImageSelect={onImageSelect}
          className={styles.thumbnailList}
        />
      </div>
    </Modal>
  );
};

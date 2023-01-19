import { ImageModels } from "@/models/image.models";
import { useEffect, useState } from "react";
import { AppImageDisplayDesktop } from "./AppImageDisplayDesktop/AppImageDisplayDesktop";
import { AppImageDisplayMobile } from "./AppImageDisplayMobile/AppImageDisplayMobile";

interface IProps {
  images: ImageModels.Image[];
  popupContentLabel: string;
}

export const AppImageDisplay = ({ images, popupContentLabel }: IProps) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);

  useEffect(() => {
    setSelectedImageIndex(0);
  }, [images]);

  const onSelectedImageIndexChange = (index: number) => {
    if (index < 0) {
      return;
    }

    if (index >= images.length) {
      return;
    }

    setSelectedImageIndex(index);
  };

  return (
    <>
      <AppImageDisplayDesktop
        images={images}
        onImageSelect={onSelectedImageIndexChange}
        popupContentLabel={popupContentLabel}
        selectedImageIndex={selectedImageIndex}
      />
      <AppImageDisplayMobile
        images={images}
        onImageSelect={onSelectedImageIndexChange}
        selectedImageIndex={selectedImageIndex}
      />
    </>
  );
};

import { StaticImageData } from "next/image";

export namespace ImageModels {
  export interface Image {
    thumbnail: StaticImageData;
    fullSize: StaticImageData;
  }
}

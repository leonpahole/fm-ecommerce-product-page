import { Breakpoints } from "@/utils/breakpoints";
import Image from "next/image";
import Link from "next/link";
import ImageAvatar from "public/image-avatar.png";
import styles from "./NavbarAvatar.module.scss";

export const NavbarAvatar = () => {
  return (
    <Link href="/" className={styles.wrapper}>
      <Image
        src={ImageAvatar}
        alt="Go to my profile"
        fill
        sizes={`
          (max-width: ${Breakpoints.md}rem) 24px,
          50px`}
        className={styles.avatarImg}
      />
    </Link>
  );
};

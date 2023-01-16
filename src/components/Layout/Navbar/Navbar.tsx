import Image from "next/image";
import Link from "next/link";
import Logo from "public/logo.svg";
import CartIcon from "public/icon-cart.svg";
import ImageAvatar from "public/image-avatar.png";
import styles from "./Navbar.module.scss";

const Links = [
  {
    title: "Collections",
    path: "/",
  },
  {
    title: "Men",
    path: "/",
  },
  {
    title: "Women",
    path: "/",
  },
  {
    title: "About",
    path: "/",
  },
  {
    title: "Contact",
    path: "/",
  },
];

export const Navbar = () => {
  return (
    <header className={styles.wrapper}>
      <div className={styles.left}>
        <Link href="/" className={styles.logoLink}>
          <Image src={Logo} alt="Go to Sneakers home" />
        </Link>
        <nav>
          <ul className={styles.linkList}>
            {Links.map((link) => (
              <li key={link.title}>
                <Link href={link.path} className={styles.link}>
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className={styles.right}>
        <Link href="/" className={styles.imgLink}>
          <Image src={CartIcon} alt="Go to cart" className={styles.cartImg} />
        </Link>
        <Link href="/">
          <Image
            src={ImageAvatar}
            alt="Go to my profile"
            width="50"
            height="50"
            className={styles.avatarImg}
          />
        </Link>
      </div>
    </header>
  );
};

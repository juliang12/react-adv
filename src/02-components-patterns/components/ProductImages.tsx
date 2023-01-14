import { useContext } from "react";
import styles from "../../02-components-patterns/styles/styles.module.css";
import noImg from "../../02-components-patterns/assets/no-image.jpg";
import { ProductContext } from "./ProductCard";

interface ProductImageProps {
  img?: string;
  className?: string;
}

export const ProductImage = ({ img, className }: ProductImageProps) => {
  const { product } = useContext(ProductContext);
  let imgToShow: string;

  if (img) {
    imgToShow = img;
  } else if (product.img) {
    imgToShow = product.img;
  } else {
    imgToShow = noImg;
  }
  return (
    <img
      className={`${styles.productImg} ${className}`}
      src={imgToShow}
      alt=""
    />
  );
};

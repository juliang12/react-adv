import { useContext } from "react";
import styles from "../../02-components-patterns/styles/styles.module.css";
import { ProductContext } from "./ProductCard";

interface ButtonsProps {
  className?: string;
}

export const ProductButtons = ({ className }: ButtonsProps) => {
  const { increaseBy, counter } = useContext(ProductContext);

  return (
    <div className={styles.buttonsContainer}>
      <button onClick={() => increaseBy(-1)} className={styles.buttonMinus}>
        -
      </button>
      <div className={styles.countLabel}>{counter}</div>
      <button onClick={() => increaseBy(1)} className={styles.buttonAdd}>
        +
      </button>
    </div>
  );
};

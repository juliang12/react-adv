import { useCallback } from "react";
import { useContext } from "react";
import styles from "../../02-components-patterns/styles/styles.module.css";
import { ProductContext } from "./ProductCard";

interface ButtonsProps {
  className?: string;
  count?: number;
}

export const ProductButtons = ({ className, count }: ButtonsProps) => {
  const { increaseBy, counter, maxCount } = useContext(ProductContext);

  const isMaxReach = useCallback(() => {
    if (counter === maxCount) {
      return true;
    } else {
      return false;
    }
  }, [counter, maxCount]);

  return (
    <div className={styles.buttonsContainer}>
      <button onClick={() => increaseBy(-1)} className={styles.buttonMinus}>
        -
      </button>
      <div className={styles.countLabel}>{counter}</div>
      <button
        disabled={isMaxReach()}
        onClick={() => increaseBy(1)}
        className={`${styles.buttonAdd} ${isMaxReach() && styles.disabled}`}
      >
        +
      </button>
    </div>
  );
};

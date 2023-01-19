import styles from "../styles/styles.module.css";
import useCounter from "../hooks/useCounter";
import { createContext } from "react";
import { ProductContextProps, Props } from "../interfaces/interfaces";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

const ProductCard = ({
  children,
  product,
  className,
  style,
  onChange,
  value,
  initialValues,
}: Props) => {
  const { counter, increaseBy, isMaxCounterReached, reset, maxCount } =
    useCounter({
      onChange,
      product,
      value,
      initialValues,
    });

  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
        maxCount: initialValues?.maxCount,
      }}
    >
      <div style={style} className={`${styles.productCard} ${className}`}>
        {children({
          counter,
          increaseBy,
          isMaxCounterReached,
          maxCount,
          reset,
          product,
        })}
      </div>
    </Provider>
  );
};

export default ProductCard;

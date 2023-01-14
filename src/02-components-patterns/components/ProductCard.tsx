import styles from "../styles/styles.module.css";
import useCounter from "../hooks/useCounter";
import { createContext } from "react";
import { ProductContextProps, Props } from "../interfaces/interfaces";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

const ProductCard = ({ children, product, className, style }: Props) => {
  const { counter, increaseBy } = useCounter();

  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
      }}
    >
      <div style={style} className={`${styles.productCard} ${className}`}>
        <h1>Product Card</h1>
        {children}
      </div>
    </Provider>
  );
};

export default ProductCard;

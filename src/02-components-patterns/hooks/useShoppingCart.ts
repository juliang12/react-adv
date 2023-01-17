import { useState } from "react";
import { products } from "../data/products";
import { Product } from "../interfaces/interfaces";

interface ProductInCart extends Product {
  count: number;
}

const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ProductInCart;
  }>({});

  const onProductCountChange = ({
    product,
    count,
  }: {
    count: number;
    product: Product;
  }) => {
    setShoppingCart((oldShoppingCart) => {
      if (count === 0) {
        const { [product.id]: onDelete, ...rest } = oldShoppingCart;
        return { ...rest };
      }

      return { ...oldShoppingCart, [product.id]: { ...product, count } };
    });
  };

  return { shoppingCart, onProductCountChange };
};

export default useShoppingCart;

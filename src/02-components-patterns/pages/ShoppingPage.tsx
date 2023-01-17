import React, { useState } from "react";
import "../styles/custom-styles.css";
import ProductCardHoc, {
  ProductButtons,
  ProductImage,
  ProductTitle,
} from "../components";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";
import useShoppingCart from "../hooks/useShoppingCart";

const ShoppingPage = () => {
  const { shoppingCart, onProductCountChange } = useShoppingCart();

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {/* <ProductCard product={product}>
        <ProductCard.Title title="Hola Mundo" />
        <ProductCard.Image />
      </ProductCard> */}

        {products.map((product) => (
          <ProductCard
            style={{ backgroundColor: "#70d1f8" }}
            className="bg-dark"
            product={product}
            onChange={(e) => onProductCountChange(e)}
            value={shoppingCart[product.id]?.count || 0}
          >
            <ProductTitle title="Hola Mundo" className="text-white" />
            <ProductImage className="custom-image" />
            <ProductButtons className="btn" />
          </ProductCard>
        ))}
      </div>

      <div className="shopping-cart">
        {Object.values(shoppingCart).map((product) => (
          <ProductCard
            key={product.id}
            style={{ width: "100px" }}
            className="bg-dark"
            product={product}
            value={product.count}
            onChange={onProductCountChange}
          >
            <ProductImage className="custom-image" />
            <ProductButtons className="btn" />
          </ProductCard>
        ))}
      </div>
    </div>
  );
};

export default ShoppingPage;

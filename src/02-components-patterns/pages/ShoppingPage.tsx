import React from "react";
import "../styles/custom-styles.css";
import ProductCardHoc, {
  ProductButtons,
  ProductImage,
  ProductTitle,
} from "../components";
import ProductCard from "../components/ProductCard";

const product = {
  id: "1",
  title: "Coffe Mud - Card",
  img: "./coffee-mug.png",
};

const ShoppingPage = () => {
  return (
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
      <ProductCard className="bg-dark" product={product}>
        <ProductCardHoc.Title title="Hola Mundo" className="text-white" />
        <ProductCardHoc.Image className="custom-image" />
        <ProductCardHoc.Button className="btn" />
      </ProductCard>

      <ProductCard
        style={{ backgroundColor: "#70d1f8" }}
        className="bg-dark"
        product={product}
      >
        <ProductTitle title="Hola Mundo" className="text-white" />
        <ProductImage className="custom-image" />
        <ProductButtons className="btn" />
      </ProductCard>
    </div>
  );
};

export default ShoppingPage;

import "../styles/custom-styles.css";
import { ProductButtons, ProductImage, ProductTitle } from "../components";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

const product = products[0];

const ShoppingPage = () => {
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

        <ProductCard
          style={{ backgroundColor: "#70d1f8" }}
          className="bg-dark"
          product={product}
          initialValues={{
            count: 4,
            maxCount: 10,
          }}
        >
          {({ reset, increaseBy, counter, isMaxCounterReached }) => (
            <>
              <ProductTitle title="Hola Mundo" className="text-white" />
              <ProductImage className="custom-image" />
              <ProductButtons className="btn" />
              <button onClick={reset}>Reset</button>
              <button onClick={() => increaseBy(-2)}>-2</button>
              {!isMaxCounterReached && (
                <button onClick={() => increaseBy(2)}>+2</button>
              )}
              {counter}
            </>
          )}
        </ProductCard>
      </div>
    </div>
  );
};

export default ShoppingPage;

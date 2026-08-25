import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({
  addtocart,
  handleIncreament,
  handleDecrement,
  handleButton,
  products,
  showCounter,
  setshowCounter,
}) => {
  return (
    <div className="products-container">
      <h1>Desserts</h1>
      <div className="product-grid">
        {products.map((item) => (
          <ProductCard
            addtocart={addtocart}
            handleIncreament={handleIncreament}
            handleDecrement={handleDecrement}
            handleButton={handleButton}
            key={item.name}
            products={item}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;

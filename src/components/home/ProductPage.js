import React, { useContext } from "react";
import { CartContext } from "./Create.context";
import { PRODUCTS } from "./products-data";
import Product from "./Product";

const ProductPage = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <div>
      <h1>Products</h1>
      <div>
        {PRODUCTS.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            title={product.name}
            price={product.price}
            img={product.img}
            onAddToCart={() =>
              addToCart({
                id: product.id,
                name: product.name,
                price: product.price,
                img :product.img,
              })
            }
          />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;

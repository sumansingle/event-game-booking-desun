import './Product.css';

const Product = ({id, title, price, onAddToCart,img }) => {
  return (
    <div className='product-container'>
      <h2>{title}</h2>
      <img src={img}  alt={id} style={{ width: "400px", height: "200px" }}/>
      <p>Price: ${price}</p>
      <button onClick={onAddToCart}>Add to Cart</button>
    </div>
  );
};

export default Product;
